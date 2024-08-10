import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteNoteEventHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  onArchiveNoteEventHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: !note.archived };
          }
          return note;
        }),
      };
    });
  }
  render() {
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Catatan Pribadi</h1>
        </header>
        <div className="note-app__body">
          <div className="note-input">
            <NoteInput addNote={this.onAddNoteEventHandler} />
          </div>
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes.filter((note) => !note.archived)} onDelete={this.onDeleteNoteEventHandler} onArchive={this.onArchiveNoteEventHandler} />
          <h2>Arsip</h2>
          <NoteList notes={this.state.notes.filter((note) => note.archived)} onDelete={this.onDeleteNoteEventHandler} onArchive={this.onArchiveNoteEventHandler} />
        </div>
      </div>
    );
  }
}

export default NoteApp;
