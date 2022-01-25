import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image({
  src, placeholderSrc, alt, height, width, visibleByDefault,
}) {
  return (
    <div className="image">
      <LazyLoadImage
        alt={alt}
        height={height}
        src={src}
        placeholderSrc={placeholderSrc}
        effect="blur"
        width={width}
        visibleByDefault={visibleByDefault}
      />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  visibleByDefault: PropTypes.bool,
};

Image.defaultProps = {
  placeholderSrc: undefined,
  height: undefined,
  width: undefined,
  visibleByDefault: false,
};

export default Image;
