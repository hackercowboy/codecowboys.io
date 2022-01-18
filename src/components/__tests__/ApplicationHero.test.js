import React from 'react';
import { shallow } from 'enzyme';

import ApplicationHero from '../ApplicationHero';

describe('<ApplicationHero/>', () => {
  it('should render with link', () => {
    const wrapper = shallow(<ApplicationHero
      image="image.webp"
      title="title"
      link="/test"
      appStoreLink="http://itunes.apple.com/app/letter/id498506154"
      description="description"
    />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render withou link', () => {
    const wrapper = shallow(<ApplicationHero
      image="image.webp"
      title="title"
      appStoreLink="http://itunes.apple.com/app/letter/id498506154"
      description="description"
      soon
    />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
