import React from 'react';
import { shallow } from 'enzyme';

import ScrollButton from './ScrollButton';

describe('<ScrollButton/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ScrollButton />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
