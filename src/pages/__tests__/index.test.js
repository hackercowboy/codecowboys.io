import React from 'react';
import { shallow } from 'enzyme';

import Index from '../index';

describe('<Index/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
