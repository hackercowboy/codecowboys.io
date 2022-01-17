import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const logo = require('../assets/logo.svg');

function Header({ children }) {
  return (
    <header>
      <div className="container header-wrapper">
        <a href="/" className="header-brand">
          <img src={logo} alt="Codecowboys.io logo" style={{ width: '40px', height: '40px' }} />
          <div>codecowboys</div>
        </a>
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: undefined,
};

export default Header;
