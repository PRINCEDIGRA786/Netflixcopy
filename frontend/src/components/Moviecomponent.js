import React, { useContext, useEffect } from 'react'
import { FaStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";
import Moviecon from '../contextapi/Moviecontext';
import { useState } from 'react';
export default function Moviecomponent(props) {
    const element = props
    const [list, setlist] = useState({ title: "", description: "", image: "" })
    const navigate = useNavigate();
    const context = useContext(Moviecon);
    const { addList } = context
    const dataToPass = {
        imdbid: element.imdbid,
    };
    const addclick = () => {
        // console.log(list)
        addList(list.title, list.description, list.image);
        alert("The list is added successfully....", 'success')
        setlist({ title: "", description: "", image: "" })

    }
    const handleclick = () => {
        navigate('/page', { state: { data: dataToPass } })
    }
    useEffect(() => {
        setlist({ title: props.title, description: props.description, image: props.image })
    }, [])
    return (
        <>
            <div className=' relative flex-shrink-0 group '>

                <img src={element.image} className='md:h-40 md:w-60 h-32 w-40 shadow-md shadow-orange-100 
                 rounded-md cursor-pointer hover:opacity-90 opacity-100' onClick={handleclick} />
                {/* For add to list */}
                <div className="hidden absolute top-4 left-[70%] bg-black bg-opacity-50
                  group-hover:flex items-center justify-center text-white">
                    <div className='flex-col'>
                        <IoAddCircle className='text-white h-8 w-8 cursor-pointer' onClick={addclick} />
                        <p className='text-xs text-white transform rotate-90 font-extrabold pt-12 pl-4'>Add to list</p>
                    </div>

                </div>

                <p className='p-3 pb-1 text-green-600 text-lg font-semibold'>{element.title}</p>
                <div className='flex text-white space-x-3 
                font-light text-xs p-1'>
                    <p>{element.year}</p>
                    <div className='flex space-x-1'>
                        <FaStar className=' h-5 w-5 text-yellow-400 pb-2 '>

                        </FaStar>
                        <p className='text-red-400 z-50'>
                            {element.rating}
                        </p>
                    </div>
                </div>
                <div className='p-2 w-60 hidden md:block'>
                    <p className=' font-light text-sm
                     font-mono text-slate-300'>{element.description}</p>
                </div>
            </div>
        </>
    )
}
