import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    return (
        <div className="bg-dark  bottom-0 start-0 end-0">
            <Container>
                {/* Footer is devided into three columns */}
                <Row xs={1} md={3} className="g-4">
                    <Col className="text-white">
                        <ul>
                            <li><h5>ADDRESS</h5></li>
                        </ul>
                        <ul>
                            <li><h6>East Nandipara </h6></li>
                            <li><h6>House # 174 (5th Floor)</h6></li>
                            <li><h6>Rampura, Dhaka-1214</h6></li>
                            <li><h6>Bangladesh</h6></li>
                        </ul>
                    </Col>

                    <Col>
                        <div className="text-center text-white ">
                            <h5>Follow us</h5>
                            <div>
                                <i className="fab fa-google"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-facebook"></i>
                            </div>

                        </div>
                    </Col>

                    <Col className="text-end text-white">
                        <h5>Contact Us</h5>
                        <h6>+88 58050442-3</h6>
                        <h6>+8801933388902</h6>
                        <h6>9AM - 5PM (Fri, Sat off)</h6>
                        <h6>Questions? info@nobies.com</h6>
                    </Col>
                </Row>
            </Container>
            <p className="text-center copyright-bg mb-0 text-secondary">©Copyright 2017-2021 | Nobies Training Academy</p>
        </div>

    );
};

export default Footer;