import { Tag } from "../../App"

type SimplifiedNotes={
    id:string
    title:string
    tags:Tag[]
}

function NoteCard({id,title,tags}:SimplifiedNotes) {
  return (
      <div className="rounded">
          <div className="w-full h-64 flex flex-col justify-between  bg-white  rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                  <h4 className="text-gray-800  font-bold mb-3 text-center">{title}</h4>
                  
                  <div className="flex">
                      {
                          tags.map((tag) => {
                              return (
                                  <p className="text-gray-100 text-sm m-3 font-semibold bg-blue-600 p-2 py-1 rounded-2xl">{tag.label} </p>

                              )
                          })
                      }
                  </div>
              </div>
              {/* <div>
                  <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                      <p className="text-sm">March 28, 2020</p>
                      <button className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                          <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg" alt="edit" />
                          <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg" alt="edit" />
                      </button>
                  </div>
              </div> */}
          </div>
      </div>
  )
}

export default NoteCard