import React, { Component } from 'react';
import axios from 'axios'
import Loader from '../Analytics/Loader';
import FoundedJobs from './FoundedJobs';

class Jobs extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            job: '',
            location: '',
            data: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    searchJobs = async () => {
        this.setState({ loading: true })
        let job = this.state.job.split(' ').join('+')
        let location = this.state.location.split(' ').join('+')
        const data = await axios.get(`/findjobs?q=${job}&l=${location}`)
        if (data.data === 'invalid request') {
            alert('invalid request')
            return this.setState({ loading: false })
        }
        this.setState({ loading: false, data: data.data })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="section white">
                        <div className="row container_search center-align">
                            <div className='row'>
                                <input id='in1' name='job' className='col s12 m4 l3' type="text" placeholder='Job name' value={this.state.job} onChange={this.handleChange} />
                                <div className='col s0 m8 l9'></div>
                            </div>
                            <div className='row'>
                                <input id='in2' name='location' className='col s12 m4 l3' type="text" placeholder='City' value={this.state.location} onChange={this.handleChange} />
                                <div className='center-align col s0 m3 l2'>
                                    {this.state.loading ? <Loader /> : <div className='waves-effect waves-light btn' onClick={this.searchJobs} >Search Jobs</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    {!this.state.data ? null : <FoundedJobs data={this.state.data} />}
                </div>
            </div>
        );
    }
}

export default Jobs