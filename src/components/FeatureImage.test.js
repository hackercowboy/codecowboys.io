import React from 'react';
import { shallow } from 'enzyme';

import FeatureImage from './FeatureImage';

describe('<FeatureImage/>', () => {
  it('should render', () => {
    const wrapper = shallow(<FeatureImage src="http://example.com/test.png" alt="Lorem Ipsum" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
