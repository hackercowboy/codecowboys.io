import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import './ApplicationHero.scss';

const appStoreButton = require('../assets/images/app_store_button.svg');
const appStoreButtonSoon = require('../assets/images/app_store_button_soon.svg');

const ApplicationHero = ({
  image, title, description, soon, link, appStoreLink,
}) => (
  <Container className="application-hero-container">
    <Row>
      <Col sm="12" md="6">
        <div className="application-hero-image">
          <img src={image} className="img-fluid" alt={title} />
        </div>
      </Col>
      <Col>
        <div className="application-hero-teaser">
          { link ? (<h2><a href={link}>{title}</a></h2>) : (<h2>{title}</h2>)}
          { link ? (<p><a href={link}>{description}</a></p>) : (<p>{description}</p>)}
          {soon ? (<img src={appStoreButtonSoon} alt="App Store" />) : (<a href={appStoreLink}><img src={appStoreButton} alt="App Store" /></a>) }
        </div>
      </Col>
    </Row>
  </Container>
);

ApplicationHero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  soon: PropTypes.bool,
  link: PropTypes.string,
  appStoreLink: PropTypes.string,
};

ApplicationHero.defaultProps = {
  soon: false,
  link: undefined,
  appStoreLink: undefined,
};

export default ApplicationHero;
