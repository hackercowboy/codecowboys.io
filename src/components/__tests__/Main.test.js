import React from 'react';
import { shallow } from 'enzyme';

import Main from '../Main';

describe('<Main/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
