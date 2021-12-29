import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';
import { injectIntl } from 'react-intl';

import Content from '../components/Content';
import Navigation from '../components/Navigation';

const NotFound = ({ intl }) => (
  <Content space>
    <Navigation />
    <Container>
      <h1 style={{ padding: '20px 0' }}>{intl.formatMessage({ id: 'lost.title' })}</h1>
      <p className="lead">{intl.formatMessage({ id: 'lost.description' })}</p>
      <p className="flex-grow"><a className="btn btn-primary" href="https://codecowboys.io">{intl.formatMessage({ id: 'lost.button' })}</a></p>
    </Container>
  </Content>
);

NotFound.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(NotFound);
