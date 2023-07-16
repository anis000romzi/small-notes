import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import showFormattedDate from '../../utils/date-format';
import LocaleContext from '../../context/LocaleContext';

function NoteItemHeader({ title, createdAt, id }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="note-item__header">
      <Link to={`/note/${id}`}>
        <h3 className="note-item__header__title">{title}</h3>
      </Link>
      <small className="note-item__header__created">
        {showFormattedDate(createdAt, locale === 'en' ? 'en-EN' : 'id-ID')}
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
