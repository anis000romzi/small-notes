import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import NotesSearch from '../components/NotesSearch';
import NoteAdd from '../components/NoteAdd';
import Loader from '../components/Loader';
import LocaleContext from '../context/LocaleContext';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('query');

  function changeSearchParams(keyword) {
    setSearchParams({ query: keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: props.defaultKeyword || '',
      loading: true,
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
        loading: false,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
      );
    });

    return (
      <LocaleContext.Consumer>
        {({ locale }) => {
          return (
            <section className="note-page">
              <NoteAdd />
              <h2 className="note-page__title">
                {locale === 'en' ? 'Archived Notes' : 'Catatan Diarsipkan'}
              </h2>
              <NotesSearch
                keyword={this.state.keyword}
                keywordChange={this.onKeywordChangeHandler}
              />
              {this.state.loading ? (
                <Loader />
              ) : filteredNotes.length ? (
                <NoteList notes={filteredNotes} />
              ) : (
                <p>
                  {locale === 'en'
                    ? 'No archived notes'
                    : 'Tidak ada catatan yang diarsipkan'}
                </p>
              )}
            </section>
          );
        }}
      </LocaleContext.Consumer>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
