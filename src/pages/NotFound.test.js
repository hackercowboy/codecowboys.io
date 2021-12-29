import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('<NotFound/>', () => {
  it('should render', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
