import React from 'react';
import { addNote } from '../utils/network-data';
import NotesInput from '../components/NotesInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  };

  return <NotesInput addNote={onAddNoteHandler} />;
}

export default AddPage;
