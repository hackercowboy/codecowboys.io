---
to: src/components/<%=name%>.js
---
import React from 'react';
import PropTypes from 'prop-types';

const <%=h.demodulize(name)%> = ({ id, className, style }) => (
  <div id={id} className={[className, '<%= h.changeCase.paramCase(h.demodulize(name)) %>'].filter((c) => c).join(' ')} style={style}>
    <%=h.demodulize(name)%>
  </div>
);

<%=h.demodulize(name)%>.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

<%=h.demodulize(name)%>.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default <%=h.demodulize(name)%>;