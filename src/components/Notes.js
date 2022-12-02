import { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <div className="container my-3">
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>

        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
