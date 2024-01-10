import React from 'react'

export default function Footer() {
  return (
    <>
<footer className="bg-black border-t-[10px] border-[#282828] p-20 pl-36 phone:pl-16 ">
    <p className='text-white underline'>Questions? Call 000-800-919-1694</p>
    <div className='grid grid-cols-4 my-6 font-medium '>
        <div>
            <ul className=' space-y-3'>
                <li className='underline text-white opacity-70'>FAQ</li>
                <li className='underline text-white opacity-70'>Investor relation</li>
                <li className='underline text-white opacity-70'>Privacy</li>
                <li className='underline text-white opacity-70'>Speed Test</li>
                <li className='underline text-white opacity-70'>
                <select name="lang" id="lang" className='bg-transparent text-white opacity-70 border-2 w-28 rounded-md
                                 border-white text-md font-semibold p-2'>
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
                <li className='underline text-white opacity-70'>Help center</li>
                <li className='underline text-white opacity-70'>Job</li>
                <li className='underline text-white opacity-70'>Cookie Preference</li>
                <li className='underline text-white opacity-70'>Legal Notices</li>
            </ul>
        </div>
        <div>
        <ul className='space-y-3'>
                <li className='underline text-white opacity-70'>Account</li>
                <li className='underline text-white opacity-70'>Ways to Watch</li>
                <li className='underline text-white opacity-70'>Corporate Information</li>
                <li className='underline text-white opacity-70'>Only on Netflix</li>
            </ul>
        </div>
        <div>
        <ul className='space-y-3'>
                <li className='underline text-white opacity-70'>Media center</li>
                <li className='underline text-white opacity-70'>Terms of Use</li>
                <li className='underline text-white opacity-70'>Contact Us</li>
              
            </ul>
        </div>
    </div>
  </footer>
</>
  )
}
