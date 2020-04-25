import React, { Component } from 'react';
import {
  Collapse, NavbarToggler,
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => { //don't have to bind this!
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() { 
    return <div> 
      <Navbar color="dark" dark expand="sm" className="mb-5"> 
        <Container>
          <NavbarBrand href="/">Shopping list</NavbarBrand>
          <NavbarToggler onClick={this.toggle} /> 
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/jthefang">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  }
}

export default AppNavbar;