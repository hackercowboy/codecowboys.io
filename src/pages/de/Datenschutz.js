import React from 'react';
import { Container } from 'reactstrap';

import Content from '../../components/Content';
import Navigation from '../../components/Navigation';

import Document from './Datenschutz.md';

const Datenschutz = () => (
  <Content space>
    <Navigation />
    <Container className="article">
      <Document />
    </Container>
  </Content>
);

export default Datenschutz;
