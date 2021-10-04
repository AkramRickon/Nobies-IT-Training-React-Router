import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Trainer from '../Trainer/Trainer';
import './Trainers.css';

        

const Trainers = () => {

    const[trainers,setTrainers]=useState([]);
    useEffect(()=>
    {
        fetch('trainers.json')
        .then(res=>res.json())
        .then(data=>setTrainers(data))
    },[])

    return (
        <>
       
        <div className="page-container  text-center ">
            {/* header text */}
            <div className="custom-color p-3 text-white mb-5">
                <h3>LEARN FROM THE BEST</h3>
                <h3> Our Trainers</h3>
                <div className="line3"></div>
            </div>

            {/* Traier component */}
          <Container>
          <Row xs={1} md={4} className="g-4">
              {
                  trainers.map(trainer=> <Trainer trainer={trainer} key={trainer.id}></Trainer>)
              }
          </Row>
          </Container>
          </div>
        </>
    );
};

export default Trainers;