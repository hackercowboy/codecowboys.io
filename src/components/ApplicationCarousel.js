import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

function ApplicatinCarousel({ children }) {
  return (
    <Element name="application-carousel">
      <div className="application-carousel">
        {children}
      </div>
    </Element>
  );
}

ApplicatinCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicatinCarousel;
