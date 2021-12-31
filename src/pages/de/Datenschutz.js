import React from 'react';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Navigation from '../../components/Navigation';

import Document from './Datenschutz.md';

function Datenschutz() {
  return (
    <Content space>
      <Navigation />
      <Container className="article">
        <Document />
      </Container>
    </Content>
  );
}

export default Datenschutz;
