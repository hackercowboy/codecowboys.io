import React from 'react';
import PropTypes from 'prop-types';

import './Content.scss';

const Content = ({ children, space }) => (
  <div className={space ? 'content-space' : 'content'}>
    {children}
  </div>
);

Content.propTypes = {
  space: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  space: false,
  children: undefined,
};

export default Content;
