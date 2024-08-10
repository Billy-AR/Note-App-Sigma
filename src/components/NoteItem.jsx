import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
