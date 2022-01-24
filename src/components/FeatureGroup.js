import React from 'react';
import PropTypes from 'prop-types';

function FeatureGroup({ children }) {
  return (
    <div className="feature-group">
      {children}
    </div>
  );
}

FeatureGroup.propTypes = {
  children: PropTypes.node,
};

FeatureGroup.defaultProps = {
  children: undefined,
};

export default FeatureGroup;
