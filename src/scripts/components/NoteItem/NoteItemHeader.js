import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import showFormattedDate from '../../helpers/date-formater';
import LocaleContext from '../../context/LocaleContext';

function NoteItemHeader({ title, createdAt, id }) {
  const { locale, theme } = React.useContext(LocaleContext);

  return (
    <div className={`note-item__header  ${theme === 'bright' ? '' : 'dark'}`}>
      <Link to={`/notes/${id}`}>
        <h3 className="note-item__header__title">{title}</h3>
      </Link>
      <small className="note-item__header__created">
        {showFormattedDate(createdAt, locale === 'id' ? 'id-ID' : 'en-EN')}
      </small>
    </div>
  );
}

NoteItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItemHeader;
