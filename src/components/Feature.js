import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

import './Feature.css';

export default class Feature extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    right: PropTypes.bool,
  }

  render() {
    const { title, description, icon, right } = this.props;

    return (
      <Media className={ right ? 'feature right' : 'feature'}>
        <Media body>
          <h4>{title}</h4>
          <p>{description}</p>
        </Media>
        <Media className="pull-right">
          <i className={`fal ${icon}`} aria-hidden="true"></i>
        </Media>
      </Media>
    );
  }
}
