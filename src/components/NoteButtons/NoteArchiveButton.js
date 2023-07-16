import React from "react";
import { FiFolderPlus } from 'react-icons/fi';
import PropTypes from "prop-types";

function NoteArchiveButton({ id, onArchive }) {
  return (
    <button
      className="note-item__button__archive"
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
