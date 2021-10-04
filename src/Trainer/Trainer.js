import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Trainer.css';

const Trainer = (props) => {
    const { name, img, designation, details } = props.trainer;
    
    return (
        <CardGroup>
            <Card className="shadow">
                <Card.Img variant="top" className="img-height" src={img} />
                <Card.Body className="text-center">
                    <Card.Title>
                        <h5>{name}</h5>
                        <h6 className="text-secondary">{designation}</h6>
                    </Card.Title>
                    <Card.Text>
                        <small>{details}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="text-center text-white ">

                        <i className="fab fa-google icons"></i>
                        <i className="fab fa-twitter icons"></i>
                        <i className="fab fa-facebook icons"></i>

                    </div>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Trainer;