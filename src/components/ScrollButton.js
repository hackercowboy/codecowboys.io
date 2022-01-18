/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';

function ScrollButton({ target }) {
  return (
    <button
      className="scroll-button"
      type="button"
      onClick={() => scroller.scrollTo(target, { offset: -94, duration: 500, smooth: true })}
    />
  );
}

ScrollButton.propTypes = {
  target: PropTypes.string.isRequired,
};

export default ScrollButton;
