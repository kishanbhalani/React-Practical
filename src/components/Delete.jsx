import React from 'react'

const Delete = ({setModelPopup,studentList, setStudentList, email}) => {
    
  const handleDelete = () =>{
      setStudentList(studentList.filter((data, index)=>(data.email == studentList.email)))
  }
    
  return (
    
        <div className="bg-[rgba(17,24,39,.5)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex">
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Delete Student
                </h3>
                <button type="button" onClick={()=>setModelPopup(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4">

                <p className='text-center text text-2xl'>Are you sure you want to delete  student !!</p>
                </div>
                <button onClick={()=>handleDelete()} type="submit" className="w-full text-white bg-[#FEAF00] hover:bg-primary-700 focus:ring-4 uppercase focus:outline-none focus:ring-primary-300 font-medium rounded-[4px] text-[14px] px-5 py-[12px] text-center">                  
                  Delete Student
                </button>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Delete