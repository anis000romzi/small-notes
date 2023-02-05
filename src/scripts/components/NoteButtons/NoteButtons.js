import React from 'react';
import PropTypes from 'prop-types';
import NoteActivateButton from './NoteActivateButton';
import NoteArchiveButton from './NoteArchiveButton';
import NoteDeleteButton from './NoteDeleteButton';

function NoteButtons({
  id, onDelete, onArchive, onActive, isArchived,
}) {
  return (
    <div className="note-buttons">
      <NoteDeleteButton id={id} onDelete={onDelete} />
      {isArchived ? (
        <NoteActivateButton id={id} onActive={onActive} />
      ) : (
        <NoteArchiveButton id={id} onArchive={onArchive} />
      )}
    </div>
  );
}

NoteButtons.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteButtons;
