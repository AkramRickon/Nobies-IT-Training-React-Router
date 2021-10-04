import React from 'react';
import webImage from '../images/Slider/web.png';
import cpImage from '../images/Slider/cp.jpg';
import appImage from '../images/Slider/app.jpg';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
    return (
        <Container className="p-3 mt-3 rounded">
            <Carousel className="w-100 mx-auto">
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-75"
                        src={webImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Web Development Course</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-75"
                        src={cpImage}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Competitive Programming Course</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-75"
                        src={appImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3 className="">App Development Course</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;