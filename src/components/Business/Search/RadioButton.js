import React, { Component } from 'react'

class RadioButton extends Component {
    handleInput = (e) =>{
        this.props.handleInput(e)
    }
    render() {
        return (
            <p className='with_gap'>
                <label>
                    <input className="with-gap" name='group1' type="radio"/>
                    <span onClick={this.handleInput} className='radioVal'>{this.props.value}</span>
                </label>
            </p>
        )
    }
}

export default RadioButton