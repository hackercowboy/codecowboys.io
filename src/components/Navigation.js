import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import './Navigation.scss';

const logo = require('../assets/logo.svg');

export default class Navigation extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor() {
    super();
    this.state = { navigationOpen: false, activeItem: undefined, ignoreNext: false };
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.handleSetActive = this.handleSetActive.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  }

  handleSetActive(id, clicked) {
    if (!this.state.ignoreNext) {
      this.setState({ activeItem: id, ignoreNext: clicked });
    }

    if (clicked) {
      this.setState({ navigationOpen: false });
      setTimeout(() => this.setState({ ignoreNext: false }), 500);
    }
  }

  renderNavigationItems(children, activeItem) {
    return children ? children.map((item, index) => {
      const active = activeItem === item.props.to;
      return (
        <NavItem key={index}>
          {React.cloneElement(item, { onSetActive: this.handleSetActive, active })}
        </NavItem>
      );
    }) : null;
  }

  render() {
    const { children } = this.props;
    const { activeItem } = this.state;

    return (
      <Navbar id="navigation" color="faded" light fixed="top" expand="md">
        <Container>
          <NavbarBrand href="/"><img src={logo}/>Code Cowboys</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavigation} />
          <Collapse isOpen={this.state.navigationOpen} navbar>
            <Nav className="ml-auto nav-pills" navbar>
              {this.renderNavigationItems(children, activeItem)}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>);
  }
}
