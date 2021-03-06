import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Parallax extends Component {
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header"><i className="material-icons">description</i>Medusa Resume</h2>
                        <h6 className="grey-text text-darken-3 lighten-3">Our site helps you create the perfect(ish) resume to impress
                        the companies you apply to!
                        With the help of our A.I, <strong>Jellyfish</strong>, and our smart editor, we'll guide you towards success!</h6>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallaxz"></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header"><i className="material-icons">class</i>Score my resume</h2>
                        <h6 className="grey-text text-darken-3 lighten-3">Already have a resume? No problem!
                        you can upload <strong>your</strong> own resume and let our A.I, <strong>Jellyfish</strong>, score it and receive
                        analysis of your resume!</h6>
                        <Link to="/analytics"><div className="waves-effect waves-light btn">Score my resume!</div></Link>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallaxy"></div>
                </div>
            </div>
        );
    }
}



export default Parallax