import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    
    const [courses,setCourses]=useState([]);
    useEffect(()=>
        {
            fetch('courses.json')
            .then(res=>res.json())
            .then(data=>setCourses(data))
        },[])

    return (
        <div className="page-container text-center">
            
            <div className="custom-color p-3 text-white mb-5">
                <h3>LEARN FROM THE BEST</h3>
                <h3> Our Courses</h3>
                <div className="line1"></div>
            </div>
        {/* Course component */}
        <Container>
            <Row xs={1} md={4} className="g-4">
            {
                courses.map(course=> <Course course={course} key={course.id}></Course> )
            }
            </Row>
        </Container>
        </div>
    );
};

export default Courses;