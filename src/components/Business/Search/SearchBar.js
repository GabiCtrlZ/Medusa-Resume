import React, { Component } from 'react'

class SearchBar extends Component {
    handleInput = (e) =>{
        this.props.handleInput(e)
    }
    render() {
        return (
            <div className="col s4 m2">
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" name='searchVal' value={this.props.value} onChange={this.handleInput} id='in1' placeholder='Search' />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar