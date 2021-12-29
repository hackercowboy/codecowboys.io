import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { NavLink } from 'reactstrap';

const NavigationItem = ({
  to, offset, children, active, href, onSetActive,
}) => (to ? (
  <Link
    activeClass="god"
    className={active ? 'nav-link active' : 'nav-link'}
    onClick={(target) => onSetActive(to, target !== to)}
    to={to}
    spy
    offset={offset}
    smooth
    duration={500}
    onSetActive={(target) => onSetActive(to, target !== to)}
  >
    {children}
  </Link>
) : (
  <NavLink href={href}>{children}</NavLink>
));

NavigationItem.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  offset: PropTypes.number,
  active: PropTypes.bool,
  children: PropTypes.node,
  onSetActive: PropTypes.func.isRequired,
};

NavigationItem.defaultProps = {
  to: undefined,
  href: undefined,
  offset: 0,
  active: false,
  children: undefined,
};

export default NavigationItem;
