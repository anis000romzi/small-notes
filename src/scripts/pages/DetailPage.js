import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NotesApiSource from '../data/notesapi-source';
import NoteDetail from '../components/NoteDetail';
import Loader from '../components/Loader';

function DetailPage() {
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    NotesApiSource.getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  async function onDeleteHandler(noteId) {
    await NotesApiSource.deleteNote(noteId);
    navigate('/');
  }

  async function onActiveHandler(noteId) {
    await NotesApiSource.activateNote(noteId);
    const { data } = await NotesApiSource.getNote(noteId);
    setNote(data);
  }

  async function onArchiveHandler(noteId) {
    await NotesApiSource.archiveNote(noteId);
    const { data } = await NotesApiSource.getNote(noteId);
    setNote(data);
  }

  return loading ? <Loader /> : (
    <section className="detail-page">
      {note ? (
        <NoteDetail
          {...note}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
          onActive={onActiveHandler}
        />
      ) : <p>Note's not available</p>}
    </section>
  );
}

export default DetailPage;
