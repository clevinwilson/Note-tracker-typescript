
function NoteCard() {
  return (
      <div className="rounded">
          <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                  <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                  <p className="text-gray-800 dark:text-gray-100 text-sm">Our interior design experts work with you to create the space that you have been dreaming about.</p>
              </div>
              <div>
                  <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                      <p className="text-sm">March 28, 2020</p>
                      <button className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                          <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg" alt="edit" />
                          <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg" alt="edit" />
                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default NoteCard