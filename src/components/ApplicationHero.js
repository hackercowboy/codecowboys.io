import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import './ApplicationHero.css';

export default class ApplicationHero extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const { image, title, description } = this.props;
    return (
      <Container className="application-hero-container">
        <Row>
          <Col sm="12" md="6">
            <div className="application-hero-image">
              <img src={image} className="img-fluid"/>
            </div>
          </Col>
          <Col>
            <div className="application-hero-teaser">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
