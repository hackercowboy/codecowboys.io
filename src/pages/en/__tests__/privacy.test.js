import React from 'react';
import { shallow } from 'enzyme';

import Privacy from '../privacy';

describe('<Privacy/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Privacy />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
