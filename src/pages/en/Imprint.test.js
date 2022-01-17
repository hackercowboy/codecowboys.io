import React from 'react';
import { shallow } from 'enzyme';

import Imprint from './Imprint';

describe('<Imprint/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Imprint />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
