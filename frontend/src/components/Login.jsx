import React from 'react'
import Footer from './Footer'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate=useNavigate()
    const[log,setlog]=useState({"email":"","password":""})
    const handleClick=async(e)=>{
      e.preventDefault()
      // console.log("values dekhi",log.email,log.password)
      const response = await fetch("http://localhost:5000/api/auth/login", {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ "email":log.email,"password":log.password})
          });
          const json=await response.json();
          console.log(json)
          if(json.success){
              //Redirect
              localStorage.setItem('token',json.authtoken)
              alert("LOGGED-IN SUCCESSFULLY","success")
              navigate('/main')
          }
          else{
              alert("Try LOGIN using correct ceredentials please....INVALID CEREDENTIALS","danger")
          }
      }
  return (
    <>
       <div id='forwholepage'>
                <div className='h-screen phone:h-[440px] 
                bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg)]
                 justify-between brightness-75 contrast-150'>
                    <div className='flex space-y-5 justify-around z-50'>
                        <div className=' z-50 '>
                            <h1 className='font-extrabold text-[60px] phone:text-[35px] text-red-500'>NETFLIX</h1>
                        </div>
                        <div className='flex  mt-4 phone:mt-0 z-50 '>
                            <div className=' mt-4 phone:mt-0 mx-2'>
                                <select name="lang" id="lang" className='bg-transparent text-white border-2 w-28 rounded-md
                                 border-white text-md font-semibold p-2'>
                                    <option value="english" className='text-black'>English</option>
                                    <option value="hindi" className='text-black'>Hindi</option>
                                </select>
                            </div>
                            <div className='mt-5 phone:mt-0 mx-2'>
                                <button className='  bg-red-600 hover:bg-red-700 text-white font-medium p-2 rounded-md'>Sign-In</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* page for loginn */}
                <div>
                <div className='sigbox mt-4 md:mt-8  border-white h-[60vh] w-[75vw] rounded-md mx-auto
        sm:h-[400px] sm:w-[400px] bg-gradient-to-b from-[#110e16ba] to-black opacity-90 '>
            <h1 className='ml-8 text-white my-3  font-Mono text-2xl sm:text-3xl'>Sign In</h1>
            <div className='p-4 sm:space-y-6'>
              <div className='inp1'>
         <input  className='block bg-[#808080] w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white 
                h-12 md:w-[90%] mt-3 md:ml-2 placeholder:text-sm placeholder:font-medium ' type='text' placeholder='Email or Phone number' 
                onChange={((e)=>{
                    setlog({
                        ...log,
                        email:e.target.value
                    })
                })}
                ></input>
                </div>
          <div className='inp2 my-5'>
   
         <input type='password' className='block bg-[#808080] w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-12 md:w-[90%] mt-3 
                placeholder:text-sm placeholder:font-medium
                md:ml-2' placeholder='Password' onChange={((e)=>{
                    setlog({
                        ...log,
                        password:e.target.value
            })
        })}></input>
          </div>
         <div className='my-6 text-center sm:pt-6' id='createbtn'>
          <button type="submit" className='bg-red-600 hover:bg-red-800  p-2 rounded-md w-[88%] h-12 text-white'
           
           
           onClick={handleClick}
           ><b>Sign in</b></button>
            </div>
          </div>
          <div className='flex ml-16'>
            <p className='text-center text-[#808080] font-bold'>New to Netflix?</p>
            <NavLink to='/signup' className='text-white'>Signup Now</NavLink>
          </div>
          <div className='my-2'>
            <p className='text-center font-medium text-xs sm:text-sm text-slate-100'>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot</p>
          </div>
        </div>
                </div>
           
           </div>
            <Footer />
            </div>
    </>
  )
}
