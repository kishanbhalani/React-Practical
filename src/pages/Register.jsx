import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
        error: '',
        success: '',
    })

    let regiHandleChange = (e) =>{
        let {name, value} = e.target;
        setRegisterData({...registerData,[name]:value, error:''})
    }

    let regiHandleSubmit = (e) =>{
        e.preventDefault()

        if(registerData.username == "" || registerData.email == "" || registerData.password == "" || registerData.cpassword == ""){
            setRegisterData({...registerData,error:"Please all field is required"})
            return
        }else{
            if(registerData.password !== registerData.cpassword){
                setRegisterData({...registerData,error: "Password and Confirm Password dosn't match"})
                return
            }
            setRegisterData({...registerData,error:""})

            let getAllRegisterUserArray = JSON.parse(localStorage.getItem("Regsitered"))

            if(getAllRegisterUserArray){
                if(getAllRegisterUserArray.length > 0){
                    let isRegisterArray = getAllRegisterUserArray.filter((data, index)=>(data.email == registerData.email))
                    if(isRegisterArray.length > 0){
                        setRegisterData({...registerData, error: "This User is Already Exist"})
                    }else{
                        let newUserRegisterArray = [...getAllRegisterUserArray,registerData]
                        storeLocalStorageData(newUserRegisterArray);                     
                    }
                }
            }else{
                let userArr = [{...registerData}]
                storeLocalStorageData(userArr);
            }
        }
    }

    let storeLocalStorageData = (array) =>{
        let convertDataInToJson = JSON.stringify(array)
        localStorage.setItem("Regsitered", convertDataInToJson)
        // setRegisterData({...registerData, success: "User in Register Successfully"})
        setRegisterData({...registerData, success: "User in Register Successfully",
            username: '',
            email: '',
            password: '',
            cpassword: '',
            error: '',
        })        
      }

  return (
    <>
    <section className="bg-yellow-gradient">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
        <div className="w-full bg-white rounded-[20px] shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-[30px] space-y-4 md:space-y-6">

            <div className='text-center'>
                <h1 className='mb-[43px] font-[700] text-[22px] md:text-[32px] inline-block border-l-[6px] border-[#F8D442] px-[10px]'>CRUD OPERATIONS</h1>
                <h1 className="text-xl font-[600] leading-tight tracking-tight text-gray-900 md:text-2xl uppercase mb-[9px]">
                    Sign Up
                </h1>
                <p className='text-[#6C6C6C] text-[14px] font-[400] mb-[50px]'>Enter your account details</p>
            </div>
            
            {
                registerData.error ? <>
                <span className="bg-red-600 text-[14px] p-4 text-white block font-[600]">
                    {registerData.error}
                </span>
              </> : <></> 
            }

            {
                registerData.success ? <>                    
                    <span className="bg-green-600 p-4 text-white text-[14px] block font-[600]">             
                        {registerData.success}
                    </span>
                </> : <></>
            }
            
            <form className="space-y-4 md:space-y-6" action="#">
             <div>
                <label htmlFor="username" className="block mb-2 text-[14px] font-[500] text-[#6C6C6C]">Username</label>
                <input onChange={(e)=>regiHandleChange(e)} value={registerData.username} type="text" name="username" className="border border-gray-300 text-gray-900 sm:text-sm rounded-[4px] h-[44px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-[#CDCDCD] placeholder:text-[12px]" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-[14px] font-[500] text-[#6C6C6C]">Email</label>
                <input onChange={(e)=>regiHandleChange(e)} value={registerData.email} type="email" name="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-[4px] h-[44px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-[#CDCDCD] placeholder:text-[12px]" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-[14px] font-[500] text-[#6C6C6C]">Password</label>
                <input onChange={(e)=>regiHandleChange(e)} value={registerData.password} type="password" name="password" className="border border-gray-300 text-gray-900 sm:text-sm rounded-[4px] h-[44px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-[#CDCDCD] placeholder:text-[12px]" placeholder="Enter your password" />
              </div>
              <div>
                <label htmlFor="cpassword" className="block mb-2 text-[14px] font-[500] text-[#6C6C6C]">Confirm Password</label>
                <input onChange={(e)=>regiHandleChange(e)} value={registerData.cpassword} type="password" name="cpassword" className="border border-gray-300 text-gray-900 sm:text-sm rounded-[4px] h-[44px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-[#CDCDCD] placeholder:text-[12px]" placeholder="Enter your password" />
              </div>
          
              <button onClick={(e)=>regiHandleSubmit(e)} type="submit" className="w-full text-white bg-[#FEAF00] hover:bg-primary-700 focus:ring-4 uppercase focus:outline-none focus:ring-primary-300 font-medium rounded-[4px] text-[14px] px-5 py-[12px] text-center">Sign Up</button>
             
              <p className="text-sm font-light text-gray-500 text-center">
                Don’t have an account yet? <button onClick={()=>navigate('/')} className="font-medium text-primary-600 hover:underline">Sign In</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register