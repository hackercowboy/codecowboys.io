import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

jest.mock('react-intl');

describe('<About/>', () => {
  it('should render', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
