import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Container } from 'reactstrap';

import './Section.css';

export default class Section extends Component {
  static propTypes = {
    id: PropTypes.string,
    dark: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { id, dark, title, subtitle, children } = this.props;
    return (
      <Element name={id}>
        <section className={dark && 'section-dark' }>
          <Container className="section">
            <div className="section-title-wrapper">
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
            </div>
            {children}
          </Container>
        </section>
      </Element>
    );
  }
}
