import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/soccer-svgrepo-com.svg';
import {Link} from 'react-router-dom';

export default class PageNavbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: '#252c48' }}>
          <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} width="25" height="25" className="d-inline-block align-top m-0" alt="Logo" /> MyTeam
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              {
                  this.props.LoggedStatus ? 
                    <Nav>
                    <Nav.Link as={Link} to="/login" onClick={()=>this.props.setLogStatus(false)}> Logout </Nav.Link>
                    </Nav>                
                    :
                    <Nav>
                    <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                    </Nav>
              }
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
