import React from 'react';

import Container from '../../components/Container';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import Document from './Privacy.md';

function Privacy() {
  return (
    <Main>
      <Navigation />
      <Container className="article">
        <Document />
      </Container>
    </Main>
  );
}

export default Privacy;
