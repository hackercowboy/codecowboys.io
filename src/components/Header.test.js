import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Header><div /></Header>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
