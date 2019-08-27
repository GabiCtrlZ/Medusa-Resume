import React, { Component } from 'react'
import TableHead from './TableHead';
import TableBody from './TableBody';
import MovePage from './MovePage';
import ContactCard from '../Contact/ContactCard';

class Table extends Component {
    constructor() {
        super()
        this.state = {
            card: false,
            name: '',
            phone: '',
            skills: []
        }
    }
    changeCard = (name, phone, skills) =>{
        this.setState({
            card: !this.state.card,
            phone,
            name,
            skills
        })
    }
    render() {
        return (
            <div className="container_search">
                <table>
                    <thead>
                        <TableHead keys={this.props.keys}/>
                    </thead>
                    <tbody>
                        {this.props.data.map(x => <TableBody keys={this.props.keys} user={x} key={x._id} changeCard={this.changeCard} skillsArr={this.props.skillsArr}/>)}
                    </tbody>
                </table>
                <MovePage pageNum={this.props.pageNum} changePage={this.props.changePage}/>
                {this.state.card ? <ContactCard update={this.props.update} name={this.state.name} phone={this.state.phone} companyName={this.props.companyName} skills={this.state.skills} changeCard={this.changeCard}/>: null}
            </div>
        )
    }
}

export default Table