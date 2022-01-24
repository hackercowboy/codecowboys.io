import React from 'react';
import { shallow } from 'enzyme';

import Impressum from './impressum.page';

describe('<Impressum/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Impressum />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
