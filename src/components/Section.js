import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Container from './Container';

import './Section.scss';

function Section({
  id, dark, title, subtitle, children,
}) {
  return (
    <section className={dark ? 'section-dark' : 'section-light'}>
      <Element
        name={id}
        duration={500}
        smooth="true"
      >
        <Container>
          <div className="section-title-wrapper">
            {title && (<h2>{title}</h2>)}
            {subtitle ? (<h3>{subtitle}</h3>) : null}
          </div>
          {children}
        </Container>
      </Element>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
  id: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

Section.defaultProps = {
  children: undefined,
  dark: false,
  id: undefined,
  subtitle: undefined,
  title: undefined,
};

export default Section;
