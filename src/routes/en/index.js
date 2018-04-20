import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Carousel from '../../components/Carousel';

const logo = require('../../assets/logo.svg');

export default class Index extends Component {
  constructor() {
    super();
    this.state = { navigationOpen: false };
    this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  }

  renderNavigation() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/"><img src={logo} style={{ width: '40px', height: '40px', marginRight: '10px' }}/>CodeCowboys</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.navigationOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#apps">Apps</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/en/hosting">Hosting</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }

  render() {
    return (
      <div>
        {this.renderNavigation()}

        <Container>
          <Carousel/>
        </Container>
      </div>
    );
  }
}

