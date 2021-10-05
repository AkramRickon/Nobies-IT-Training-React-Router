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
                        <h5><small>{name}</small></h5>
                        <h6 className="text-success"><small>{designation}</small></h6>
                    </Card.Title>
                    <Card.Text className>
                        <small >{details}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="text-center text-white ">

                        <i className="fab fa-linkedin icons"></i>
                        <i className="fab fa-github icons"></i>
                        <i className="fab fa-facebook icons"></i>

                    </div>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Trainer;