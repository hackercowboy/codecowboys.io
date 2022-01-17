import React from 'react';
import { shallow } from 'enzyme';
import { scroller } from 'react-scroll';
import ScrollButton from './ScrollButton';

jest.mock('react-scroll');

describe('<ScrollButton/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ScrollButton target="apps" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should handle scrollTo', () => {
    const wrapper = shallow(<ScrollButton target="apps" />);
    wrapper.find('button').props().onClick();
    expect(scroller.scrollTo).toBeCalledWith('apps', { duration: 500, offset: -94, smooth: true });
  });
});
