
import NoteForm from '../../components/NoteForm/NoteForm'

function NewNote() {
  return (
    <div>
      <h1 className='text-3xl container mx-auto m-9 font-semibold text-blue-700'>New Note</h1>
      <NoteForm/>
    </div>
  )
}

export default NewNote