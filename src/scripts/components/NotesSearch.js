import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';

function NotesSearch({ keyword, keywordChange }) {
  const { locale, theme } = React.useContext(LocaleContext);

  return (
    <input
      className={`notes-search ${theme === 'bright' ? '' : 'dark'}`}
      type="text"
      placeholder={locale === 'id' ? 'Cari catatan kamu...' : 'Find your notes...'}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

NotesSearch.defaultProps = {
  keyword: '',
};

NotesSearch.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesSearch;
