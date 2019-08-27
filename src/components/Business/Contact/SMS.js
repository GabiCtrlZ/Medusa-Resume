import React, { Component } from 'react'

class SMS extends Component {
    handleInput = (e) => {
        this.props.handleInput(e)
    }
    render() {
        return (
            <div>
                <textarea rows="8" cols="50" name='sms' id='in3' placeholder={`Send ${this.props.name} massage `} value={this.props.sms} onChange={this.handleInput}>
                </textarea>
            </div>
        )
    }
}

export default SMS