import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
const backendUrl="http://localhost:4000"

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [isEdit,setIsEdit]=useState(false)
  const [loading,setIsloading]=useState(false)
  const [editId,setEditId]=useState("")

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setIsloading(true)
    try {
      const response = await axios.get(`${backendUrl}/allnotes`);
      setNotes(response.data);
      setIsloading(false)
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async () => {
    setIsloading(true)
    try {
      console.log("new Note",newNote)
      await fetch(`${backendUrl}/notes/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title:newNote.title,content:newNote.content}),
      });
      setNewNote({ title: '', content: '' });
      fetchNotes();
      setIsloading(false)
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id) => {
    setIsloading(true)
    try {
      console.log("new Note",newNote)
      await fetch(`${backendUrl}/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchNotes();
      setIsloading(false)
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleEdit=(note)=>{
    setIsEdit(true)
    setNewNote({title:note.title,content:note.content})
    setEditId(note.id)
  }

  const editNote = async () => {
    setIsloading(true)
    try {
      console.log("new Note",newNote)
      await fetch(`${backendUrl}/notes/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title:newNote.title,content:newNote.content}),
      });
      setNewNote({ title: '', content: '' });
      setEditId("")
      setIsEdit(false)
      fetchNotes();
      setIsloading(false)
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className='mainOuter'>
      <h1>Notes App</h1>
      <div className='inputOuter'>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button className='btn' onClick={()=>isEdit?editNote():addNote()}>{isEdit? 'Edit':"Add"}</button>
        {isEdit && <button className="btn" onClick={()=>{
          setIsEdit(false)

          setNewNote({title:"",content:""})

        }}>Cancel</button>}
        {loading && <p>Loading...</p>}
      </div>
      <div className='listOuter'>
        {notes.map((note) => (
          <div key={note.id} className='box'>
            <div className='title'>{note.title}</div>
            <div  className='content'>{note.content}</div>
            <button className='btn' onClick={() => deleteNote(note.id)}>Delete</button>
            <button className='btn' onClick={()=>handleEdit(note)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
