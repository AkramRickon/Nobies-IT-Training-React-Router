import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const activeStyle={fontWeight: "bold",backgroundColor: "#505050"};
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to="/home" className="text-decoration-none me-3 p-2 text-white fs-4">Nobies  Academy</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto fs-5">
                        <NavLink to="/home"  className="text-decoration-none me-3 p-2 text-white" activeStyle={activeStyle} >Home</NavLink>

                        <NavLink to="/courses"  activeStyle={activeStyle}className="text-decoration-none me-3 p-2 text-white">Courses</NavLink>

                        <NavLink to="/trainers"  activeStyle={activeStyle} className="text-decoration-none me-3 p-2 text-white">Trainers</NavLink>

                        <NavLink to="/about" activeStyle={activeStyle} className="text-decoration-none me-2 p-2 text-white">About US</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
    </Navbar>
        </>
    );
};

export default Header;

