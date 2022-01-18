/* eslint-disable react/no-array-index-key */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Events } from 'react-scroll';

import Hamburger from './Hamburger';

function Navigation({ children }) {
  const [open, setOpen] = useState(false);

  useMemo(() => {
    Events.scrollEvent.register('begin', () => {
      setOpen(false);
    });
  });

  return (
    <nav>
      <Hamburger open={open} onClick={() => setOpen(!open)} />
      <div className={open ? 'navigation-items open' : 'navigation-items'}>
        { children}
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node,
};

Navigation.defaultProps = {
  children: undefined,
};

export default Navigation;
