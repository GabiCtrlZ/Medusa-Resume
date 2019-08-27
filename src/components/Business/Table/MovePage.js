import React, { Component } from 'react'

class MovePage extends Component {
    next = () =>{
        this.props.changePage(1)
    }
    previous = () =>{
        this.props.changePage(-1)
    }
    render() {
        return (
            <ul className="pagination center-align moving">
                <li className="waves-effect arroww" onClick={this.previous}><i className="material-icons">chevron_left</i></li>
                <li className="page_on"> {this.props.pageNum} </li>
                <li className="waves-effect arroww" onClick={this.next}><i className="material-icons">chevron_right</i></li>
            </ul>
        )
    }
}

export default MovePage