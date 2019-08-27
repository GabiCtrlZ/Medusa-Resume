import React, { Component } from 'react'

class Chip extends Component {
    removeSkill = () =>{
        this.props.removeSkill(this.props.name)
    }
    render() {
        return (
            <span>
                <span className="chip">
                    {this.props.name}
                    <span className="closebtn" onClick={this.removeSkill}>
                        &times;
                    </span>
                </span>
            </span>
        )
    }
}

export default Chip