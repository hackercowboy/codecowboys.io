---
to: src/components/<%=name%>.js
---
import React from 'react';
import PropTypes from 'prop-types';

import './<%=h.demodulize(name)%>.scss';

const <%=h.demodulize(name)%> = () => (
  <div className="<%= h.changeCase.paramCase(h.demodulize(name)) %>">
    <%=h.demodulize(name)%>
  </div>
);

<%=h.demodulize(name)%>.propTypes = {
  
};

<%=h.demodulize(name)%>.defaultProps = {
  
};

export default <%=h.demodulize(name)%>;
