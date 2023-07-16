import React from 'react';
import PropTypes from 'prop-types';
import NoteButtons from './NoteButtons/NoteButtons';
import showFormattedDate from '../utils/date-format';
import parser from 'html-react-parser';
import LocaleContext from '../context/LocaleContext';

function NoteDetail({
  id,
  title,
  createdAt,
  body,
  archived,
  onActive,
  onArchive,
  onDelete,
}) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="note-detail">
      <div className="note-detail__header">
        <h2 className="note-detail__header__title">{title}</h2>
        <span className="note-detail__header__created">
          {showFormattedDate(createdAt, locale === 'en' ? 'en-EN' : 'id-ID')}
        </span>
      </div>
      <div className="note-detail__body">
        <div>{parser(body)}</div>
      </div>
      <NoteButtons
        id={id}
        onDelete={onDelete}
        onActive={onActive}
        onArchive={onArchive}
        isArchived={archived}
      />
    </section>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
