---
to: src/pages/<%=name%>.test.js
---
import React from 'react';
import { shallow } from 'enzyme';

import <%=h.demodulize(name)%> from '../<%=h.demodulize(name)%>';

describe('<<%=h.demodulize(name)%>/>', () => {
  it('should render', () => {
    const wrapper = shallow(<<%=h.demodulize(name)%> />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});