import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import LocaleContext from '../context/LocaleContext';

function HeaderBar({ logout, name }) {
  const ref = React.useRef(null);
  const [navOpen, setNavOpen] = React.useState(false);
  const {
    locale, theme, toggleTheme, toggleLocale,
  } = React.useContext(LocaleContext);

  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        ref.current.style.top = '0';
      } else {
        ref.current.style.top = '-200px';
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <header ref={ref} className={`note-app__header ${theme === 'bright' ? '' : 'dark'}`}>
      <div className="note-app__header__menu">
        <button aria-label={locale === 'id' ? 'Tombol navigasi' : 'Navigation button'} id="hamburgerButton" type="button" onClick={() => setNavOpen((current) => !current)}>☰</button>
      </div>
      <div className="note-app__header__title">
        <h1>Small Notes</h1>
      </div>
      <nav id="navigationDrawer" className={`note-app__header__nav ${navOpen ? 'open' : ''} ${theme === 'bright' ? '' : 'dark'}`}>
        <ul>
          <li id="themeButtons">
            <button aria-label={locale === 'id' ? 'Ubah tema' : 'Change theme'} type="button" onClick={toggleTheme}>{theme === 'bright' ? <FiMoon /> : <FiSun />}</button>
            <button aria-label={locale === 'id' ? 'Ubah bahasa' : 'Change language'} type="button" onClick={toggleLocale}>{locale === 'id' ? 'EN' : 'ID'}</button>
          </li>
          <li>
            <Link to="/notes">{locale === 'id' ? 'Aktif' : 'Active'}</Link>
          </li>
          <li>
            <Link to="/notes/archived">{locale === 'id' ? 'Diarsipkan' : 'Archived'}</Link>
          </li>
          <li>
            <button aria-label={locale === 'id' ? `${name} keluar dari akun` : `${name} logout from account`} type="button" onClick={logout}>
              {name}
              <FiLogOut />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

HeaderBar.defaultProps = {
  name: 'User',
};

HeaderBar.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default HeaderBar;
