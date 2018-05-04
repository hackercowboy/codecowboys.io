import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { NavLink } from 'reactstrap';

export default class NavigationItem extends Component {
  static propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    offset: PropTypes.number,
    active: PropTypes.bool,
    children: PropTypes.node,
    onSetActive: PropTypes.func,
  }

  constructor() {
    super();
    this.handleSetActive = this.handleSetActive.bind(this);
  }

  handleSetActive(target) {
    const { to, onSetActive } = this.props;
    onSetActive(to, target !== to);
  }

  render() {
    const { to, offset, children, active, href } = this.props;
    return to ? (
      <Link
        activeClass="god"
        className={active ? 'nav-link active' : 'nav-link'}
        onClick={this.handleSetActive}
        to={to}
        spy
        offset={offset}
        smooth
        duration={500}
        onSetActive={this.handleSetActive}>
        {children}
      </Link>
    ) : (
      <NavLink href={href}>{children}</NavLink>
    );
  }
}
