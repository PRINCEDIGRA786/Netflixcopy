import React, { useEffect, useState } from 'react'

import axios from 'axios';
import response from '../data.json'
import Allmovies from './Allmovies';
import Footer from './Footer'

import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
export default function Main() {
  const navigate=useNavigate()
 
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      alert("Please Sign-In first");
      navigate('/signup')
    }
  },[])
  return (
    <>
    <Navbar name='home'/>
      <div className='fullpage bg-black'>

      <div>

      </div>
      <div className='px-12 py-12 '>

      <Allmovies />
      </div>
       
      </div>
      <Footer/>
    </>
  )
}
