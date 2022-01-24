import React from 'react';
import { shallow } from 'enzyme';

import Imprint from './imprint.page';

describe('<Imprint/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Imprint />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
