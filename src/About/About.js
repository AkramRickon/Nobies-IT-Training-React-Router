import React from 'react';
import training from '../images/team_1.jpg'
import './About.css';

const About = () => {
    return (
        <div className="page-container ">
            {/* Top section text */}
        <div className="text-center  text-white p-3 custom-color ">
                <div>
                <h3>LEARN FROM THE BEST</h3>
                <h3>About Us</h3>
                <div className="line2"></div>
                </div>
        </div>
        {/* middle section  */}
        <div className="">
           <div className="d-flex justify-content-between w-75 mx-auto mt-5 pe-4">
                <div className="text-wrap">
                    <h4>Why Choose Nobies Academy:</h4>
                   
                    <p className="fs-6 align-text"> Learn using real world projects with customer requirements specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server. Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge. Build a solid foundations on the essential programming skills and knowledge. Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.</p>
                    
                </div>
                <div>
                    <img src={training} alt="" className="ms-4"></img>
                </div>
           </div>
        </div>
        </div>
    );
};

export default About;