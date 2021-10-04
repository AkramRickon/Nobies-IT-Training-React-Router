import React from 'react';
import {CardGroup,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faStar } from '@fortawesome/free-solid-svg-icons';
import './Course.css';


const Course = (props) => {
    const {img,name,details,rating,price,enrolled}=props.course;

    const userIcon= <FontAwesomeIcon icon={faUser} />
    const starIcon= <FontAwesomeIcon icon={faStar} />
    
    return (
            <CardGroup>
                <Card className="shadow">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title><small>{name}</small></Card.Title>
                    <Card.Text>
                       <small>{details}</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div className="d-flex justify-content-between fw-bold"><span>{userIcon}{enrolled}</span> <span>{starIcon}{rating}</span> <span className="text-success">${price}</span></div>
                    <hr></hr>
                    <h6 className="text-success">Registration going on</h6>
                    </Card.Footer>
                </Card>
            </CardGroup>

    );
};

export default Course;