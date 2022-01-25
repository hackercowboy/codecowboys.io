import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

function ApplicationHero({
  image, placeholderImage, title, description, soon, link, appStoreLink,
}) {
  return (
    <div className="application-hero">
      <div className="application-hero-image">
        { link ? (<a href={link}><Image src={image} placeholderSrc={placeholderImage} alt={title} visibleByDefault /></a>)
          : (<Image src={image} placeholderSrc={placeholderImage} alt={title} visibleByDefault />)}
      </div>
      <div className="application-hero-teaser">
        { link ? (<h1><a href={link}>{title}</a></h1>) : (<h1>{title}</h1>)}
        { link ? (<p><a href={link}>{description}</a></p>) : (<p>{description}</p>)}
        {soon ? (<Image src="/images/app_store_button_soon.svg" alt="App Store" height={40} width={135} />)
          : (<a href={appStoreLink}><Image src="/images/app_store_button.svg" alt="App Store" height={40} width={135} /></a>) }
      </div>
    </div>
  );
}

ApplicationHero.propTypes = {
  image: PropTypes.string.isRequired,
  placeholderImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  soon: PropTypes.bool,
  link: PropTypes.string,
  appStoreLink: PropTypes.string,
};

ApplicationHero.defaultProps = {
  placeholderImage: undefined,
  soon: false,
  link: undefined,
  appStoreLink: undefined,
};

export default ApplicationHero;
