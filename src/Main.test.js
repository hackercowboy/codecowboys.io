import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('routes', () => {
  it('should render', async () => {
    jest.spyOn(document, 'addEventListener');
    const wrapper = await shallow(<Main />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
  });

  it('should prevent some key events', async () => {
    const event = {
      code: 'Space',
      preventDefault: jest.fn(),
    };
    jest.spyOn(document, 'addEventListener').mockImplementation((type, callback) => callback(event));
    const wrapper = await shallow(<Main />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should not prevent key events', async () => {
    const event = {
      code: 'Test',
      preventDefault: jest.fn(),
    };
    jest.spyOn(document, 'addEventListener').mockImplementation((type, callback) => callback(event));
    const wrapper = await shallow(<Main />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
