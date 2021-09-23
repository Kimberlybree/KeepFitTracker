import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';


function Main(props) {
    return (
        <div>
            



                <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#home">Keep Fit Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
        <Nav>
            <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dropdown"
            menuVariant="dark"
            >
            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fitness News</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Home</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>

           
    
           
        </div>
    );
}

export default Main;