import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { withTranslation } from 'react-i18next';

import Content from '../components/Content';
import Navigation from '../components/Navigation';

class NotFound extends Component {
  static propTypes = {
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;
    return (
      <Content space>
        <Navigation/>
        <Container>
          <h1 style={{ padding: '20px 0' }}>{t('lost.title')}</h1>
          <p className="lead">{t('lost.description')}</p>
          <p className="flex-grow"><a className="btn btn-primary" href="https://codecowboys.io">{t('lost.button')}</a></p>
        </Container>
      </Content>
    );
  }
}

export default withTranslation()(NotFound);
