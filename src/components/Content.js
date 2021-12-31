import React from 'react';
import PropTypes from 'prop-types';

import './Content.scss';

function Content({ children, space }) {
  return (
    <div className={space ? 'content-space' : 'content'}>
      {children}
    </div>
  );
}

Content.propTypes = {
  space: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  space: false,
  children: undefined,
};

export default Content;
