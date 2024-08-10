import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} archived={note.archived} onDelete={onDelete} onArchive={onArchive} />)
      )}
    </div>
  );
}

export default NoteList;
