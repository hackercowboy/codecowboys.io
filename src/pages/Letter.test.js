import React from 'react';
import { shallow } from 'enzyme';

import Letter from './Letter';

describe('<Letter/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Letter />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
