import React, { Component } from 'react';

class OneJob extends Component {
    openLink = () => {
        window.open(this.props.job.url, "_blank") 
    }
    render() {
        return (
            <div className='col s4'>
                <div className="card blue-grey darken-1 job_card">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.job.name}</span>
                        <p className='will_flow' >{this.props.job.description}</p>
                    </div>
                    <div className="card-action">
                        <div onClick={this.openLink} className='waves-effect waves-light btn' >This is a link</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OneJob