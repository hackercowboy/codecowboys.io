import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../Checkbox';

describe('<Checkbox/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Checkbox name="test"><div /></Checkbox>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
