import React from 'react';
import { shallow } from 'enzyme';

import Feature from '../Feature';

describe('<Feature/>', () => {
  it('should render left', () => {
    const wrapper = shallow(<Feature
      title="Title"
      description="Description"
      icon="fa-print"
    />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render right', () => {
    const wrapper = shallow(<Feature
      title="Title"
      description="Description"
      icon="fa-print"
      right
    />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
