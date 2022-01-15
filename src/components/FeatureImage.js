import React from 'react';
import PropTypes from 'prop-types';

import './FeatureImage.scss';

function FeatureImage({ src, alt, style }) {
  return (
    <div className="feature-image">
      <img src={src} alt={alt} style={style} />
    </div>
  );
}

FeatureImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

FeatureImage.defaultProps = {
  style: undefined,
};

export default FeatureImage;
