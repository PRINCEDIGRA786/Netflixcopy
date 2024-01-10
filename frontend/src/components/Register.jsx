import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    <>
    <div className=' '>
        <div className='flex justify-between border-b-[2px] border-slate-100'>
            <div className='float-left ml-4'>
              <NavLink to='/'>

                <img className=' h-20 w-40 ' src='data:image/png;base64,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'/>
              </NavLink>

            </div>
            <div className='float-right'>
                <p className=' text-xl hover:underline pt-8 px-20 font-semibold'>Sign in</p>
            </div>
        </div>
        <div >
            <div className='mx-auto'>
              <img className=' h-40 w-40 mx-auto'
              src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTqdRYGwDZEfcEfxhQS4-mUWpfYs1J04akuJeZsRAQ7JgGlhy3U' />
            </div>
           
            <div className=' w-96 text-center mx-auto my-2'>
            <p className='block text-md font-medium'>STEP 1 OF 3</p>
          <h1 className='font-extrabold text-3xl'>
            Finish setting up your account
            </h1>
        <p className='p-4 font-semibold text-lg'>
          Netflix is personalised for you. Create a password to watch on any device at any time.
          </p>
            </div>

          <div className='text-center'>
            <a href='/signup'>
            <button  className='p-3 bg-red-600 text-2xl 
            mx-auto font-semibold text-white w-72'>Next</button>

            </a>
          </div>
        </div>
    </div>
    <footer class=" bg-slate-100 p-20 pl-36 phone:pl-16 h-80 mt-40">
    <p className='text-[#282828] underline'>Questions? Call 000-800-919-1694</p>
    <div className='grid grid-cols-4 my-6 font-medium '>
        <div>
            <ul className=' space-y-3'>
                <li className='hover:underline text-[#282828] opacity-70'>FAQ</li>
                <li className='hover:underline text-[#282828] opacity-70'>Privacy</li>
                <li className='hover:underline text-[#282828] opacity-70'>
                <select name="lang" id="lang" className='bg-transparent text-[#282828] opacity-70 border-2 w-28 rounded-md
                                 border-[#282828] text-md font-semibold p-2'>
                                    <option value="english" className='text-black'>English</option>
                                    <option value="hindi" className='text-black'>Hindi</option>
                                </select>
                </li>
                <li className=' text-white opacity-70'>Netflix India</li>
                <li></li>
            </ul>
        </div>
        <div>
            <ul className='space-y-3'>
                <li className='hover:underline text-[#282828] opacity-70'>Help center</li>
                <li className='hover:underline text-[#282828] opacity-70'>Cookie Preference</li>
            </ul>
        </div>
        <div>
        <ul className='space-y-3'>
                <li className='hover:underline text-[#282828] opacity-70'>Corporate Information</li>
                <li className='hover:underline text-[#282828] opacity-70'>Only on Netflix</li>
            </ul>
        </div>
        <div>
        <ul className='space-y-3'>
                <li className='hover:underline text-[#282828] opacity-70'>Terms of Use</li>
              
            </ul>
        </div>
    </div>
  </footer>
      
    </>
  )
}
