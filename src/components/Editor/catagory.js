import React, { Component } from 'react';
import InpurBar from './inputBar'
import Event from "./event";
class Catgory extends Component {
    constructor()
    {
        super()
        this.state ={
            show : true
        }
    }
    deleteSaction = () =>
    {
        this.setState({show : false})
    }
    addSaction = () =>
    {
        this.props.add()
    }
    render() {
        return(
            this.state.show ?<div>
                 <InpurBar pt = {this.props.pt + 'title'} write = {this.props.write}  plachHolder = "Experience " shape = "event" name ="event"  />
                {this.props.printMode ? null :
                    <button id='botan' className={"cicrcle"}><span onClick={this.addSaction} className="plusCat">+</span><span onClick={this.deleteSaction} className="plusCat">-</span></button>}
                <Event pt = {this.props.pt + 'event'} write = {this.props.write}  printMode = {this.props.printMode}/>
            </div>: null
        );
    }
}
export default Catgory