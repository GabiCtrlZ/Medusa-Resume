import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper nav_bar">
                        <div href="#" className="brand-logo"><Link to="/">Medusa Resume</Link></div>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/editor">Get Started</Link></li>
                            <li><Link to="/analytics">Upload Resume</Link></li>
                            <li><Link to="/jobs">Find Jobs</Link></li>
                            <li><Link to="/business">Business</Link></li>
                            <li><Link to="/devs">Developers</Link></li>
                            <li><Link to="/us">About us</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar