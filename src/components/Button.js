import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ id }) {
  return (
    <div id={id}>
      Button
    </div>
  );
}

Button.propTypes = {
  id: PropTypes.string,
};

Button.defaultProps = {
  id: undefined,
};

export default Button;
