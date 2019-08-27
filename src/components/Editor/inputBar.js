import React, { Component } from 'react';
import Word from './option'
import axios from 'axios'
const nonRelventKeyCode =[18 ,91,17,16,20,9,192,27,173,174,116,255,91,45,46,38,40,18]
let keys =0
let dummy = "hay"
class InpurBar extends Component {
    constructor()
    {
        super()
        this.state =
            {
                value  : "",
                old : true,
                bedWord : [],
                index : 0
            }
    }

    componentDidMount() {
        this.set()
        document.addEventListener('mousedown', this.handleClickOutside ,false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside,false);
    }
    handleClickOutside = (e) =>
    {
        if(this.node.contains(e.target))
        {
            return
        }
        if(!this.state.old)
        {
            this.setState({index : this.state.value.length-1 ,value : this.state.value.replace("|" , "") })
        }
    }
    set = () =>
    {
        this.setState({
            value : this.props.plachHolder
        })
    }
    write =async  (event) =>
    {
        let double = false
        console.log(this.state)
        let check = false
        let add =0
        let str =  this.state.value.slice(0,this.state.index)
        let end = this.state.value.slice(this.state.index,this.state.value.length)
        str = str.replace("|" , "")
        end = end.replace("|" , "")
        end = '|' + end
        if ( event.key === " ")
        {
            event.preventDefault()
            check = true
        }
        if ( nonRelventKeyCode.includes(event.keyCode))
        {
            console.log("inclode")
        }
        else if ( event.key === "Backspace")
        {
            str = str.slice(0 ,str.length-1)
            add--
        }
        else if ( event.key === "Enter")
        {
            add += 7
           str =  str + " Enter "
        }
        else if( event.key == "ArrowRight")
        {
            if (this.state.index < this.state.value.length)
            {
                add++
                double = true
            }

        }
        else if( event.key == "ArrowLeft")
        {
            if (this.state.index > 0) {
                add--
                double = true
            }
        }
        else {
            add++
            console.log(str)
           str = str  + event.key
        }
        str += (end)
        await this.setState({value : str , index : this.state.index +add})
        if (check)
        {
            this.checkGramer()
        }
        if(double)
        {
            this.write({keyCode :18})
        }
        this.props.write(this.state.value , this.props.pt)

    }
    empty = () =>
    {
        if(this.state.old)
        {
            this.setState({value : "" , old : false})
        }
    }
    autoComplete =() =>
    {
        return this.props.complete()
    }
    checkGramer = async ()=>
    {
        let str =""
        let data = this.state.value.split(" ")
        data.forEach(d => str += '+'+d)

       let fix = await axios.post('https://api.textgears.com/check.php?text='+str+'!&key=fPfNeuwNWPorpm3a')
        this.setState({bedWord : fix.data.errors})
    }
    render() {
        return (
            <div ref = {node => this.node=node}onClick={this.empty}  className={this.props.shape} tabIndex="1" onKeyDown={this.write} >
                {this.state.value.split(" ").map(l => {
                    if (l === "Enter") {
                        return <br/>
                    } else {
                        return <span><Word  id = {this.state.value.split(" ").indexOf(l)}
                                      key= {keys++}
                                      better = {this.state.bedWord.find(w => w.bad===l)?
                                          this.state.bedWord.find(w => w.bad===l).better: []}
                                      cls= {this.state.bedWord.find(w => w.bad===l)? "bad" : "good"} val ={l}/>
                                      {l[l.length-1] == '|'? <span className={'autoComplete'}>{this.autoComplete()} </span>:null}
                                      </span>
                    }
                })}
            </div>
        );
    }
}

export default InpurBar