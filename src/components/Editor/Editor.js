import React, { Component } from 'react';
import Catgory from './catagory'
import { saveAs } from 'file-saver'
import FreeStyle from './allFreeStyle'
import Head from './head'
import axios from 'axios'
class Editor extends Component {
    constructor()
    {
        super()
        this.state = {
            xpNum  : 1,
            printMode : false,
            saction : 1,
            freeStyle :1,
            value : {},
            long : 0
        }
    }
    write = (str , pt) =>
    {
        let val = {...this.state.value}
        val[pt] = str
        this.setState({value : val})
        console.log(this.state.value)
        let text =""
        for (let sent in this.state.value)
        {
            text += this.state.value[sent].replace('|' , '') + ' '
        }
        this.setState({long : text.split(" ").length})
    }
    upLpoad = async () =>
    {
        let html = document.getElementsByClassName("page")[0].innerHTML
        let pdf =  await axios.post('https://api.pdfshift.io/v2/convert' ,{source : html},{responseType: 'arraybuffer'}, {
            auth: {
                username: 'c67c19767aae47498f123d885b2ae65a',
                password: " "
            }

        })
        let blob = new Blob([pdf.data], {type: 'application/pdf'})
        saveAs(blob, "cv.pdf")
    }

    add = () =>
    {
        this.setState({
            xpNum : this.state.xpNum + 1
        })
    }
    printMode = () =>
    {
        this.setState({printMode : !this.state.printMode})
    }
    addSaction = () =>
    {
        this.setState({saction : this.state.saction+1})
    }
    addFree= () =>
    {
        this.setState({freeStyle : this.state.freeStyle+1})
    }
    showFree = () =>
    {
        let temp = []
        for ( let i = 0 ; i< this.state.freeStyle ; i++)
        {
            temp.push(<FreeStyle pt ={'free' +i} write = {this.write} printMode = {this.state.printMode} add = {this.addFree}/>)
        }
        return temp
    }
    showSaction = () =>
    {
        let temp = []
        for ( let i = 0 ; i< this.state.saction ; i++)
        {
            temp.push(<Catgory pt ={'catgory' +i} write = {this.write}  printMode = {this.state.printMode} add = {this.addSaction}/>)
        }
        return temp
    }

    render() {
        return (
            <div id={"editorWall"}>
                <button id='botan' onClick={this.printMode } className={"printMode"}>print mode</button>
                <button id='botan' className={"saveButton"}  onClick={this.upLpoad}>{this.state.printMode ? 'save' : <span style={{color :this.state.long < 100 ? 'blue' : this.state.long < 400 ? 'green' : 'red'}}>{this.state.long}W</span>}</button>
                <div  className={"page"}>
                    <Head write = {this.write} />
                    {this.showSaction()}
                    {this.showFree()}
                </div>
            </div>


        );
    }
}

export default Editor