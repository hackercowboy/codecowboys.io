import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Markdown from 'react-markdown';

import Content from '../../components/Content';
import Navigation from '../../components/Navigation';

const text = require('./Datenschutz.md');

export default class Datenschutz extends Component {
  render() {
    return (
      <Content space>
        <Navigation/>
        <Container className="article">
          <Markdown source={text} />
        </Container>
      </Content>
    );
  }
}
