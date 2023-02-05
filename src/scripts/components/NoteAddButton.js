import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFeather } from 'react-icons/fi';
import LocaleContext from '../context/LocaleContext';

function NoteAddButton() {
  const navigate = useNavigate();
  const { theme, locale } = React.useContext(LocaleContext);

  return (
    <button
      aria-label={locale === 'id' ? 'Tambah catatan' : 'add note'}
      className={`note-add ${theme === 'bright' ? '' : 'dark'}`}
      type="button"
      onClick={() => navigate('/new')}
    >
      <FiFeather />
    </button>
  );
}

export default NoteAddButton;
