import React, { Component } from 'react'

class SkillsView extends Component {
    render() {
        let counter = 0
        return (
            <div className='will_flow' >
                    {this.props.skills.map(x => <h6 key={++counter} >{x}</h6> )}
            </div>
        )
    }
}

export default SkillsView