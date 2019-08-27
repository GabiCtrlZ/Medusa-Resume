import React, { Component } from 'react';

class Us extends Component {
    render() {
        return (
            <div className='welcome_card'>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1" id='client_card' >
                            <div className="card-content white-text" >
                                <span className="card-title">Gabriel Balko</span>
                                <p>22 years old from Modi'in. Author of Jellyfish and the Harry potter series  
                                </p>
                            </div>
                            <div className="card-action">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1" id='second_card' >
                            <div className="card-content white-text" >
                                <span className="card-title">Yuval Bloch</span>
                                <p>The first for his name ,king of Isreal and the iland, from the dynasty of david
                                </p>
                            </div>
                            <div className="card-action">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Us