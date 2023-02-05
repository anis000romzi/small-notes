import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import NoteButtons from './NoteButtons/NoteButtons';
import showFormattedDate from '../helpers/date-formater';
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
    <>
      <div className="detail-page__header">
        <h2 className="detail-page__header__title">{title}</h2>
        <span className="detail-page__header__created">
          {showFormattedDate(createdAt, locale === 'id' ? 'id-ID' : 'en-EN')}
        </span>
      </div>
      <div className="detail-page__body">
        <div>{parser(body)}</div>
      </div>
      <NoteButtons
        id={id}
        onDelete={onDelete}
        onActive={onActive}
        onArchive={onArchive}
        isArchived={archived}
      />
    </>
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
