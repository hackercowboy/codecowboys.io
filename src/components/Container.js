import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  id, className, style, children,
}) => (
  <div id={id} className={[className, 'container'].filter((c) => c).join(' ')} style={style}>
    {children}
  </div>
);

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
};

Container.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  children: undefined,
};

export default Container;
