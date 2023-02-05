import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesApiSource from '../data/notesapi-source';
import NoteList from '../components/NoteList';
import NotesSearch from '../components/NotesSearch';
import NoteAddButton from '../components/NoteAddButton';
import Loader from '../components/Loader';
import LocaleContext from '../context/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => searchParams.get('query') || '');
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    NotesApiSource.getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  function onKeywordChangeHandler(key) {
    setKeyword(key);
    setSearchParams({ query: key });
  }

  const filteredNotes = notes.filter((note) => (
    note.title.toLowerCase().includes(keyword.toLowerCase()) ||
      note.body.toLowerCase().includes(keyword.toLowerCase())
  ));

  return (
    <section className="note-page">
      <NoteAddButton />
      <h2 className="note-page__title">{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <NotesSearch keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading ? <Loader /> : filteredNotes.length ?
        <NoteList notes={filteredNotes} /> : <p>{locale === 'id' ? 'Tidak ada catatan aktif' : 'No active notes'}</p>}
    </section>
  );
}

export default HomePage;
