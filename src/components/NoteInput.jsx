import React from "react";

class NoteInput extends React.Component {
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
    this.setState({
      title: event.target.value,
    });
  }
  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input className="note-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className="note-input__body" placeholder="Isi catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
        <button type="submit">Kirim</button>
      </form>
    );
  }
}

export default NoteInput;
