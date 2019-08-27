import React, { Component } from 'react'

class TableHead extends Component {
    render() {
        return (
            <tr className='table_head'>
                {this.props.keys.map(x => <th key={x}>{x[0].toUpperCase() + x.slice(1)}</th>)}
            </tr>
        )
    }
}

export default TableHead