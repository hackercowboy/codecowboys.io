import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

describe('<Page/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
