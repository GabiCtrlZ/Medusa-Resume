import React, { Component } from 'react';

class Documentation extends Component {
    render() {
        return (
            <div>
                <div className="section white">
                    <div className="row container_search center-align">
                        <h2 className="header"><i className="material-icons">assessment</i>Medusa Resume For Developers</h2>
                        <h6 className="grey-text text-darken-3 lighten-3">Welcome to the Medusa Developer Documentation. Get familiar with concepts
                         common to Medusa APIs and products.</h6>
                        <br />
                        <h3 className="grey-text text-darken-3 lighten-3">Products</h3>
                        <h5 className="grey-text text-darken-3 lighten-3">Scrape for jobs</h5>
                        <h6 className="grey-text text-darken-3 lighten-3">Request Node.js</h6>
                        <h6 className="grey-text text-darken-3 lighten-3 code_stuff">axios.get('https://medusa-resume.herokuapp.com/findjobs?q=[job-description]{'&'}l=[location]')</h6>
                        <h6 className="grey-text text-darken-3 lighten-3">Response</h6>
                        <h6 className="grey-text text-darken-3 lighten-3 code_stuff">
                        [{'{'}
        "url": "https://example.com",<br/>
        "name": "company name",<br/>
        "description": "in company name we bla bla bla."<br/>
    },<br/>
    {'{'}
        "url": "https://diffentcity.com",<br/>
        "name": "Another company anme",<br/>
        "description": "description about the job"<br/>
    },<br/>
    {'{'}
        "url": "https://something.com",<br/>
        "name": "you get the idea",<br/>
        "description": "Required a Senior C++ Software Engineer in Imaging and Computer Vision Department.<br/> The position includes development of software infrastructure for AI solutions. The position requires strong software design and development skills, with emphasis on Object Oriented Design and C++.<br/> In this role you will be responsible for: Design and development of software infrastructure for AI solutions.\n  \nDevelopment of simulation models for complex systems. Leading the integration of software infrastructure components with the hardware.<br/> System performance optimization. Full time job; Sunday- Thursday .<br/> great salary conditions! Requirements:  B.Sc. in Electrical/Computer Engineering or B.A. in Computer Science.<br/>5+ years of C++ experience. Strong working knowledge of Object Oriented software design and programming techniques. Understanding of complex software systems and ability to dive fast into existing code.<br/> Knowledge in modern C++ (C++11 and above) Advantage.\n"<br/>
    }
]
                         </h6>
                        <h5 className="grey-text text-darken-3 lighten-3">Score and analyze single resume pdf</h5>
                        <h6 className="grey-text text-darken-3 lighten-3">Request Node.js</h6>
                        <h6 className="grey-text text-darken-3 lighten-3 code_stuff">axios.post('https://medusa-resume.herokuapp.com/file', formData)</h6>
                        <h6 className="grey-text text-darken-3 lighten-3">Response</h6>
                        <h6 className="grey-text text-darken-3 lighten-3 code_stuff">
                            "words": 182,<br />
                            "sentence": 14,<br />
                            "chronOrder": 1,<br />
                            "oldDates": -1,<br />
                            "summery": 1,<br />
                            "email": 1,<br />
                            "phone": 1,<br />
                            "numOfPages": 1,<br />
                            "resumeScore": 93
                         </h6>
                        <h5 className="grey-text text-darken-3 lighten-3">analyze multiple pdf resume files</h5>
                        <h6 className="grey-text text-darken-3 lighten-3">Request Node.js</h6>
                        <h6 className="grey-text text-darken-3 lighten-3 code_stuff">axios.post('https://medusa-resume.herokuapp.com/filebusiness', formData)</h6>
                        <h6 className="grey-text text-darken-3 lighten-3">Response</h6>
                        <h6 className="grey-text text-darken-3 lighten-3 code_stuff">
                            [
                            {'{'}<br />
                            "name": "john doe",<br />
                            "email": "john@gmail.com",<br />
                            "phone": "972-54-1212121",<br />
                            "skills": [<br />
                            "Coding",
                            "Technical",
                            "Chemistry",
                            "Github",
                            "Css",
                            "English",<br/>
                            "Fitness",
                            "Javascript",
                            "Database",
                            "Sql",
                            "Physics",
                            "Apis",
                            "Html",
                            "Mathematics"
                            ],<br />
                            "exp": 0
                            {'}'},<br />
                            {'{'}<br />
                            "name": "Bruce Wayne",<br />
                            "email": "Batm..Bruce@gmail.com",<br />
                            "phone": "972-54-2595585",<br />
                            "skills": [<br />
                            "Chemistry",
                            "Database",
                            "Biology",
                            "Cloud",
                            "Testing",
                            "Sql",<br/>
                            "English",
                            "Api",
                            "Writing",
                            "Analysis",
                            "Javascript",
                            "Html",
                            "Technical",
                            "Crm",
                            "System",
                            "Compliance",
                            "Css"
                            ],<br />
                            "exp": 0
                            {'}'} 
                            ]
                        </h6>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallaxo"></div>
                </div>
            </div>
        );
    }
}



export default Documentation