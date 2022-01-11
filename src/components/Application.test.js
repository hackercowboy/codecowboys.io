import React from 'react';
import { shallow } from 'enzyme';

import Application from './Application';

describe('<Application/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Application
      title="Test"
      teaser="Lorem Ipsum"
      image="test.png"
      link="http://test.com"
    />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
