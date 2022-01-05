import React from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

function Main({ className, children }) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Main.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Main;
