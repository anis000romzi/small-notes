import React from 'react';
import PropTypes from 'prop-types';

function ToggleLocale({ locale, toggleLocale }) {
  return (
    <button id="locale-button" onClick={toggleLocale}>
      {locale === 'en' ? 'EN' : 'ID'}
    </button>
  );
}

ToggleLocale.propTypes = {
  locale: PropTypes.string.isRequired,
  toggleLocale: PropTypes.func.isRequired,
};

export default ToggleLocale;
