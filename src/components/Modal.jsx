import React, { useState, useEffect } from "react";


function Modal({setModelPopup, edit, setStudentList, studentList, CurrentStudent}) {
    const [studentData, setstudentDate] = useState({
      name: '',
      email:'',
      phone: '',
      enroll: '',
      date: '',
      error: '',
  })
  

  let popupHandleChange = (e) =>{
      let {name, value} = e.target
      setstudentDate({...studentData, [name]:value})     
  }
  
  let popupHandleSubmit = (e) =>{
      e.preventDefault()

      if (studentData.name == "" || studentData.email == "" || studentData.phone == "" || studentData.enroll == "" || studentData.date == "") {
        setstudentDate({ ...studentData, error: "Please Enter All fields" });
        return;
      }
      if(studentList.length > 0){
        const student = studentList.filter(
          (data, index) => data.email == studentData.email
      );
      
        if (student.length > 0) {
          setstudentDate({ ...studentData, error: "Student alreadt exist"});
          return
        }else{
          setStudentList([...studentList,studentData])
        }

      }else{
        setStudentList([...studentList,studentData])
      }
     
      setModelPopup(false);
  }

  let popupHandleEdit = () =>{
    
  }

  useEffect(() => {
    if(CurrentStudent){
      setstudentDate(CurrentStudent)
    }
    // console.log(CurrentStudent);
  },[]) 

    return (
      <>
      
        {/* Main modal */}
        <div className="bg-[rgba(17,24,39,.5)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex">
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                 {edit? 'Edit Student' : ' Create New Student'}
                </h3>
                <button type="button" onClick={()=>setModelPopup(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              {
                studentData.error ? <>
                <span className="bg-red-600 text-[14px] p-4 text-white block font-[600]">
                    {studentData.error}
                </span>
              </> : <></> 
            }

              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input onChange={(e)=>popupHandleChange(e)} value={studentData.name} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input onChange={(e)=>popupHandleChange(e)} value={studentData.email} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input onChange={(e)=>popupHandleChange(e)} value={studentData.phone} type="text" name="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="enroll" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enroll Number</label>
                    <input onChange={(e)=>popupHandleChange(e)} value={studentData.enroll} type="text" name="enroll" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                  </div>


                  <div className="col-span-2">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of admission	</label>
                    <input onChange={(e)=>popupHandleChange(e)} value={studentData.date} type="date" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                  </div>
               
                </div>
                <button onClick={(e)=> edit ? popupHandleEdit(e) :popupHandleSubmit(e)} type="submit" className="w-full text-white bg-[#FEAF00] hover:bg-primary-700 focus:ring-4 uppercase focus:outline-none focus:ring-primary-300 font-medium rounded-[4px] text-[14px] px-5 py-[12px] text-center">                  
                {edit ? 'Update Student':' Add New Student'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Modal;
