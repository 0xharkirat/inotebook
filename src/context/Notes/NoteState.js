import { useState } from "react"
import noteContext from "./noteContext"


const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "638706737140a6c0cd7e40b12",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:55.927Z",
      "__v": 0
    },
    {
      "_id": "63870674714d06c0cd7e40b14",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.122Z",
      "__v": 0
    },
    {
      "_id": "6387067471c406c0cd7e40b16",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.300Z",
      "__v": 0
    },
    {
      "_id": "63870674714v06c0cd7e40b14",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.122Z",
      "__v": 0
    },
    {
      "_id": "63870674714h06c0cd7e40b16",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.300Z",
      "__v": 0
    },
    {
      "_id": "638706747140j6c0cd7e40b14",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.122Z",
      "__v": 0
    },
    {
      "_id": "6387067471406ck0cd7e40b16",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.300Z",
      "__v": 0
    },
    {
      "_id": "6387067471406cl0cd7e40b14",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.122Z",
      "__v": 0
    },
    {
      "_id": "6387067471406c;0cd7e40b16",
      "user": "6385bdbc9706441e605c6cdb",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-11-30T07:29:56.300Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)

    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;