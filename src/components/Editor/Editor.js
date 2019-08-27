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
            saction : 0,
            freeStyle : 0,
            value : {}
        }
    }
    write = (str , pt) =>
    {
        let val = {...this.state.value}
        val[pt] = str
        this.setState({value : val})
        console.log(this.state.value)
    }
    upLpoad = async () =>
    {
        let html = document.getElementsByClassName("page")[0].innerHTML
        let css =document.getElementsByTagName("STYLE")[0].innerHTML.replace("#17326d" ,"white").replace("color: red" ,"")
         let pdf =  await axios.post('https://api.pdfshift.io/v2/convert' ,{source : html ,css : css},{responseType: 'arraybuffer'}, {
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
            temp.push(<FreeStyle pt ={'free' +i} complete = {this.complete}  write = {this.write} printMode = {this.state.printMode} add = {this.addFree}/>)
        }
        return temp
    }
    showSaction = () =>
    {
        let temp = []
        for ( let i = 0 ; i< this.state.saction ; i++)
        {
            temp.push(<Catgory pt ={'catgory' +i} write = {this.write} complete = {this.complete} rintMode = {this.state.printMode} add = {this.addSaction}/>)
        }
        return temp
    }
    complete =() =>
    {
        let text = ""
        text += this.state.value.headName || ""
        text +=this.state.value.headEmail || ""
        text +=this.state.value.headAdress || ""
        text +=this.state.value.headExplain || ""

        return "j"
    }
    render() {
        return (
            <div id={"editorWall"}>
                <button onClick={this.printMode } className={"printMode"}>print mode</button>
                {this.state.printMode ?<button className={"saveButton"}  onClick={this.upLpoad}>save</button>: null}
            <div  className={"page"}>
                <Head write = {this.write} complete = {this.complete} />
                <Catgory pt = {'catgory'} write = {this.write} complete = {this.complete} printMode = {this.state.printMode} add = {this.addSaction}/>
                {this.showSaction()}
                <FreeStyle  write = {this.write} complete = {this.complete}  printMode = {this.state.printMode} add = {this.addFree}/>
                {this.showFree()}
            </div>
            </div>


        );
    }
}

export default Editor