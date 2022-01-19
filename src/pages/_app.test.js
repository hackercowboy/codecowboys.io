/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { shallow } from 'enzyme';
import { useRouter } from 'next/router';

import App from './_app.page';

jest.mock('next/router', () => ({ useRouter: jest.fn() }));

describe('<App/>', () => {
  it('should render in de', () => {
    useRouter.mockImplementation(() => ({ locale: 'de' }));
    function Component() {
      return <div />;
    }
    const wrapper = shallow(<App Component={Component} pageProps={{}} />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });

  it('should render in en', () => {
    useRouter.mockImplementation(() => ({ locale: 'fr' }));
    function Component() {
      return <div />;
    }
    const wrapper = shallow(<App Component={Component} pageProps={{}} />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });
});
