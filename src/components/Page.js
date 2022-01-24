import React from 'react';
import PropTypes from 'prop-types';

function Page({ className, children }) {
  return (
    <div className={['page', className].filter(((c) => c)).join(' ')}>
      {children}
    </div>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Page;
