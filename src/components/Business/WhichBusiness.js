import React, { Component } from 'react';
import Business from './Business';
import LandingBusiness from './LandingBusiness';

class WhichBusiness extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            companyName: 'Company Name',
            skills: 'Skills',
            skillsArr: []
        }
    }
    getData = (data) => {
        this.setState({ data })
    }
    handleInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.setState({ [name]: value })
    }
    addSkill = (e) => {
        let skillsArr = [...this.state.skillsArr]
        let value = e.target.value
        skillsArr.push(value)
        this.setState({
            skillsArr,
            skills: ''
        })
    }
    removeSkill = (skill) => {
        console.log(skill)
        let skillsArr = [...this.state.skillsArr]
        this.setState({
            skillsArr: skillsArr.filter(x => x !== skill)
        })
    }
    render() {
        return (
            <div>
                {this.state.data.length ? <Business data={this.state.data} companyName={this.state.companyName} skillsArr={this.state.skillsArr.join('')} /> : <LandingBusiness getData={this.getData} value={this.state.companyName} value2={this.state.skills} handleChange={this.handleInput} skills={this.state.skillsArr} addSkill={this.addSkill} removeSkill={this.removeSkill} />}
            </div>
        );
    }
}



export default WhichBusiness