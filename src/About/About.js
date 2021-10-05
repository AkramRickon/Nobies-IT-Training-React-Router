import React from 'react';
import { Col, Row } from 'react-bootstrap';
import training from '../images/team_1.jpg'
import './About.css';

const About = () => {
    return (
        <div className="page-container ">
            {/* Top section text */}
        <div className="text-center  text-white p-3 custom-color ">
                <div>
                <h3>LEARN FROM THE BEST</h3>
                <h3>About US</h3>
                <div className="line2"></div>
                </div>
        </div>
        {/* middle section  */}
        
           <Row className=" w-75 mx-auto mt-5 pt-5 ">
                <Col md={6} sm={12} className="">
                    {/* <h4>Nobies Academy :</h4> */}
                   
                    <p className="fs-6 align-text"> <span className="fst-italic fs-4 fw-bold">Nobies Academy</span> is Bangladesh’s leading educational platform for superior online courses, professional training and corporate eLearning services that help you develop useful skills and accomplish more in life.Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Our online courses and career-track programs are designed in collaboration with the best of industry experts and organizations in Bangladesh. As part of our mission, we arrange programming contest, software engineering events and seminars</p>
                    
                </Col>
                <Col md={6} sm={12}>
                    <img src={training} alt="" className="img-fluid"></img>
                </Col>
           </Row>
        </div>
    );
};

export default About;