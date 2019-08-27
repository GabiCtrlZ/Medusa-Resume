import React, { Component } from 'react';
import OneEvent from './oneEvent'
class Event extends Component{
    constructor()
    {
        super()
        this.state = {
            xpNum  : 1,
            show : true
        }
    }
    add = () =>
    {
        this.setState({
            xpNum : this.state.xpNum + 1
        })
    }
    render() {
        console.log(this.props.printMode)
        let arr = []
        for ( let i = 0 ; i < this.state.xpNum ; i++)
        {
            arr.push(
                <div  key={i} className={"expirince"}>
            <OneEvent pt = {this.props.pt + i} write = {this.props.write}complete = {this.props.complete} printMode = {this.props.printMode} add ={this.add}/>
                </div>)
        }
        return this.state.show? arr : null
    }
}
export default Event