import React from 'react';
import { shallow } from 'enzyme';

import Section from '../Section';

describe('<Section/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render dark', () => {
    const wrapper = shallow(<Section title="test" subtitle="Test 2" dark />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
