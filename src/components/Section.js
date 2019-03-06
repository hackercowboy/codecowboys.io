import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Container } from 'reactstrap';

import './Section.css';

export default class Section extends Component {
  static propTypes = {
    id: PropTypes.string,
    dark: PropTypes.bool,
    zebra: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    teaser: PropTypes.string,
    children: PropTypes.node,
    big: PropTypes.bool,
  }

  render() {
    const {
      id, dark, zebra, title, subtitle, teaser, children, big,
    } = this.props;
    return (
      <Element name={id}>
        <section className={(dark && 'section-dark') || (zebra && 'section-zebra') }>
          <Container className={ big ? 'section' : 'section notbig' }>
            <div className="section-title-wrapper">
              {title && (<h2>{title}</h2>)}
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
