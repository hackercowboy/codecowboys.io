import React from 'react';

import Container from '../../components/Container';
import Main from '../../components/Main';
import Header from '../../components/Header';

import Document from './Datenschutz.md';

function Datenschutz() {
  return (
    <Main>
      <Header />
      <Container className="article">
        <Document />
      </Container>
    </Main>
  );
}

export default Datenschutz;
