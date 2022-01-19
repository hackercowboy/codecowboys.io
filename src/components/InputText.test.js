import React from 'react';
import { shallow } from 'enzyme';

import InputText from './InputText';

describe('<InputText/>', () => {
  it('should render', () => {
    const wrapper = shallow(<InputText name="test" placeholder="Test" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
