---
to: src/pages/<%=name%>.js
---
import React from 'react';
import PropTypes from 'prop-types';

const <%=h.demodulize(name)%> = () => (
  <div/>
);

<%=h.demodulize(name)%>.propTypes = {
};

<%=h.demodulize(name)%>.defaultProps = {
};

export default <%=h.demodulize(name)%>;