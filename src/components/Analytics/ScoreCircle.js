import React, { Component } from 'react';

class ScoreCircle extends Component {
    render() {
        const score = this.props.score
        return (
                <div className="clearfix">
                    <div className={`c100 p${score} big`}>
                        <span>{score}%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ScoreCircle