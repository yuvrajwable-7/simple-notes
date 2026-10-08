import { useState,useEffect } from "react";
import axios from "axios";

function App(){
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [notes,setNotes]=useState([]);

  const addNote = async()=>{
    try{
      const response = await axios.post("http://localhost:5000/notes",{
        title:title,
        content:content
      });

      console.log(response.data);
      
    }catch(error){

      console.log("Error Adding note",error);

    }
  }

  const getNotes = async ()=>{
    try{

      const response = await axios.get("http://localhost:5000/notes")
      setNotes(response.data);

    }catch(error){
      console.log("Error fetching notes:",error);

    }
  }

  useEffect(()=>{
    getNotes();
  },[]);


  return (
    <div>
      <h1>Simple notes</h1>

      <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />

      <br /><br />

      <textarea placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

      <br /><br />

      <button onClick={addNote}>Add note</button>

      <h3>Notes</h3>
      {
        notes.map((note)=>(
          <div key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>

          </div>
        ))
      }

    </div>
  )
}

export default App;