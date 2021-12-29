/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable new-cap */
import React from 'react';

import { messages } from '../../i18n';

const reactIntl = jest.requireActual('react-intl');
const intl = new reactIntl.createIntl({ locale: 'en', messages }, {});

const injectIntl = (ChildComponent) => {
  const IntlComponent = (props) => (<ChildComponent {...props} intl={intl} />);
  IntlComponent.displayName = ChildComponent.displayName || ChildComponent.name;
  return IntlComponent;
};

export { injectIntl };
