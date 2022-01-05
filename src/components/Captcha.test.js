import React from 'react';
import { shallow } from 'enzyme';

import Captcha from './Captcha';

describe('<Captcha/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Captcha />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
