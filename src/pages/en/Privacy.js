import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Markdown from 'react-markdown';
import { readFileSync } from 'fs';
import { join } from 'path';

import Content from '../../components/Content';
import Navigation from '../../components/Navigation';


const text = readFileSync(join(__dirname, './Privacy.md'), 'utf8');


export default class Privacy extends Component {
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

