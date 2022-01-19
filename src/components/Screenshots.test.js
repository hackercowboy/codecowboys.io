import React from 'react';
import { shallow } from 'enzyme';

import Screenshots from './Screenshots';

describe('<Screenshots/>', () => {
  it('should render', () => {
    const ipadImages = [1, 2, 3, 4, 5].map((index) => ({
      original: `/screenshots/letter/letter_ipad_${index}_de.webp`,
      thumbnail: `/screenshots/letter/letter_ipad_${index}_de.webp`,
    }));

    const iphoneImages = [1, 2, 3, 4, 5].map((index) => ({
      original: `/screenshots/letter/letter_iphone_${index}_de.webp`,
      thumbnail: `/screenshots/letter/letter_iphone_${index}_de.webp`,
    }));
    const wrapper = shallow(<Screenshots ipadImages={ipadImages} iphoneImages={iphoneImages} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
