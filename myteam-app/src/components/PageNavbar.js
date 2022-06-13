import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Team from '../team.png';

export default class PageNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
          <Container>
          <Navbar.Brand href="#home">
            <img
              src={Team}
              width="30"
              height="30"
              className="d-inline-block align-top m-0"
              alt="Logo"
           /> MyTeam
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#Home">Teams</Nav.Link>
              <Nav.Link href="#pricing">DashBoard</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
