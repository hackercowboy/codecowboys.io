import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Letter from './letter';

export default class Index extends Component {
  render() {
    return (
      <div>
        Index de
        <Route path="/briefe" component={Letter}/>
      </div>
    );
  }
}

