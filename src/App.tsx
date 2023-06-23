import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import NewNote from './pages/NewNote/NewNote';
import { useMemo } from 'react';
import { useLocalStorage } from './localStorage/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import NoteList from './pages/NoteList/NoteList';

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}


export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAG', []);

  //geting the value from localstorage and set as note
  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])

  //creating the node 
  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prev => {
      return [...prev, { ...data, id: uuidv4(), tagIds: tags.map(tag => tag.id) }]
    })
  }

  //function to add tags
  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag]);
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteList availableTags={tags} />} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>} />
        <Route path="/:id" >
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="/*" element={<Navigate to='/' />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
