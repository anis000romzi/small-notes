import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { putAccessToken } from './helpers/access-token';
import NotesApiSource from './data/notesapi-source';
import { LocaleProvider } from './context/LocaleContext';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchivePage from './pages/ArchivePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HeaderBar from './components/HeaderBar';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [localeContext, setLocaleContext] = React.useState({
    theme: localStorage.getItem('theme') || 'bright',
    locale: localStorage.getItem('locale') || 'id',
    toggleTheme: () => {
      setLocaleContext((current) => {
        const newTheme = current.theme === 'bright' ? 'dark' : 'bright';
        localStorage.setItem('theme', newTheme);
        return {
          ...current,
          theme: newTheme,
        };
      });
    },
    toggleLocale: () => {
      setLocaleContext((current) => {
        const newLocale = current.locale === 'id' ? 'en' : 'id';
        localStorage.setItem('locale', newLocale);
        return {
          ...current,
          locale: newLocale,
        };
      });
    },
  });

  document.body.style.backgroundColor = localeContext.theme === 'bright' ? 'white' : '#180A0A';
  document.body.style.color = localeContext.theme === 'bright' ? 'black' : 'white';

  React.useEffect(() => {
    NotesApiSource.getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await NotesApiSource.getUserLogged();

    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContext}>
        <>
          <header className={`note-app__header__lite ${localeContext.theme === 'bright' ? '' : 'dark'}`}>
            <h1 className="note-app__header__title__lite">Small Notes</h1>
          </header>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={localeContext}>
      <>
        <HeaderBar logout={onLogout} name={authedUser.name} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/notes/archived" element={<ArchivePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </>
    </LocaleProvider>
  );
}

export default App;
