import React from 'react';
import { shallow } from 'enzyme';

import Application from './Application';

describe('<Application/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});