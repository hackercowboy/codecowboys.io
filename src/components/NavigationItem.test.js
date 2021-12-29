import React from 'react';
import { shallow } from 'enzyme';

import NavigationItem from './NavigationItem';

describe('<NavigationItem/>', () => {
  it('should render', () => {
    const wrapper = shallow(<NavigationItem onSetActive={() => true} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
