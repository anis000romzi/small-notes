import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import NotesApiSource from '../data/notesapi-source';
import LoginInput from '../components/LoginInput';
import LocaleContext from '../context/LocaleContext';

function LoginPage({ loginSuccess }) {
  const {
    locale, toggleLocale, theme, toggleTheme,
  } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await NotesApiSource.login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className={`login-page ${theme === 'bright' ? '' : 'dark'}`}>
      <h2>{locale === 'id' ? 'Silahkan login untuk melanjutkan ...' : 'Please login to continue ...'}</h2>
      <LoginInput login={onLogin} />
      <p>
        {locale === 'id' ? 'Belum punya akun? ' : 'Don\'t have an account? '}
        <Link to="/register">{locale === 'id' ? 'Daftar di sini!' : 'Register here!'}</Link>
      </p>
      <div className={`login-page__theme-buttons ${theme === 'bright' ? '' : 'dark'}`}>
        <button aria-label={locale === 'id' ? 'Ubah tema' : 'Change theme'} type="button" onClick={toggleTheme}>{theme === 'bright' ? <FiMoon /> : <FiSun />}</button>
        <button aria-label={locale === 'id' ? 'Ubah bahasa' : 'Change language'} type="button" onClick={toggleLocale}>{locale === 'id' ? 'EN' : 'ID'}</button>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
