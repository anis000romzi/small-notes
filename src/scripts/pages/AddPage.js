import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotesApiSource from '../data/notesapi-source';
import NoteAddInput from '../components/NoteAddInput';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await NotesApiSource.addNote(note);
    navigate('/');
  }

  return (
    <section className="add-page">
      <NoteAddInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
