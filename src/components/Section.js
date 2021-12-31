import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Container from './Container';

import './Section.scss';

function Section({
  id, dark, light, title, subtitle, teaser, children, offset,
}) {
  return (
    <Element
      name={id}
      offset={offset}
      duration={500}
      smooth
    >
      <section className={(dark && 'section-dark') || (light && 'section-light')}>
        <Container>
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

Section.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
  id: PropTypes.string,
  offset: PropTypes.number,
  subtitle: PropTypes.string,
  teaser: PropTypes.string,
  title: PropTypes.string,
  light: PropTypes.bool,
};

Section.defaultProps = {
  children: undefined,
  dark: false,
  id: undefined,
  offset: 0,
  subtitle: undefined,
  teaser: undefined,
  title: undefined,
  light: false,
};

export default Section;
