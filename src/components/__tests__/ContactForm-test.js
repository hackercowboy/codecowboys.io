import React from 'react';
import { shallow } from 'enzyme';

import ContactForm from '../ContactForm';

describe('<ContactForm/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ContactForm />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
