import React from 'react';
import { shallow } from 'enzyme';

import Features from './Features';

describe('<Features/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Features />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
