/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
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

const Navigation = ({ children }) => {
  const [state, setState] = useState({ navigationOpen: false, activeItem: undefined, ignoreNext: false });

  const toggleNavigation = () => setState({ navigationOpen: !state.navigationOpen });

  const handleSetActive = (id, clicked) => {
    if (!state.ignoreNext) {
      setState({ activeItem: id, ignoreNext: clicked });
    }

    if (clicked) {
      setState({ navigationOpen: false });
      setTimeout(() => setState({ ignoreNext: false }), 500);
    }
  };

  const renderNavigationItems = (activeItem) => (children ? children.map((item, index) => {
    const active = activeItem === item.props.to;
    return (
      <NavItem key={index}>
        {React.cloneElement(item, { onSetActive: handleSetActive, active })}
      </NavItem>
    );
  }) : null);

  return (
    <Navbar id="navigation" color="faded" light fixed="top" expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="Codecowboys.io logo" />
          Code Cowboys
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavigation} />
        <Collapse isOpen={state.navigationOpen} navbar>
          <Nav className="ml-auto nav-pills" navbar>
            {renderNavigationItems(children, state.activeItem)}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

Navigation.defaultProps = {
  children: undefined,
};

export default Navigation;
