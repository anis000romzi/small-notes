import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

function NoteItem({ title, createdAt, body, id }) {
  return (
    <div className="note-item">
      <NoteItemHeader id={id} title={title} createdAt={createdAt} />
      <NoteItemBody body={body} />
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
