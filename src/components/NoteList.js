import React from "react";
import NoteItem from "./NoteItem/NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  return (
    <div className="note-list">
      <div className="note-list__body">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            isArchived={note.archived}
            {...note}
          />
        ))}
      </div>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
