import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('<Image/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Image src="http://example.com/image/test.png" alt="Test" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
