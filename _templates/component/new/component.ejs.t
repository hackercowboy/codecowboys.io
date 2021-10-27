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
  /**
  * Unique id of the component
  */
  id: PropTypes.string,
  /**
  * Additional class name to be added
  */
  className: PropTypes.string,
  /**
   * Custom styles
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

<%=h.demodulize(name)%>.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default <%=h.demodulize(name)%>;