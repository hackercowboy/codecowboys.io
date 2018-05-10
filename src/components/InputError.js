import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from 'lodash';

import './InputError.css';

export default class InputError extends Component {
  static propTypes = {
    center: PropTypes.bool,
    error: PropTypes.any,
  }

  render() {
    const { error } = this.props;
    return !utils.isEmpty(error) ? (
      <div className="input-error text-danger">
        {error}
      </div>
    ) : null;
  }
}
