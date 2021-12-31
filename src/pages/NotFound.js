import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl } from 'react-intl';

import Container from '../components/Container';
import Content from '../components/Content';
import Navigation from '../components/Navigation';

function NotFound({ intl }) {
  return (
    <Content space>
      <Navigation />
      <Container>
        <h1 style={{ padding: '20px 0' }}>{intl.formatMessage({ id: 'lost.title' })}</h1>
        <p className="lead">{intl.formatMessage({ id: 'lost.description' })}</p>
        <p className="flex-grow"><a className="btn btn-primary" href="https://codecowboys.io">{intl.formatMessage({ id: 'lost.button' })}</a></p>
      </Container>
    </Content>
  );
}

NotFound.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(NotFound);
