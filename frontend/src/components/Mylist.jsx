import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Moviecon from '../contextapi/Moviecontext'
import { FaStar } from 'react-icons/fa'
import { IoTrashBin } from "react-icons/io5";

export default function Mylist() {
    const context=useContext(Moviecon)
    const{list,delList,getList}=context
    useEffect(()=>{
        getList();
    })
  return (
    <>
    <Navbar name='mylist'/>
    <div className='bg-black h-screen px-3 py-7'>
        <h1 className='text-3xl font-extrabold text-white py-10 px-12'>MY LIST </h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 py-4 
         lg:justify-evenly  '>

        {
            list.map((element,i)=>(
                // <div className=' py-5'>
                //     <img src={element.image} className='h-72 w-60 opacity-100 hover:opacity-90 hover:rounded-lg shadow-lg cursor-pointer hover:shadow-white'/>
                // </div>
                 <div className="relative group cursor-pointer py-5 mx-auto">
                 <img
                   src={element.image}
                   alt="Your Image"
                   className="h-72 w-60 opacity-100  group-hover:rounded-lg shadow-lg cursor-pointer
                    group-hover:shadow-white group-hover:opacity-90 transition-opacity duration-300"
                 />
                 <div className="hidden absolute top-4  bg-black bg-opacity-50
                  group-hover:flex items-center justify-center text-white">
                    <div className='flex'>
                    <div className='flex flex-col-reverse space-x-3 '>
                        <p className='text-white text-center ml-2 text-xl font-extrabold z-50'>
                            {element.rating}
                        </p>
                        <FaStar className=' h-10 w-10 text-yellow-400 pb-2 '>

                        </FaStar>
                      </div> 
                      <p className='text-white overflow-hidden font-extrabold text-lg pt-2 pl-12 px-4'>{element.title}</p>
                    </div>
                    
                 </div>
                 
               <div className='my-4'>
                <IoTrashBin className=' text-red-900 hover:text-red-700 h-7 w-7 mx-auto' 
                onClick={()=>delList(element._id)}/>
                </div>
               </div>
            ))
            
        }

        </div>
      </div>
    </>
  )
}
