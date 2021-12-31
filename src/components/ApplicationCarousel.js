/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

import './ApplicationCarousel.scss';

function ApplicatinCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const animating = useRef(false);

  const onExiting = () => {
    animating.current = true;
  };

  const onExited = () => {
    animating.current = false;
  };

  const next = () => {
    if (animating.current) return;
    const nextIndex = activeIndex === children.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating.current) return;
    const nextIndex = activeIndex === 0 ? children.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating.current) return;
    setActiveIndex(newIndex);
  };

  const childs = Array.isArray(children) ? children : [children];

  const slides = childs.map((child, index) => (
    <div
      onExiting={onExiting}
      onExited={onExited}
      key={index}
    >
      {child}
    </div>
  ));

  return childs.length > 1 ? (
    <Element name="application-carousel">
      <div
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="application-carousel"
      >
        <div items={childs.map((child, index) => ({ key: index }))} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <div direction="prev" directionText="Previous" onClickHandler={previous} />
        <div direction="next" directionText="Next" onClickHandler={next} />
      </div>
    </Element>
  ) : (
    <Element name="application-carousel">
      <div
        activeIndex={activeIndex}
        next={() => true}
        previous={() => true}
        className="application-carousel"
      >
        {slides}
      </div>
    </Element>
  );
}

ApplicatinCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicatinCarousel;
