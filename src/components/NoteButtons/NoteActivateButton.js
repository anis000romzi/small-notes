import React from "react";
import { FiFolderMinus } from 'react-icons/fi';
import PropTypes from "prop-types";

function NoteActivateButton({ id, onActive }) {
  return (
    <button
      className="note-item__button__activate"
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
