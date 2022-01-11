import React from 'react';
import { shallow } from 'enzyme';
import { Events } from 'react-scroll';

import Navigation from './Navigation';

jest.mock('react-scroll', () => ({ Events: { scrollEvent: { register: jest.fn() } } }));

describe('<Navigation/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.debug()).toMatchSnapshot();

    wrapper.find('Hamburger').props().onClick();
    expect(wrapper.debug()).toMatchSnapshot();

    expect(Events.scrollEvent.register).toBeCalled();
    Events.scrollEvent.register.mock.calls[0][1]();
    wrapper.update();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
