import React from 'react';
import PropTypes from 'prop-types';
import { FiFolderMinus } from 'react-icons/fi';
import LocaleContext from '../../context/LocaleContext';

function NoteActivateButton({ id, onActive }) {
  const { theme } = React.useContext(LocaleContext);

  return (
    <button
      type="button"
      className={`note-button__activate  ${theme === 'bright' ? '' : 'dark'}`}
      onClick={() => onActive(id)}
    >
      <FiFolderMinus />
    </button>
  );
}

NoteActivateButton.propTypes = {
  id: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
};

export default NoteActivateButton;
