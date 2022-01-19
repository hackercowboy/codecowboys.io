import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('<About/>', () => {
  it('should render', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
