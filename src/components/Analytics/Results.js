import React, { Component } from 'react';
import ScoreCircle from './ScoreCircle';

class Results extends Component {
    render() {
        const data = this.props.data
        return (
            <div className='container'>
                <div className="row">
                    <div className='col s0 m2'></div>
                    <div className="col s12 m8">
                        <div className="card blue-grey darken-1" id='score_card'>
                            <div className="card-content white-text" >
                                <span className="card-title">OVERALL SCORECARD</span>
                            </div>
                            <div className="card-action">
                                <ScoreCircle score={data.resumeScore} />
                                <p><i class="material-icons">chevron_right</i>You used {data.words} words</p>
                                <p><i class="material-icons">chevron_right</i>You wrote {data.sentence} sentences</p>
                                <p><i class="material-icons">chevron_right</i>you {(data.email === 1 && data.phone === 1) ? 'included' : 'didnt include'} your contact information</p>
                                <p><i class="material-icons">chevron_right</i>you {(data.summery === 1) ? null : "didn't"} wrote a summery</p>
                                <p><i class="material-icons">chevron_right</i>you used {(data.oldDates === 1) ? 'un' : null}relevant dates </p>
                                <p><i class="material-icons">chevron_right</i>you {(data.chronOrder === 1) ? "ordered": 'didnt order'} the resume dates chronologicly</p>
                                <p><i class="material-icons">chevron_right</i>your resume is {data.numOfPages} pages long</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results