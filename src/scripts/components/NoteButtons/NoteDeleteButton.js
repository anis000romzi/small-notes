import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

function NoteDeleteButton({ id, onDelete }) {
  return (
    <button type="button" className="note-button__delete" onClick={() => onDelete(id)}>
      <FiTrash2 />
    </button>
  );
}

NoteDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDeleteButton;
