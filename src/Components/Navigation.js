import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

function Navigation(props) {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="/">React News Network</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Top Headlines</Nav.Link>
                        <Nav.Link href="/SG">SG News</Nav.Link>
                        <Nav.Link href="/MY">MY News</Nav.Link>
                        <Nav.Link href="/NG">NG News</Nav.Link>
                        <Nav.Link href="/SA">SA News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
