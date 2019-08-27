import React, { Component } from 'react';
import OneJob from './OneJob';

class FoundedJobs extends Component {
    render() {
        let data = this.props.data
        let i = 0
        return (
            <div className='row iframe_dad' >
                {data.map(x => <OneJob job={x} key={++i} />)}
            </div>
        );
    }
}

export default FoundedJobs