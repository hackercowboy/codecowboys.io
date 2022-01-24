import React from 'react';
import PropTypes from 'prop-types';

function Hamburger({ onClick, open }) {
  return (
    <button className="hamburger" type="button" onClick={onClick}>
      <span className="hamburger-box">
        <span className={open ? 'hamburger-inner open' : 'hamburger-inner'} />
      </span>
    </button>
  );
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

Hamburger.defaultProps = {
  open: false,
};

export default Hamburger;
