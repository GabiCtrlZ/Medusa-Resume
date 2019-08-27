import React, { Component } from 'react';
import InpurBar from "./inputBar";
class OneEvent extends Component {
    constructor()
    {
        super()
        this.state = {
            show : true
        }
    }
    deleteSaction = () =>
    {
        this.setState({show : false})
    }
    render() {
        return(this.state.show?
                <div className={"expirince"}>
            {this.props.printMode?null :<span><span onClick={this.props.add} className="plus">+</span> <span onClick={this.deleteSaction} className="plus">-</span></span>}
            <InpurBar pt  = {this.props.pt + 'year'} write = {this.props.write} complete = {this.props.complete} plachHolder = "year" shape = "xp" name ="year"  />|
            <InpurBar pt ={this.props.pt + 'org'} write = {this.props.write} complete = {this.props.complete} plachHolder = "position" shape = "xp" name ="job"  />-
            <InpurBar pt  ={this.props.pt + 'event'} write = {this.props.write} complete = {this.props.complete} plachHolder = "organization " shape = "xp" name ="company"  />,
            <InpurBar pt  ={this.props.pt + 'locat'} write = {this.props.write} complete = {this.props.complete} plachHolder = "location " shape = "xp" name ="loction"  />
            <InpurBar pt  ={this.props.pt + 'explain'} write = {this.props.write} complete = {this.props.complete} plachHolder = "here put relevant event from your life like education or experience" shape = "aboutJob" name ="aboutJob"  />
        </div> :  null)
    }
}
export default OneEvent