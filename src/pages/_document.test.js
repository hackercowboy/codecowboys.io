import React from 'react';
import { shallow } from 'enzyme';

import Document from './_document.page';

jest.mock('next/document');

describe('<Document/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Document />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
    expect(Document.getInitialProps()).toMatchSnapshot();
  });
});
