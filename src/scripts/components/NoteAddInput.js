import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';

function NoteAddInput({ addNote }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const { locale, theme } = React.useContext(LocaleContext);

  function onTitleChangeEventHandler(event) {
    const limit = 50;
    setTitle(event.target.value.slice(0, limit));
  }

  function onBodyChangeEventHandler(event) {
    setBody(event.target.innerHTML);
  }

  function onSubmitEventHandler(event) {
    event.preventDefault();
    if (body === '') {
      // eslint-disable-next-line no-alert
      alert('Body shouldn\'t be empty!');
      return;
    }
    addNote({ title, body });
  }

  return (
    <form className={`note-input  ${theme === 'bright' ? '' : 'dark'}`} onSubmit={onSubmitEventHandler}>
      <span>
        {locale === 'id' ? 'Sisa huruf: ' : 'Characters left: '}
        {50 - title.length}
      </span>
      <input
        type="text"
        className="note-input__title"
        placeholder={locale === 'id' ? 'Judul' : 'Title'}
        value={title}
        onChange={onTitleChangeEventHandler}
      />
      <div
        aria-label={locale === 'id' ? 'Tulis catatan kamu disini ...' : 'Write your note here ...'}
        className="note-input__body"
        data-placeholder={locale === 'id' ? 'Tulis catatan kamu disini ...' : 'Write your note here ...'}
        contentEditable
        onInput={onBodyChangeEventHandler}
      />
      <button className="note-input__button" type="submit">
        {locale === 'id' ? 'Tambah Catatan' : 'Add Note'}
      </button>
    </form>
  );
}

NoteAddInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteAddInput;
