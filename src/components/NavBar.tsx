import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const closeNavbar = () => {
        if (expanded) {
            setExpanded(false);
        }
    };

    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
                    Insurance Service
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={toggleNavbar}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={closeNavbar} className="nav-link" >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/create-insurance"
                            onClick={closeNavbar}
                        >
                            Create Insurance
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
