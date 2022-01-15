import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

import './Screenshots.scss';

function Screenshots({ ipadImages, iphoneImages }) {
  return (
    <div className="screenshots">
      <div className="mobile">
        <ImageGallery items={iphoneImages} />
      </div>
      <div className="desktop">
        <ImageGallery items={ipadImages} />
      </div>
    </div>
  );
}

Screenshots.propTypes = {
  ipadImages: PropTypes.arrayOf(PropTypes.shape({
    original: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,
  iphoneImages: PropTypes.arrayOf(PropTypes.shape({
    original: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,
};

export default Screenshots;
