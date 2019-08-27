import React, { Component } from 'react'

class TableBody extends Component {
    isSkills = (key) => {
        if (key === 'skills') {
            return this.props.user[key].filter(x => this.props.skillsArr.toLowerCase().includes(x.toLowerCase())).join(', ')
        }
        return this.props.user[key]
    }
    openUpdate = (e) => {
        this.props.changeCard(this.props.user.name, this.props.user.phone, this.props.user.skills)
    }
    render() {
        return (
            <tr className='table_body' id={this.props.user['_id']} onClick={this.openUpdate}>
                {this.props.keys.map(x => <td key={x}>{x === 'exp' ? this.isSkills(x) + ' years' : this.isSkills(x)}</td>)}
            </tr>
        )
    }
}

export default TableBody