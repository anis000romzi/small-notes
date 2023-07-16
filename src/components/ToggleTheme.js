import React from 'react';
import PropTypes from 'prop-types';
import { FiMoon, FiSun } from 'react-icons/fi';

function ToggleTheme({ theme, toggleTheme }) {
  return (
    <button id="theme-button" onClick={toggleTheme}>
      {theme === 'day' ? <FiSun /> : <FiMoon />}
    </button>
  );
}

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ToggleTheme;
