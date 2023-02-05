import React from 'react';
import PropTypes from 'prop-types';
import { FiFolderPlus } from 'react-icons/fi';
import LocaleContext from '../../context/LocaleContext';

function NoteArchiveButton({ id, onArchive }) {
  const { theme } = React.useContext(LocaleContext);

  return (
    <button
      type="button"
      className={`note-button__archive  ${theme === 'bright' ? '' : 'dark'}`}
      onClick={() => onArchive(id)}
    >
      <FiFolderPlus />
    </button>
  );
}

NoteArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteArchiveButton;
