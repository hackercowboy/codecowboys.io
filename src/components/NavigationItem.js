import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import './NavigationItem.scss';

function NavigationItem({
  target, offset, children,
}) {
  return (
    <Link
      activeClass="active"
      className="navigation-item"
      to={target}
      spy
      offset={offset}
      smooth
      duration={500}
    >
      {children}
    </Link>
  );
}

NavigationItem.propTypes = {
  target: PropTypes.string.isRequired,
  offset: PropTypes.number,
  children: PropTypes.node,
};

NavigationItem.defaultProps = {
  offset: 0,
  children: undefined,
};

export default NavigationItem;
