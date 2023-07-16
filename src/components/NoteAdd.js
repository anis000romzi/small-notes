import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFeather } from 'react-icons/fi';

function NoteAdd() {
  const navigate = useNavigate();

  return (
    <button className="note-add" type="button" onClick={() => navigate('/new')}>
      <FiFeather />
    </button>
  );
}

export default NoteAdd;
