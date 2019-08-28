import React, { Component } from 'react';
import InpurBar from './inputBar'
class Head extends Component {
    render() {
        return(
            <div>
                    <InpurBar pt = {'headName'} write = {this.props.write} plachHolder = "name" shape = "nameInput" name ="name"  />
                    <div className={"proprty"}>
                        <div></div>
                        <InpurBar pt = {'headEmail'} write = {this.props.write} plachHolder = "email: " shape = "email" name ="email" />|
                        <InpurBar pt = {'headAdress'} write = {this.props.write} plachHolder = "adress: " shape = "adress" name ="adress"  />|
                        <InpurBar  pt = {'headphone'} write = {this.props.write} plachHolder = "phone: " shape = "phone" name ="phone"  />
                        <div></div>
                    </div>
                    <InpurBar pt = {'headExplain'} write = {this.props.write}  plachHolder = "Profile: this is the first part that the reader see, explain to him why he want to read the rest, tell him about your main advance and the job you are locking for" shape = "summry" name ="summry"  />
                    <hr/>
                </div>
        );
    }
}
export default Head
