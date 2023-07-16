import React from "react";
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from "prop-types";

function NoteDeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__button__delete" onClick={() => onDelete(id)}>
      <FiTrash2 />
    </button>
  );
}

NoteDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDeleteButton;
