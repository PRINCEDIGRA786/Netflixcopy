import React from 'react'
import { useState } from 'react';
import {BsChevronDown} from 'react-icons/bs'
import { IoAdd } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function Faqs(props) {
    
    var{question, answer}=props;
    const[tosign,settosign]=useState(
        {
          'display':'block'
        }
      )
    const[faqstate,setfaqstate]=useState(
        {
          'display':'none',
        }
      );
      const faqclick=()=>{
        if(faqstate.display=='none'){
          setfaqstate({
            'display':'block'
          })
          settosign({
            'display':'none'}
          )
        }
        else{
          setfaqstate({
            'display':'none'
          })
          settosign({
            'transform':'block'}
          )
        }
    
    
      }
  return (
    <>
       <div className=' shadow-md bg-[#282828] 
      text-slate-100 hover:text-white mx-[12%] '>
        <span className='flex justify-between duration-500 text-2xl p-5 h-20  bg-[#282828] hover:bg-[#404040] '>
          <div>
        <h1 className='pl-2 justify-start'>{question}</h1>
          </div>

        <div onClick={faqclick} className=' delay-1000'>
        <p className='h-7 w-7 font-bold sign pt-1 mr-5' >
            <IoAdd className='h-10 w-10 font-extrabold' style={tosign}/>
            <IoCloseSharp className='h-10 w-10 font-extrabold' style={faqstate}/>
            
            </p>
        </div>

        </span>
        <span className=' delay-1000'>
      <p style={faqstate} className='p-7 text-2xl  font-semibold leading-loose'>
      {answer}
      </p>

        </span>
      </div>

    </>
  )
}
