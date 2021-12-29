import React from 'react';
import { shallow } from 'enzyme';

import ApplicationHero from './ApplicationHero';

describe('<ApplicationHero/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ApplicationHero />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
