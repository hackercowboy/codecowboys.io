import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image({
  src, alt, height, width,
}) {
  return (
    <div className="image">
      <LazyLoadImage
        alt={alt}
        height={height}
        src={src}
        width={width}
      />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

Image.defaultProps = {
  height: undefined,
  width: undefined,
};

export default Image;
