import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Container from './Container';

import './Section.scss';

function Section({
  id, dark, title, subtitle, children, offset,
}) {
  return (
    <Element
      name={id}
      offset={offset}
      duration={500}
      smooth="true"
    >
      <section className={dark ? 'section-dark' : 'section-light'}>
        <Container>
          <div className="section-title-wrapper">
            {title && (<h2>{title}</h2>)}
            {subtitle ? (<h3>{subtitle}</h3>) : null}
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
  title: PropTypes.string,
};

Section.defaultProps = {
  children: undefined,
  dark: false,
  id: undefined,
  offset: 0,
  subtitle: undefined,
  title: undefined,
};

export default Section;
