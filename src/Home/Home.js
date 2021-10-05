import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {

    const[courses,setCourses]=useState([])
    useEffect(()=>
    {
        fetch('homeCourses.json')
        .then(response => response.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <>
        
        <div className="text-center page-container">
            <div className="custom-color p-3 text-white mb-3">

                {/* top section text */}
                <h3>Welcome to Nobies Training Academy</h3>
                <h3>Hard Work Beats Talent</h3>
                <div className="line4"></div>
                </div>
                {/* Image slider coponent */}
                <Slider></Slider>

                {/* custom text */}
                <div className="my-5">
                    <h1 className=" course-color mb-1 p-1 ">Trending Courses</h1>
                    <div className="line5"></div>
                 </div>
                {/* Four services */}
                <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course=> <HomeCourse course={course} key={course.id}></HomeCourse>)
                    }
                </Row>
                </Container>
            
            </div>
        </>
    );
};

export default Home;