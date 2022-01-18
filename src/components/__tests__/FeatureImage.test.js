import React from 'react';
import { shallow } from 'enzyme';

import FeatureImage from '../FeatureImage';

describe('<FeatureImage/>', () => {
  it('should render', () => {
    const wrapper = shallow(<FeatureImage src="http://example.com/test.webp" alt="Lorem Ipsum" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
