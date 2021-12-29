import React from 'react';
import { shallow } from 'enzyme';

import ApplicationHero from './ApplicationHero';

describe('<ApplicationHero/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ApplicationHero
      image="image.png"
      title="title"
      link="/test"
      appStoreLink="http://itunes.apple.com/app/letter/id498506154"
      description="description"
    />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
