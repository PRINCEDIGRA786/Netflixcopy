import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Faqs from './Faqs';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
export default function Home() {
    var faqs = [
        { 'question': 'What is Netflix?', 'answer': " Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want whenever you want without a single ad  all for one low monthly price. There s always something new to discover, and new TV shows and movies are added every week!" },
        { 'question': 'How much does Netflix cost?', 'answer': "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
        { 'question': 'Where can i watch?', 'answer': "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
        { 'question': 'How do i cancel?', 'answer': "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
        { 'question': 'What can i watch on Netflix?', 'answer': "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." }
        , { 'question': "Is Netflix good for kids?", 'answer': "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." }
    ]
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
                                <NavLink to='/login'>

                                    <button className='  bg-red-600 hover:bg-red-700 text-white 
                                font-medium p-2 rounded-md'>Sign-In</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='contentwriten mt-44 phone:mt-24'>
                        <h1 className='text-white font-extrabold text-center  text-[50px] my-2 phone:text-xl'>
                            Unlimited movies, TV shows and more
                        </h1>
                        <h2 className='my-3 text-center font-semibold text-2xl phone:text-lg text-white'>
                            Watch anywhere. Cancel anytime.
                        </h2>
                        <h3 className='my-3 text-center font-semibold text-xl phone:text-md text-white'>
                            Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                        <div className='flex my-4 justify-center'>
                            <div className='text-center'>
                                <input type='email' placeholder='Email address' className=' 
                                 bg-black bg-opacity-50 p-4 w-96 rounded-md text-white border-[1px]
                                  border-slate-200 placeholder:text-white phone:w-52' required>
                                </input></div>
                            <div className=' phone:pt-2'>
                                <button className=' text-2xl font-semibold rounded-md bg-red-500
                                 hover:bg-red-600
                                 p-3 text-white mx-2 w-52 flex pl-4 phone:w-36 phone:text-sm'>

                                    <a href='/signup'>
                                        <div>
                                            Get Started
                                        </div>
                                    </a>
                                    <div className='pt-1 ml-4'>

                                        <MdOutlineArrowForwardIos />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-black flex-col flex sm:flex-row h-[450px] align-middle lg:pl-[20%] md:pl-20 
             border-t-[10px] border-b-[10px] phone:pl-0
             border-[#282828] '>
                <div className=' mt-24 phone:mt-12 w-96 relative phone:text-center phone:mx-auto'>
                    <h1 className=' font-extrabold text-[40px] text-white my-4 phone:text-3xl'>Enjoy on your TV</h1>
                    <h2 className='font-semibold text-2xl phone:text-xl  text-white'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <div className=' pt-10 pl-24 phone:pl-0 lg:pl-4 sm:pl-2  phone:mx-auto'>
                    <img src='https://media0.giphy.com/media/WicGdHbqW2RUgt1MM7/200w.webp?cid=ecf05e47dvip14nxzeg71yvbse5w6hqpe4gtzzh04gzvru6b&ep=v1_gifs_search&rid=200w.webp&ct=g'
                        className='absolute z-10 lg:pt-20  lg:pl-16  lg:h-56 lg:w-80 sm:h-40 sm:pl-10 sm:pt-16 
                        sm:w-40' />
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                        className=' lg:h-80 lg:w-[400px] absolute sm:h-60 sm:w-[200px] phone:h-40 
                        phone:w-[100px]' />
                </div>
            </div>
            <div className='bg-black flex flex-col-reverse sm:flex-row h-[450px] align-middle justify-center  border-b-[10px]
             border-[#282828] '>
                <div className=' pt-10 phone:text-center phone:mx-auto'>
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                        className=' h-80 w-[450px] phone:w-[300px] phone:h-40' />
                </div>
                <div className=' mt-12 w-96 phone:mt-7 phone:text-center phone:mx-auto'>
                    <h1 className=' font-extrabold text-[43px] text-white my-4 phone:my-2 phone:text-[25px]'>Download your shows to watch offline</h1>
                    <h2 className='font-semibold text-2xl phone:text-xl  text-white'>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>

            <div className='bg-black  h-[450px] align-middle justify-center  border-b-[10px]
             border-[#282828] flex flex-col sm:flex-row '>
                <div className=' mt-24 phone:mt-12 w-96 phone:text-center phone:mx-auto'>
                    <h1 className=' font-extrabold text-[40px] text-white my-4 phone:my-2 phone:text-[25px]'>Watch everywhere</h1>
                    <h2 className='font-semibold text-2xl phone:text-xl  text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div className='ml-20 pt-10 phone:mx-auto'>
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'
                        className=' h-80 w-[400px] phone:w-[300px] phone:h-40' />
                </div>
            </div>

            {/* Kids section */}
            <div className='bg-black flex flex-col-reverse sm:flex-row h-[450px] align-middle justify-center  border-b-[10px]
             border-[#282828] '>
                <div className=' pt-10 phone:text-center phone:mx-auto'>
                    <img src='https://occ-0-6503-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'
                        className=' h-80 w-[450px] phone:w-[200px] phone:h-40' />
                </div>
                <div className=' mt-12 phone:mt-8 w-[450px] phone:text-center phone:mx-auto'>
                    <h1 className=' font-extrabold text-[43px] phone:text-[25px] text-white my-4'>Create profiles for kids</h1>
                    <h2 className='font-semibold text-2xl phone:text-xl  text-white'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>

            <div className='pt-2 bg-black'>
                <h2 className='text-center font-extrabold text-[50px] phone:text-[25px] text-white my-6'>Frequnetly Asked Questions</h2>
                <div className='faq px-3 space-y-2 sm:space-y-3 cursor-pointer'>

                    {faqs.map((element, i) => (
                        <Faqs key={i} question={element.question} answer={element.answer}></Faqs>

                    ))}


                </div>

                <div className='text-center mt-8 '>
                    <p className='text-white font-semibold text-xl'>Ready to watch? Enter your email to create or restart your membership</p>
                </div>
                <div className='flex  justify-center py-10'>
                    <div className='text-center'>
                        <input type='email' placeholder='Email address' className=' 
                                 bg-black bg-opacity-50 p-4 w-96 rounded-md text-white border-[1px]
                                  border-slate-200 placeholder:text-white phone:w-52'>
                        </input></div>
                    <div className=' phone:pt-2 '>
                        <button className=' text-2xl font-semibold rounded-md bg-red-500
                                 hover:bg-red-600
                                 p-3 text-white mx-2 w-52 flex pl-4 phone:w-36 phone:text-sm'>
                            <div>
                                Get Started
                            </div>
                            <div className='pt-1 ml-4'>

                                <MdOutlineArrowForwardIos />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
