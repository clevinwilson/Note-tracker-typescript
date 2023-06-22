import { NoteData, Tag } from '../../App'
import NoteForm from '../../components/NoteForm/NoteForm'

type NewNoteProps ={
  onSubmit:(data:NoteData)=>void
  onAddTag:(tag:Tag)=> void
  availableTags:Tag[]
}

function NewNote({ onSubmit, onAddTag,availableTags}:NewNoteProps,) {
  return (
    <div>
      <h1 className='text-3xl container mx-auto m-9 font-semibold text-blue-700 text-center'>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </div>
  )
}

export default NewNote