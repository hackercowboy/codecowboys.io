import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Content.css';

export default class Content extends Component {
  static propTypes = {
    space: PropTypes.bool,
    children: PropTypes.node,
  }

  render() {
    const { children, space } = this.props;
    const className = space ? 'content-space' : 'content';

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}
