import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

import './FeatureImage.scss';

function FeatureImage({
  src, alt, width, height,
}) {
  return (
    <div className="feature-image">
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
}

FeatureImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

FeatureImage.defaultProps = {
  height: undefined,
  width: undefined,
};

export default FeatureImage;
