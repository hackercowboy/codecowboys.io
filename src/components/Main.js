import React from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

function Main({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: undefined,
};

export default Main;
