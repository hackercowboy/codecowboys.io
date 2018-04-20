import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

export default class ApplicationHero extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const { image, title, description } = this.props;
    return (
      <Container>
        <Row>
          <Col><img src={image}/></Col>
          <Col>
            <h2>{title}</h2>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
