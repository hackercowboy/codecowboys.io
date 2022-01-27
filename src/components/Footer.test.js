import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer/>', () => {
  it('should render on server', () => {
    jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2050);
    process.browser = false;
    const wrapper = shallow(<Footer />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });

  it('should render on browser', () => {
    jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2050);
    process.browser = true;
    const wrapper = shallow(<Footer />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
