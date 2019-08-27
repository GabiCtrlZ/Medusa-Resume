import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Analytics from './Analytics';

class AnalyticsParallax extends Component {
    render() {
        return (
            <div>
                <div className="section white">
                    <div className="row container_search center-align">
                        <h2 className="header"><i className="material-icons">class</i>Score my resume!</h2>
                        <h6 className="grey-text text-darken-3 lighten-3">Use <strong>Jellyfish</strong>, the first jellyfish to have a brain, to score
                        your resume!</h6>
                        <Analytics />
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallaxy"></div>
                </div>
                <div className="section white">
                    <div className="row container_search center-align">
                        <h2 className="header"><i className="material-icons">description</i>The result is not satisfying?</h2>
                        <h6 className="grey-text text-darken-3 lighten-3">You can use the link down here to use our smart editor
                         and modify your resume!</h6>
                        <Link to="/editor"><div className="waves-effect waves-light btn">Go to the editor!</div></Link>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallaxm"></div>
                </div>
            </div>
        );
    }
}



export default AnalyticsParallax