import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
