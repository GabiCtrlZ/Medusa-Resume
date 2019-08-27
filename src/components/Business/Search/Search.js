import React, { Component } from 'react'
import SearchBar from './SearchBar';
import RadioButton from './RadioButton';

class Search extends Component {
    render() {
        return (
            <div className='container_search'>
                <div className="row search_bar">
                    <SearchBar handleInput={this.props.handleInput} value={this.props.state.searchVal} />
                    <div className="input-field col s8 m4">
                        <form action="#">
                            <RadioButton handleInput={this.props.handleInput} value={'Name'} />
                            <RadioButton handleInput={this.props.handleInput} value={'Email'} />
                            <RadioButton handleInput={this.props.handleInput} value={'Phone'} />
                            <RadioButton handleInput={this.props.handleInput} value={'Skills'} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search