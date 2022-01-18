/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable new-cap */
import React from 'react';

import messages from '../../../i18n';

const reactIntl = jest.requireActual('react-intl');
const intl = new reactIntl.createIntl({ locale: 'en', messages: messages.en }, {});
const { IntlProvider, FormattedMessage } = reactIntl;

const injectIntl = (ChildComponent) => {
  function IntlComponent(props) {
    return <ChildComponent {...props} intl={intl} />;
  }
  IntlComponent.displayName = ChildComponent.displayName || ChildComponent.name;
  return IntlComponent;
};

export { IntlProvider, FormattedMessage, injectIntl };
