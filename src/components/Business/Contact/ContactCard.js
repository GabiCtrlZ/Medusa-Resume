import React, { Component } from 'react'
import SMS from './SMS.js'
import SkillsView from './SkillsView.js';
import axios from 'axios'

class ContactCard extends Component {
    constructor() {
        super()
        this.state = {
            sms: '',
            active: false
        }
    }
    changeCard = () =>{
        this.props.changeCard('', '', [])
    }
    send = () =>{
        if (this.props.phone === 'Phone not found' || !this.state.sms.length || !this.props.companyName.length){
            alert('info not right')
            return
        }
        axios.post('http://localhost:8080/sendsms', {
            phoneNum: this.props.phone.toString(),
            company: this.props.companyName,
            text: this.state.sms
        })
        alert(`${this.state.sms} to ${this.props.phone} from ${this.props.companyName} `)
    }
    changeActiveTrue = () =>{
        this.setState({
            active: true
        })
    }
    changeActiveFalse = () =>{
        this.setState({
            active: false
        })
    }
    handleInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="row center-align">
                <div className="col s12 m6 s4">
                    <div className="card" id='client_card2'>
                        <div className="card-content white-text row center-align">
                            <div className='waves-effect waves-light kill_button' onClick={this.changeCard}><i className="material-icons" id='kill_icon' >close</i></div>
                            <span className={this.state.active ?  "card-title" : "card-title light_on"} id='b1' onClick={this.changeActiveFalse} >SMS</span>
                            <span className={this.state.active ?  "card-title light_on" : "card-title"} id='b2' onClick={this.changeActiveTrue} >Skills</span>
                            {this.state.active?
                            <SkillsView skills={this.props.skills} /> :
                            <SMS name={this.props.name} sms={this.state.sms} handleInput={this.handleInput} />
                            }
                        </div>
                        <div className="card-action">
                            {this.state.active ? null : <div className="waves-effect waves-light btn" onClick={this.send}>Send SMS</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactCard