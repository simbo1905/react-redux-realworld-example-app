/**
 * Base Layout
 */

  import React from 'react';
  import PropTypes from 'prop-types';

  const Base = ({ children }) => (
    <div className="app">
      { children }
    </div>
  );

  Base.propTypes = {
    children: PropTypes.element,
  };

  export default Base;
