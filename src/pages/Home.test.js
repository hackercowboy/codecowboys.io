import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('<Home/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
