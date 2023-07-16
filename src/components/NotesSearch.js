import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';

function NotesSearch({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <input
      className="notes-search"
      type="text"
      placeholder={
        locale === 'en' ? 'Find your notes...' : 'Cari catatan kamu ...'
      }
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

NotesSearch.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesSearch;
