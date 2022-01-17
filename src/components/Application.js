import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Image from './Image';
import './Application.scss';

function Application({
  title, teaser, image, link, intl,
}) {
  return (
    <div className="application">
      <h4>{title}</h4>
      <div className="application-wrapper">
        <div className="application-teaser">
          <p>
            {teaser}
            {' '}
            <a href={link}>
              {intl.formatMessage({ id: 'common.more' })}
              ...
            </a>
          </p>
        </div>
        <a className="application-image" href={intl.formatMessage({ id: 'letter.link' })}>
          <Image src={image} width={100} height={100} alt={title} />
        </a>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }).isRequired,
};

export default injectIntl(Application);
