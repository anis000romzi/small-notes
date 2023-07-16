import React from "react";
import PropTypes from "prop-types";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.body === "") {
      return
    }
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <span>Characters left: {50 - this.state.title.length}</span>
        <input
          type="text"
          id="title"
          className="note-input__title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <div
          className="note-input__body"
          data-placeholder="Write your note here ..."
          contentEditable
          onInput={this.onBodyChangeEventHandler}
        ></div>
        <button className="note-input__button" type="submit">
          Add note
        </button>
      </form>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
