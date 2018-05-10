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
    teaser: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { id, dark, title, subtitle, teaser, children } = this.props;
    return (
      <Element name={id}>
        <section className={dark && 'section-dark' }>
          <Container className="section">
            <div className="section-title-wrapper">
              <h2>{title}</h2>
              {subtitle ? (<h3>{subtitle}</h3>) : null}
              {teaser ? (<h4>{teaser}</h4>) : null}
            </div>
            {children}
          </Container>
        </section>
      </Element>
    );
  }
}
