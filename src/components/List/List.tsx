import ReactSelect from 'react-select';
import { useMemo, useState } from 'react';
import { Note, NoteData, Tag } from '../../App';
import NoteCard from '../NoteCard/NoteCard';

type NoteFormProps = {
  availableTags: Tag[]
  noteWithTags:Note[]
}

function List({ availableTags, noteWithTags }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);


  const filteredNotes = useMemo(() => {
    return noteWithTags.filter(note => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every(tag =>
            note.tags.some(noteTag => noteTag.id === tag.id)
          ))
      )
    })
  }, [title, selectedTags, noteWithTags])


  return (
    <div>
      <div className="flex">
        {/* title */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Title
          </label>
          <input value={title} onChange={(e) => { setTitle(e.target.value) }} className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title" required />
        </div>

        {/* tags */}
        <div className="w-full md:w-1/2 px-3">
          <div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Tags</label>
            <ReactSelect

              value={selectedTags?.map(tag => {
                return { label: tag.label, value: tag.id };
              })}

              options={availableTags.map(tag => {
                return { label: tag.label, value: tag.id }
              })}

              onChange={tags => {
                setSelectedTags(tags.map(tag => {
                  return { label: tag.label, id: tag.value };
                }))
              }}

              isMulti
            />
          </div>
        </div>
      </div>

      {/* note listing */}

      <div className="mx-auto container py-20 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {filteredNotes.map((note)=>{
            return(
              <NoteCard id={note.id} title={note.title} tags={note.tags} />
            )
          })}

          
        </div>
      </div>
    </div>
  )
}

export default List