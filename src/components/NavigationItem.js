import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import './NavigationItem.scss';

function NavigationItem({
  id, target, offset, children,
}) {
  return (
    <Link
      activeClass="active"
      id={id}
      className="navigation-item"
      to={target}
      spy
      offset={offset}
      smooth="true"
      duration={500}
    >
      {children}
    </Link>
  );
}

NavigationItem.propTypes = {
  id: PropTypes.string,
  target: PropTypes.string.isRequired,
  offset: PropTypes.number,
  children: PropTypes.node,
};

NavigationItem.defaultProps = {
  id: undefined,
  offset: 0,
  children: undefined,
};

export default NavigationItem;
