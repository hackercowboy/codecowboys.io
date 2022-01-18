import React from 'react';
import { shallow } from 'enzyme';

import Impressum from '../impressum';

describe('<Impressum/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Impressum />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
