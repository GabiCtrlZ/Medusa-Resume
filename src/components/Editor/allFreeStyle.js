import React, { Component } from 'react';
import InpurBar from './inputBar'
class FreeStyle extends Component {
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
            this.state.show ?<div className={"free"}>
                <InpurBar pt = {this.props.pt + 'title'} cwrite = {this.props.write}  plachHolder = "free Style " shape = "freeTitle" name ="event"  />
                {this.props.printMode?null :
                    <button className={"cicrcle"}><span onClick={this.addSaction} className="plusCat">+</span><span onClick={this.deleteSaction} className="minosCat">-</span></button>}
                <InpurBar pt = {this.props.pt + 'explain'} write = {this.props.write}  plachHolder = "tell us about thing that did not depend on time like your skills or prizes" shape = "freeLine" name ="event"  />
            </div>: null
        );
    }
}
export default FreeStyle