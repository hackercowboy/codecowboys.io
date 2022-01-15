import React from 'react';

import Container from '../../components/Container';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Document from './Privacy.md';

function Privacy() {
  return (
    <Main>
      <Header />
      <Container className="article">
        <Document />
      </Container>
    </Main>
  );
}

export default Privacy;
