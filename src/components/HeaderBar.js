import React from 'react';
import PropTypes from 'prop-types';
import ToggleTheme from './ToggleTheme';
import ToggleLocale from './ToggleLocale';
import useOpenNav from '../hooks/useOpenNav';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ThemeContext from '../context/ThemeContext';
import LocaleContext from '../context/LocaleContext';

function HeaderBar({ authedUser, logout, name }) {
  const { ref, navOpen, setNavOpen } = useOpenNav();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <header ref={ref} className="note-app__header">
      <div className="note-app__header__menu">
        <button
          aria-label="Navigation button"
          id="hamburgerButton"
          type="button"
          onClick={() => setNavOpen((current) => !current)}
        >
          ☰
        </button>
      </div>
      <div className="note-app__header__title">
        <h1>Small Notes</h1>
      </div>
      <nav
        id="navigationDrawer"
        className={`note-app__header__nav ${navOpen ? 'open' : ''}`}
      >
        <ul>
          <li>
            <div id="pref-buttons">
              <ToggleLocale locale={locale} toggleLocale={toggleLocale} />
              <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            </div>
          </li>
          {authedUser === null ? (
            ''
          ) : (
            <>
              <li>
                <Link to="/">{locale === 'en' ? 'Active' : 'Aktif'}</Link>
              </li>
              <li>
                <Link to="/archived">
                  {locale === 'en' ? 'Archived' : 'Diarsipkan'}
                </Link>
              </li>
              <li>
                <button id="logout-button" onClick={logout}>
                  {name}&nbsp;
                  <FiLogOut />
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

HeaderBar.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default HeaderBar;
