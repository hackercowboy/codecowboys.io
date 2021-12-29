/* eslint-disable max-len */
import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import Document from './Privacy.md';

export default class Privacy extends Component {
  render() {
    return (
      <Content space>
        <Navigation />
        <Container className="article">
          <Document />
        </Container>
      </Content>
    );
  }
}
