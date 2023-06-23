import React from 'react'
import List from '../../components/List/List'
import { NoteData, Tag } from '../../App';

type NoteFormProps = {
  availableTags: Tag[]
  noteWithTags:NoteData[]
}

function NoteList({ availableTags, noteWithTags }: NoteFormProps) {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <h1 className='text-3xl container mx-auto m-9 font-semibold text-blue-700 text-center col-span-6'>New Note</h1>
        <div className="col-span-6 gap flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 border border-blue-700 rounded">
            Create
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Edit Tags
          </button>
        </div>
      </div>
      <List availableTags={availableTags} noteWithTags={noteWithTags} />
    </div>
  )
}

export default NoteList