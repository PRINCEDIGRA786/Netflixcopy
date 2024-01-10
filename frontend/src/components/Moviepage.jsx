import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Moviecon from '../contextapi/Moviecontext';
import { FaSearch } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { FaGift } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Navbar from './Navbar';
// Single movie page that is all about a single movie
export default function Moviepage() {
    const context=useContext(Moviecon)
    const{response}=context;
    const location = useLocation();
    const[tostyle,settostyle]=useState({
      "display":"none"
    })
    const[tostyle1,settostyle1]=useState({
      "display":"block"
    })
    const handleclick=()=>{
      if(tostyle.display=='block'){
        settostyle({
          "display":"none"
        })
        settostyle1({
          "display":"block"
        })
      }
      else{
        settostyle1({
          "display":"none"
        })
        settostyle({
          "display":"block"
        })
      }
    }
    const[obj,setobj]=useState({})
    const[imgs,setimgs]=useState([])
    useEffect(()=>{
      const passedData = location.state ? location.state.data : null;
      console.log(passedData)
      var arr=response.filter((element)=>{
          return element['imdbid']==passedData['imdbid'];
      })
      // console.log("The array is",arr)
      // console.log(passedData['imdbid'])
      var obj1=arr[0];
      setobj(obj1)
      setimgs(obj1.genre)
     

    },[])

  
  return (
    <>
        <div className='fullpage bg-black'>

{/* <div className='flex justify-between'>
    <div className='flex float-left'>
    <h1 className='font-extrabold text-[40px] ml-16 phone:text-[35px] text-red-500'>NETFLIX</h1>
  
    </div>
  
        <div className='flex pt-4 px-4 float-right'><FaUserAlt className='text-white h-5 w-5'/>
        <p className='text-white'>
            Prince
            </p>
            </div>


</div> */}
<Navbar/>

{/* Here is the main body */}
<div className=' flex flex-col lg:flex-row lg:space-x-4'>
    <div>
      <img src={obj.big_image} className='h-[100vh] p-10 w-full lg:w-[47vw]'/>
      <div className='mx-auto text-center
       absolute bottom-[1px] hover:animate-bounce left-28 lg:left-56'>
        <NavLink to={obj.imdb_link} >
      <button className=' text-white md:text-lg
      text-md p-2 font-extrabold md:p-3 bg-green-500
      hover:bg-green-700 rounded-lg '
      >WATCH NOW</button>
      </NavLink>
      </div>

    </div>
    <div className='p-10'>
      <div className='flex'>
      <h1 className='  text-xl lg:text-3xl pl-1 font-extrabold
       text-white'>{obj.title}</h1>
      <div className='flex space-x-1 lg:space-x-3 ml-24 lg:ml-52 pt-4'>
                        <p className='text-white 
                        text-xl font-extrabold z-50'>
                            {obj.rating}
                        </p>
                        <FaStar className=' lg:h-10 lg:w-10
                         text-yellow-400 pb-2 '>

                        </FaStar>
        </div>
      </div>
        <div className=' text-[#484848] font-medium text-lg flex space-x-3 pl-2'>
          <p>{obj.year}</p>
          <p>|</p>
          <p>2h 33min</p>
          <p>|</p>
          <p>16+</p>     
        </div>

        <div className='px-2 py-6'>
          <ul className='flex space-x-4 lg:space-x-9 
          text-[#484848] text-xs sm:text-sm font-extrabold cursor-pointer
           selection:underline '>
            <li onClick={handleclick} >OVERVIEW</li>
            <li onClick={handleclick}>TRAILERS & MORE</li>
            <li >MORE LIKE THIS</li>
            <li >DETAILS</li>
          </ul>
        </div>

        <div className='text-white px-4 font-semibold 
        text-md lg:w-[500px] ' style={tostyle1}>
          <p>{obj.description}</p>
        </div>
        <div style={tostyle}  className='ml-9'>
        <img src={obj.image} className=' h-60 w-96' controls  />

        </div>
        <div className='flex text-[#585858] space-x-8 py-3 px-4'>
          <h1>Genre</h1>
          <div className=' text-white space-x-4 flex font-extralight text-sm pt-1'>
          {
            imgs.map((e)=>(
                <h1>{e}</h1>
            ))
          }
          </div>
        </div>

        <div className='py-3 px-4'>
          <h1 className='text-white font-extrabold text-lg'>
            Some Other Views:
          </h1>
          <div className='flex space-x-10 overflow-x-auto'>
            <img src={obj.thumbnail} className=' h-40 w-40'/>
            <img src={obj.image} className='h-40 w-40'/>
          </div>
        </div>

    </div>
</div>
</div>
    </>
  )
}
