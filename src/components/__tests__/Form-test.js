import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

describe('<Form/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});