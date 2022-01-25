import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Header({ title, description, children }) {
  return (
    <header>
      <Head>
        <title>
          {title ? `${title} | codecowboys.io` : 'codecowboys.io'}
        </title>
        {description && (<meta name="description" content={description} />)}
      </Head>
      <div className="container header-wrapper">
        <a href="/" className="header-brand">
          <img src="/logo.svg" alt="Codecowboys.io logo" style={{ width: '40px', height: '40px' }} />
          <div>codecowboys</div>
        </a>
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: undefined,
  description: undefined,
  children: undefined,
};

export default Header;
