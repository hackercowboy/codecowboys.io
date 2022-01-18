import React from 'react';
import { shallow } from 'enzyme';

import ApplicationCarousel from '../ApplicationCarousel';

describe('<ApplicationCarousel/>', () => {
  it('should render with one child', () => {
    const wrapper = shallow(<ApplicationCarousel><div /></ApplicationCarousel>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render with multiple children', () => {
    const wrapper = shallow(
      <ApplicationCarousel>
        <div />
        <div />
        <div />
      </ApplicationCarousel>,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
