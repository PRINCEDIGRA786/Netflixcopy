import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PiSignOutBold } from "react-icons/pi"
import { FaCrown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
export default function Navbar(props) {
    const [activeItem, setActiveItem] = useState(props.name);
    const navigate=useNavigate()
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[access,setaccess]=useState("")
    const handleClick=async()=>{
        const response = await fetch("https://netflixcopy-oas4.vercel.app/api/auth/getuser", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.getItem('token')
                },
            });
            const json=await response.json();
            setusername(json.name)
            setemail(json.email)
            setaccess(json.access)
            // console.log(json.name)
            if(json.access=='none'){
                alert("Please get some package first")
                navigate('/signup/planform')
                
            }
        }

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  useEffect(()=>{
    handleClick();
  },[])
  return (
    <>
    <div className='bg-black'>
    <div className='flex'>
            <div className='flex float-left'>
                <NavLink to='/main'>

            <h1 className='font-extrabold pt-4  text-lg 
            md:text-[40px] md:ml-16 text-[25px] ml-5  phone:text-[15px]
             text-red-500'>NETFLIX</h1>
                </NavLink>
            <div>
                <ul className='flex text-slate-400 font-semibold pt-5 phone:space-x-2
                space-x-4 lg:space-x-8 lg:ml-7 ml-3 text-sm lg:text-md phone:text-xs'>
                <NavLink to='/main'>
                    <li className={`${
                        activeItem === 'home' ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => handleItemClick('home')}>Home</li>
                    </NavLink>
                   <NavLink to='/shows'>
                    <li className={`${
                        activeItem === 'tv shows' ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => handleItemClick('tv shows')} >Shows</li>
                   </NavLink>
                    <li className={`${
                        activeItem === 'movies' ? 'text-white' : 'text-gray-400'
                    } cursor-pointer`}
                    onClick={() => {
                        if(access==='premium'){
                            handleItemClick('movies');
                            navigate('/main');
                        }
                        else{
                            alert("Get the Premium plan only than you can access this")
                        }    
                    }
                } >Movies <p className={`${
                        access ==='premium' ? 'hidden' : 'visible'
                    } `}><FaCrown className=' md:h-5 relative md:bottom-8 bottom-6 left-9
                     md:left-12 h-3 w-3
                     md:w-5 text-purple-900 font-extrabold'/></p></li>
                    <li className={`${
                        activeItem === 'latest' ? 'text-white' : 'text-gray-400'
                    } hidden md:block`}
                    onClick={() => handleItemClick('latest')}>Latest</li>
                    <li className={`${
                        activeItem === 'mylist' ? 'text-white' : 'text-gray-400'
                    } cursor-pointer`}
                    onClick={() => {
                        handleItemClick('mylist');
                        navigate('/mylist')}}>MyList</li>
                </ul>
            </div>
            </div>
            <div className='flex float-right pt-4 ml-4 lg:ml-96 lg:space-x-8 md:space-x-6'>
                <div><FaSearch className='text-white h-5 w-5 hidden md:block'/></div>
                <div><FaGift className='text-white h-5 w-5 hidden md:block'/></div>
                <div><IoMdNotifications className='text-white h-5 w-5 hidden lg:block'/></div>
                <div className='flex space-x-3 phone:space-x-1 group cursor-pointer  duration-500'>
                <FaUserAlt className='text-white h-5 w-5 group-hover:h-7 
                group-hover:w-7 group-hover:bg-[#585858] phone:h-3 phone:w-3
                 hover:rounded-sm '/>
                <p className='text-white text-sm font-extrabold phone:text-xs'>
                    {username}
                </p>
                <div className='bg-[#383838] opacity-90 z-50  w-48 h-60 md:w-80 absolute hidden 
                 group-hover:block 
                right-[5%] top-[10%]'>
                        <div className=' bg-[#181818] z-50 text-center
                         py-4 mx-auto block border-b-4 border-slate-200'>
                           
                            <FaUserAlt className='text-white rounded-full
                             h-10 w-10 mx-auto border-2 border-white '/>
                            <p className='  text-lg font-sans text-center
                             text-white'>{username}</p>
                            <p className='text-center font-semibold 
                            text-lg font-sans text-white '>{email}</p>
                        </div>
                        <div className='py-4 px-5 space-y-6'>
                            <NavLink to='/signup'>
                                <p className='font-semibold text-md text-white'>+ ADD</p>
                            </NavLink>
                            <p className='font-semibold text-md text-white flex space-x-4'
                            onClick={()=>{
                                localStorage.removeItem('token');
                                navigate('/')
                            }}><PiSignOutBold className='text-white h-4 w-4 mr-2 mt-1'/> Sign out</p>
                        </div>
                </div>

                    </div>

            </div>
        </div>
    </div>
      
    </>
  )
}
