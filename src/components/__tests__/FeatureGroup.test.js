import React from 'react';
import { shallow } from 'enzyme';

import FeatureGroup from '../FeatureGroup';

describe('<FeatureGroup/>', () => {
  it('should render', () => {
    const wrapper = shallow(<FeatureGroup />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
