import { useState } from "react"
import noteContext from "./noteContext"


const NoteState = (props)=>{
  const host = "http://localhost:5000"
   const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Get all notes
  const getNotes = async () =>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4NWJkYmM5NzA2NDQxZTYwNWM2Y2RiIn0sImlhdCI6MTY2OTcwOTI0NH0.tSdV0bAyzlecdFvCuhkZ6SK4ROdYSLKFqacCz8mTPGM"
      }
    });

    const json = await response.json();
    console.table(json);
    setNotes(json);
  }


  // Add a note
  const addNote = async (title, description, tag) =>{
    // TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4NWJkYmM5NzA2NDQxZTYwNWM2Y2RiIn0sImlhdCI6MTY2OTcwOTI0NH0.tSdV0bAyzlecdFvCuhkZ6SK4ROdYSLKFqacCz8mTPGM"
      },
      body: JSON.stringify({title, description, tag})
    });

    



    


    console.log("Adding a new note");
    const note = {
      
      "title": title,
      "description": description,
      "tag": tag,
    };
    setNotes(notes.concat(note))
  }

  const deleteNote = async (id) =>{
    
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4NWJkYmM5NzA2NDQxZTYwNWM2Y2RiIn0sImlhdCI6MTY2OTcwOTI0NH0.tSdV0bAyzlecdFvCuhkZ6SK4ROdYSLKFqacCz8mTPGM"
      }
    });

    console.log("Deleting a note");
    const newNotes = notes.filter((note) => {return note._id!==id})
    setNotes(newNotes);

  }

  const editNote = async (id, title, description, tag) =>{

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4NWJkYmM5NzA2NDQxZTYwNWM2Y2RiIn0sImlhdCI6MTY2OTcwOTI0NH0.tSdV0bAyzlecdFvCuhkZ6SK4ROdYSLKFqacCz8mTPGM"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = response.json();

    // logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

  }

    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;