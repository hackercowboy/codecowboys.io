/* eslint-disable max-len */
import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Content from '../../components/Content';
import Navigation from '../../components/Navigation';

import CONTENT from './Datenschutz.md';

export default class Datenschutz extends Component {
  render() {
    return (
      <Content space>
        <Navigation/>
        <Container className="article" dangerouslySetInnerHTML={{ __html: CONTENT }}/>
      </Content>
    );
  }
}
