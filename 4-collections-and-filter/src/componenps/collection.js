import React from "react";

const Collection = ({ notes, deleteNote }) => (
  <ul className="collection-list">
    {notes.map(note => (
      <li className="collection-item" key={note.id}>
        <span>{note.text} </span>
        <button
          onClick={() => {
            deleteNote(note.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default Collection;
