import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer/>', () => {
  it('should render', () => {
    jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2050);
    const wrapper = shallow(<Footer />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
