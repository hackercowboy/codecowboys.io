import React from 'react';
import { shallow } from 'enzyme';

import CookieConsent from '../CookieConsent';

describe('<CookieConsent/>', () => {
  it('should render', () => {
    const wrapper = shallow(<CookieConsent />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
