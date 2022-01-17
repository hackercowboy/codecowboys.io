import React from 'react';
import PropTypes from 'prop-types';

import './Flex.scss';

function Flex({ children }) {
  return (
    <div className="flex">
      {children}
    </div>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
};

Flex.defaultProps = {
  children: undefined,
};

export default Flex;
