import React from 'react';
import PropTypes from 'prop-types';
import NoteDetail from '../components/NoteDetail';
import Loader from '../components/Loader';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigateToHome={() => navigate('/')} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {},
      loading: true,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
        loading: false,
      };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    this.props.navigateToHome();
  }

  async onArchiveHandler(id) {
    await archiveNote(id);

    const { data } = await getNote(this.props.id);
    this.setState({
      note: data,
    });
  }

  async onActiveHandler(id) {
    await unarchiveNote(id);

    const { data } = await getNote(this.props.id);
    this.setState({
      note: data,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    
    return (
      <NoteDetail
        {...this.state.note}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        onActive={this.onActiveHandler}
      />
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigateToHome: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
