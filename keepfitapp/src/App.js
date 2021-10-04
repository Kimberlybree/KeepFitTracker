import React from 'react';
import './App.css';
import FitnessTips from './Components/FitnessTips';
import Main from './Components/Main';
import About from './Components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GoalList from './Components/GoalList';

function App(props) {
 return (

    <div className="App">
        <header className="App-header">
   
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
                    <NavDropdown.Item href="/about">About </NavDropdown.Item>
                    <NavDropdown.Item href="/FitnessTips">Fitness News</NavDropdown.Item>
                    <NavDropdown.Item href="/GoalList">Goal Tracker</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Main">Home</NavDropdown.Item>
                    </NavDropdown>
                 </Nav>
            </Navbar.Collapse>
        </Container>
            </Navbar>
      

            <Router> 
                <Route exact path='/Main' 
                component={Main} />

                <Route exact path='/About' 
                    component={About} />

                <Route exact path='/FitnessTips' 
                    component={FitnessTips} />
                

                <Route exact path='/GoalList'
                    component={GoalList} />

            </Router> 


        </header>
        </div>

   
      )}
 
export default App;
