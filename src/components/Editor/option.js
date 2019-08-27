import React, { Component } from 'react';
import axios from "axios";
class Word extends Component {
    constructor()
    {
        super()
        this.state =
            {
                press : 0,
                option : [{index : "2" , val : 'delte' }  , {index : "3" , val : 'bold' }]
            }
    }

    press = (e) =>
    {
        this.setState({press : e.target.id})
    }
    render() {
        let op = [...this.state.option]
        this.props.better.forEach(b => op.push({index:b , val:b}))
        return( <span>
            {this.state.press == 0 ||this.state.press == 1 || this.state.press == 3?
            <span id = {1} onDoubleClick={this.press} className={this.state.press == 3? "boldy" : this.props.cls}>
                {this.props.val} </span> :
                <span id = {1} onDoubleClick={this.press} className={'good'}> {this.state.press} </span>}
            {this.state.press == 1? <Opsion option = {op} func = {this.press}/>: null }
        </span>)
    }

}
class Opsion extends Component {
    componentDidMount() {
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
        this.props.func({target : {id : 0}})
    }
    render() {
        return <div ref = {node => this.node=node}
                    className={"activity"}>{this.props.option.map(o => {return <span
            onClick={this.props.func} id={o.index}> {o.val}</span>})}

        </div>
    }

}
export default Word