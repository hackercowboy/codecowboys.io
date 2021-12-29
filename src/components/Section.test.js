import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('<Section/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
