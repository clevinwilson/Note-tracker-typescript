import CreatableSelect from 'react-select/creatable';
import { Link, useNavigate } from 'react-router-dom';
import {useRef,useState} from 'react';
import { NoteData, Tag } from '../../App';
import { v4 as uuidv4 } from 'uuid';

type NoteFormProps={
  onSubmit:(data:NoteData)=>void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}


function NoteForm({ onSubmit, onAddTag,availableTags}:NoteFormProps) {
  const titleRef=useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags,setSelectedTags]=useState<Tag[]>([])
  const navigate=useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    

    onSubmit({
      title:titleRef.current!.value,
      markdown:textAreaRef.current!.value,
      tags:selectedTags
    })

    navigate('..')
  }


  return (
    <div className="h-screen flex justify-center ">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">

          {/* title */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Title
            </label>
            <input ref={titleRef} className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title" required />
          </div>

          {/* tags */}
          <div className="w-full md:w-1/2 px-3">
            <div>
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Tags</label>
              <CreatableSelect
              onCreateOption={label=>{
                const newTag={id:uuidv4(),label};
                onAddTag(newTag);
                setSelectedTags(prev=>[...prev,newTag]);
              }}

               value={selectedTags?.map(tag=>{
                return{label:tag.label,value:tag.id};
               })}

               onChange={tags=>{
                setSelectedTags(tags.map(tag=>{
                  return{label:tag.label,id:tag.value};
                }))
               }}

                isMulti
              />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Body
            </label>
            <textarea ref={textAreaRef} id="message" rows={15} className="block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border  " placeholder="Write your thoughts here..." defaultValue={""} required/>
          </div>
        </div>

        <div>
          <div className='flex justify-end'>
            <button type='submit' className="bg-blue-500 me-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
            <Link to={'..'} >
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Cancel
              </button>
            </Link>
          </div>
        </div>

      </form>
    </div>
  )
}

export default NoteForm