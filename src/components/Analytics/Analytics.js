import React, { Component } from 'react';
import axios from 'axios'
import Loader from './Loader';
import Results from './Results';

class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            sentPDF: false,
            data: false
        }
    }
    sendFile = async () => {
        const self = this
        var formData = new FormData();
        var resumefile = document.querySelector('#file');
        if (!resumefile.files[0]) {
            alert('Chose a file!!')
            return
        }
        formData.append("resume", resumefile.files[0]);
        this.setState({ sentPDF: true })
        const data = await axios.post('/file', formData)
        self.setState({ data: data.data, sentPDF: false })
    }
    render() {
        return (
            <div className='container_search file_upload' >
                {!this.state.data ? null : <Results data={this.state.data} />}
                <div className='container center-align'>
                    Select a PDF file: <input type="file" name="myFile" id='file' /><br /><br />
                    {this.state.sentPDF ? <div className='container'><Loader /></div> : <div className="waves-effect waves-light btn" onClick={this.sendFile} >Send</div>}
                </div>
            </div>
        );
    }
}

export default Analytics