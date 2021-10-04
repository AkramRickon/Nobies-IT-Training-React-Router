import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faStar } from '@fortawesome/free-solid-svg-icons';

const HomeCourse = (props) => {

    const{img,name,details,text,rating,price,enrolled}=props.course;
    
    const userIcon= <FontAwesomeIcon icon={faUser} />
    const starIcon= <FontAwesomeIcon icon={faStar} />
    
    return (
        
        <CardGroup>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="shadow">
            <Card.Title><small>{name}</small></Card.Title>
            <Card.Text>
               <small>{details}</small>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div className="d-flex justify-content-between fw-bold"><span>{userIcon}{enrolled}</span> <span>{starIcon}{rating}</span> <span className="text-success">${price}</span></div>
            <hr></hr>
            <h6 className="text-success">{text}</h6>
            </Card.Footer>
        </Card>
    </CardGroup>
        
    );
};

export default HomeCourse;