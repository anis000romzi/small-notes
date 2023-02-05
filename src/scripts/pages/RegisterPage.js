import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import NotesApiSource from '../data/notesapi-source';
import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../context/LocaleContext';

function RegisterPage() {
  const navigate = useNavigate();
  const {
    locale, toggleLocale, theme, toggleTheme,
  } = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await NotesApiSource.register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className={`register-page ${theme === 'bright' ? '' : 'dark'}`}>
      <h2>{locale === 'id' ? 'Tulis sesuka hati!' : 'Write it all you want!'}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        <Link to="/">{locale === 'id' ? 'Kembali ke login' : 'Back to login'}</Link>
      </p>
      <div className={`register-page__theme-buttons ${theme === 'bright' ? '' : 'dark'}`}>
        <button aria-label={locale === 'id' ? 'Ubah tema' : 'Change theme'} type="button" onClick={toggleTheme}>{theme === 'bright' ? <FiMoon /> : <FiSun />}</button>
        <button aria-label={locale === 'id' ? 'Ubah bahasa' : 'Change language'} type="button" onClick={toggleLocale}>{locale === 'id' ? 'EN' : 'ID'}</button>
      </div>
    </section>
  );
}

export default RegisterPage;
