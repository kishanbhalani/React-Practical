import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [storeData, setStoreData] = useState({
        email: '',
        password:'',
        error: ''
    })
    
    let loginHandleChange = (e) =>{        
        let {name, value} = e.target;
        setStoreData({...storeData, [name]:value})
    // console.log(storeData)
    }

    let loginHandleSubmit = (e) =>{
        e.preventDefault()
        if (storeData.email == "" || storeData.password == "") {
            setStoreData({ ...storeData, error: "Please Enter All fields" });
            return;
          }
        
        const userArray = JSON.parse(localStorage.getItem("Regsitered")) ;
        
        if (userArray) {
                //console.log(userArray);
            const user = userArray.filter(
                (data, index) =>
                data.email == storeData.email && data.password == storeData.password
            );

                if (user.length > 0) {
                    localStorage.setItem("logedUser", JSON.stringify(storeData));
                    navigate("/home");
                }else{
                    setStoreData({ ...storeData, error: <>Email is not regsiterd please sing Up </>});
                }
            }else{
                setStoreData({ ...storeData, error: <>Email is not regsiterd please sing Up </>});
         }
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
                    Sign In
                </h1>
                <p className='text-[#6C6C6C] text-[14px] font-[400] mb-[50px]'>Enter your credentials to access your account</p>
            </div>

            {
                storeData.error ? <>
                <span className="bg-red-600 text-[14px] p-4 text-white block font-[600]">
                    {storeData.error}
                </span>
              </> : <></> 
            }
          
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-[14px] font-[500] text-[#6C6C6C]">Email</label>
                <input onChange={(e)=>loginHandleChange(e)} type="email" name="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-[4px] h-[44px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-[#CDCDCD] placeholder:text-[12px]" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-[14px] font-[500] text-[#6C6C6C]">Password</label>
                <input onChange={(e)=>loginHandleChange(e)} type="password" name="password" className="border border-gray-300 text-gray-900 sm:text-sm rounded-[4px] h-[44px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-[#CDCDCD] placeholder:text-[12px]" placeholder="Enter your password" />
              </div>
          
              <button onClick={(e)=>loginHandleSubmit(e)} type="submit" className="w-full text-white bg-[#FEAF00] hover:bg-primary-700 focus:ring-4 uppercase focus:outline-none focus:ring-primary-300 font-medium rounded-[4px] text-[14px] px-5 py-[12px] text-center">Sign in</button>
             
              <p className="text-sm font-light text-gray-500 text-center">
                Don’t have an account yet? <button onClick={()=>navigate('/register')} className="font-medium text-primary-600 hover:underline">Sign up</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login