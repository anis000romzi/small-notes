import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchivePage from './pages/ArchivePage';
import HeaderBar from './components/HeaderBar';
import ThemeContext from './context/ThemeContext';
import LocaleContext from './context/LocaleContext';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'day'
  );
  const [locale, setLocale] = React.useState(
    localStorage.getItem('locale') || 'en'
  );

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'day' ? 'night' : 'day';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'en' ? 'id' : 'en';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const fetchUserLogged = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUserLogged();
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <div className="note-app">
            <HeaderBar authedUser={authedUser} />
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <div className="note-app">
          <HeaderBar
            authedUser={authedUser}
            logout={onLogout}
            name={authedUser.name}
          />
          <Routes>
            <Route path="/*" element={<h2>[404] Page Not Found :(</h2>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/archived" element={<ArchivePage />} />
            <Route path="/new" element={<AddPage />} />
            <Route path="/note/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
