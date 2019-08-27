import React, { Component } from 'react';
import Loader from '../Analytics/Loader';
import axios from 'axios'
import Chip from './Chip';

class LandingBusiness extends Component {
    constructor() {
        super()
        this.state = {
            sentPDF: false,
        }
    }
    sendFile = async () => {
        var formData = new FormData();
        var resumefile = document.querySelector('#file');
        if (!resumefile.files[0]) {
            alert('Chose a file!!')
            return
        }
        let counter = 1
        for (let file of resumefile.files) {
            formData.append(`resume${counter++}`, file);
        }
        this.setState({ sentPDF: true })
        const data = await axios.post('/filebusiness', formData)
        this.props.getData(data.data)
    }
    handleChange = (e) => {
        this.props.handleChange(e)
    }
    addSkill = (e) => {
        if (e.key === 'Enter') {
            this.props.addSkill(e)
        }
    }
    render() {
        return (
            <div>
                <div className="section white">
                    <div className="row container_search center-align">
                        <h2 className="header"><i className="material-icons">assessment</i>Welcome to Medusa Resume Business</h2>
                        <h6 className="grey-text text-darken-3 lighten-3">Here you can upload all the canadaite application you recieved and
                        see in a calculated table every thing!</h6>
                        <div className='container_search file_upload' >
                            <div className='container' >
                                <div className='container' >
                                    <div className='container' >
                                        <input type="text" value={this.props.value} name='companyName' onChange={this.handleChange} placeholder='Enter company name' />
                                    </div>
                                </div>
                            </div>
                            {this.props.skills.map(x => <Chip name={x} key={x} removeSkill={this.props.removeSkill} />)}
                            <div className='container' >
                                <div className='container' >
                                    <div className='container' >
                                        <input type="text" value={this.props.value2} name='skills' onChange={this.handleChange} onKeyPress={this.addSkill} placeholder='Enter Skills' />
                                    </div>
                                </div>
                            </div>
                            <div className='container center-align'>
                                Upload all the resumes: <input type="file" name="myFile" id='file' multiple /><br /><br />
                                {this.state.sentPDF ? <div className='container'><Loader /></div> : <div className="waves-effect waves-light btn" onClick={this.sendFile} >Send</div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallaxo"></div>
                </div>
            </div>
        );
    }
}



export default LandingBusiness