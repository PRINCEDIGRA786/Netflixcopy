import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [log, setlog] = useState({ "email": "", "password": "" })
    const navigate = useNavigate()
    const dataToPass = {
        email: log.email,
        password: log.password
    };
    const [tosign, settosign] = useState(
        {
            'display': 'block'
        }
    )
    const [faqstate, setfaqstate] = useState(
        {
            'display': 'none',
        }
    );
    const faqclick = () => {
        if (faqstate.display == 'none') {
            setfaqstate({
                'display': 'block'
            })
            settosign({
                'display': 'none'
            }
            )
        }
        else {
            setfaqstate({
                'display': 'none'
            })
            settosign({
                'transform': 'block'
            }
            )
        }


    }
    return (
        <>
            <div className=' '>
                <div className='flex justify-between border-b-[2px] border-slate-100'>
                    <div className='float-left ml-4'>
                        <NavLink to='/'>

                            <img className=' h-20 w-40 ' src='data:image/png;base64,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' />
                        </NavLink>

                    </div>
                    <div className='float-right'>
                        <NavLink to='/login'>
                            <p className=' text-xl hover:underline pt-8 px-4 md:px-20 font-semibold'>Sign in</p>
                        </NavLink>

                    </div>
                </div>

                {/* for hidding */}
                <div className='' style={tosign} >

                    <div className=' sm:w-96 text-center mx-auto my-2'>
                        <p className='block text-md font-medium'>STEP 1 OF 3</p>
                        <p className='p-4 font-bold text-lg sm:text-3xl'>
                            Create a password to start your membership
                        </p>
                        <p className='sm:p-4 font-semibold text-md sm:text-xl'>
                            Just a few more steps and you're done!
                            We hate paperwork, too.

                        </p>
                    </div>
                    <div className='mx-auto text-center space-y-5 my-4'>
                        <input className=' p-2 sm:w-96 border-[1px] h-12 block border-black mx-auto'
                            required placeholder='Email'
                            onChange={((e) => {
                                setlog({
                                    ...log,
                                    email: e.target.value
                                })
                            })}></input>
                        <input className=' p-2 sm:w-96 border-[1px] h-12 border-black mx-auto'
                            required placeholder='Add a Password'
                            onChange={((e) => {
                                setlog({
                                    ...log,
                                    password: e.target.value
                                })
                            })}></input>
                    </div>

                    <div className='text-center'>

                        <button className='p-3 bg-red-600 text-2xl 
            mx-auto font-semibold text-white sm:w-96' onClick={faqclick}>Next</button>

                    </div>
                </div>

                {/* for step 2 of 3 */}

                <div style={faqstate}>
                    <div className='text-center my-3 mt-10'><IoCheckmarkCircleOutline className='mx-auto text-red-500 h-16 w-16' /></div>
                    <div className='text-center'>
                        <p className=' text-sm'>STEP 2 OF 3</p>
                        <h1 className=' text-3xl font-extrabold'>Choose your plan.</h1>
                    </div>
                    <div>
                        <div className='mx-auto flex my-3 '>
                            <div className='ml-[20%] lg:ml-[38%]'>
                                <IoMdCheckmark className='  text-red-500 h-8 w-8 ' />
                            </div>
                            <p className=' text-lg font-semibold pt-1 px-4'>No commitments, cancel anytime.</p>
                        </div>
                        <div className='mx-auto flex my-3 '>
                            <div className='ml-[20%] lg:ml-[38%]'>
                                <IoMdCheckmark className='  text-red-500 h-8 w-8 ' />
                            </div>
                            <p className=' text-lg font-semibold pt-1 px-4'>Everything on Netflix for one low price</p>
                        </div>
                        <div className='mx-auto flex my-3 '>
                            <div className='ml-[20%] lg:ml-[38%]'>
                                <IoMdCheckmark className='  text-red-500 h-8 w-8 ' />
                            </div>
                            <p className=' text-lg font-semibold pt-1 px-4'>No ads and no extra fees. Ever.</p>
                        </div>
                    </div>
                    <div className='text-center mt-16'>

                        <button className='p-3 bg-red-600 text-2xl 
            mx-auto font-semibold text-white sm:w-96' onClick={() => {

                                navigate('/signup/planform', { state: { data: dataToPass } })
                            }}>Next</button>



                    </div>
                </div>

            </div>
            <footer class=" bg-slate-100 p-20 pl-36 phone:pl-16 mt-20 sm:mt-40">
                <p className='text-[#282828] '>Questions? Call 000-800-919-1694</p>
                <div className='grid grid-cols-2 md:grid-cols-4 py-6 font-normal md:font-medium text-xs sm:text-sm '>
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
