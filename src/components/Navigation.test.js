import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe('<Navigation/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
