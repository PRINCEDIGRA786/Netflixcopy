import React, { useEffect, useState } from 'react'
import { IoMdCheckmark } from 'react-icons/io';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdTabletLandscape } from "react-icons/io";
import { GrDesktop } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Signupplan() {
    const [log, setlog] = useState({ "email": "", "password": "" })
    const [activeItem, setActiveItem] = useState("basic");
    const navigate = useNavigate();
    const [plan, setplan] = useState('free')
    const location = useLocation();
    const handleClick = async (e) => {
        e.preventDefault()
        const response = await fetch("https://netflixcopy-eight.vercel.app/api/auth/createuser", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email": log.email, "password": log.password, "access": plan })
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            alert("Account created successfully and logged-in....", "success");
            localStorage.setItem('token', json.authtoken)
            navigate('/main')
        }
        else {
            if (log.email == "" || log.password == "") {
                alert("No field can be empty please enter correct ceredentials")
            }
            else {
                alert(json.error)
            }
        }
    }
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    // gettting the email and password from the signup page
    useEffect(() => {
        const passedData = location.state ? location.state.data : null;
        // console.log("The data passed is", passedData)
        setlog({ "email": passedData.email, "password": passedData.password });

    }, [])
    const onclick = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <>
            <div >
                <div className='flex justify-between border-b-[2px] border-slate-100'>
                    <div className='float-left ml-4'>
                        <NavLink to='/'>

                            <img className=' h-20 w-40 ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAilBMVEX////lCRTkAAD2vr/74+TlAAz41NXnNjrxmZrqX2L519jlABD3xsfoQEXlDxj98/Tzqar1t7j87e3tc3XvhojwkZP4zM3ypKXyoKL++Pj0srTsa273ycrrZGfxmpzteHv86OnnLDHmHybqUVXoPEHpSEznMzjugILqWVzmGCD0tLXrYmXpT1Pvi40NUIPLAAAGeUlEQVR4nO2c6XbqLBSGIxrrcahxiPPUqrU9X73/2/taY2AzJEVI24PrfX51UYSdR5JsCDGKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqhP6hfaUrlvHgw5GXdejGTrEqzpMpnY3OlUwONrKXF4MrfXWHwbbX7KGqIhuQDGpIoXGU1GEcqF8Wiz2dWzD6rsiyp8klmvllWZaoG0C0MPlW7l45HPqCTKH91l1W7wqRvwlT8ENeKyAMYscIql2qZrHZJLZaoARTLauWV2B9e9i4+WDcekHKgjrK2dyGrLj64J1WnvDh+cHVFZHWkYRusrIh1lN4uPIpS50sWkSUP23BljcUnW7ywWzAm3GWRHgOWRc6VGi88mgz6yKqx+T3IImGylX6UrF+RrOQuZC3ER9fXoq0oGrm7kmTFPVtZnVhByOJFpF1RTZOlNhT7y6JZQnauzElJoyJZNbazk9V56ikcrl/Y+JCXHPntJ37h1Z5UWbHaUO/lr7csMbyvGe6G9OfhSpElLn6lstjComV+s+ZXDo6QVXxr8pDVFG6eLwWxyBvqxoYskWTFb4ZYTbISU1MKQpYW4DfLip7FJb4d0TyV3B9dkGRlbSuxBihrJk9LDsLdzCLwYhRZJz3WAGX1yQVdup3Q5MgBWZZIb4OWFa3FpxfRsmD6ezuyLBFZ2LJW4hJ/oJmET94Q6bLyNC5sWfT+R0bZ3tiKPYosflYHLqtFhlPNoiU7NFkLNdYgZQ0NEyqSGDmiyspT3MBlRXvdllXUpaiy8rlu6LLqBlkWQZejy9oosYYpiyyY5nXGFkGXo8m6TqeClzXWRsHOIuhyNFnXKU+5rO3gb5Ik0+l080HLnL1YyarJj8FIHV9Z2p1Lr3IzBlljOVbTepZ8iOaZvJ0suWtSx1cWmRFmVSZ6lVvRZWVTnhtWSguO5rdlLaRO4idbIyXosrLowpcVSZ1YLcF9BZHFr0jL6C5kbUkvPg/ABEJW3OO25nchi/bCUmsjJZDH9wnvenEXsqInES99OO0OkcWXzNjxPmSdRBvOG2ckiCyxSvbxPdyBrDkzt+wOkTXnGwLY7AtZcWV51rclpXTjTEU3Q+k05POpj6SkVFZ8HI2229P4fD6naTpuG1u2m+7M530CqeMv65HMDj32GREkWfxmy4x73FyfG/7K3JBsnMmOyCLkr5BkTXjnafATabJx5lLDf81BkcXPw86zWMMOVJYyNakkK5Vl8XUNcbqHKkvdz+Ox4Y8jyzLc0wOVNVePhL1bxPwFsqzoTUulApW10b72Shf/LrJSvY8wZcXqqnIV00NFlmEtMEhZhucVFVziFVl08hmyrINhZub9jFWTNdMujCHKovMp8Zf3KrwqS3uUG6QsunGGrNN4bFS+oMqKesoADlEW3Z81JAs1flvZDLISZWj9vqzixzJFsshkbU93+/pudtBkqdmcjaz+sK2vPFQlKz78tzydW9NFvdtsDKWte0WyyOs7K3rPcn8fLEOTFb3Ktoyypv1Gs7uYpdvl/uHxshKl58dVyVIWzxh740+1CmQt5LEkzhWvNwYik6zB17Lokl2W/RnWbSuTpdCJ+YcKZJGh9HkK0FcGqtpTyu8VFrI0flAW+ZBZVpMpNcm90W/XkUHWWoozPFl/ROvZItZEnJYvt/qRMMjqhi2LZIr53Jm8mWleArfEICsKW9ZZNJ6XiiUIsdHfBZMs+tw7PFkkb8gztKF6FXPEJGtSjaz480U746My8lMFhYFpO/csZYlEgWycEemQ14KpSZYUqLMsxh6fH47vr+ullgoO+S9cFD8mUn/uQaQp5bLIS06icXEZjo+32FEwyqJbDAtkdeRU8c0z3SugP9y126v6IJml49F6f3iTh6NBlni3Qlq/Iufmzj0co6y2WdYLtdN7HY1byWClTkG+m/mwwSeLGx4OH9hiS7e0Mkqu+mf3vo2y6MNcIuvQW5/SpD5pVLIlpRLmw/aknqTb3MDnr6tcx7+0cWZnHnA3YpaVMnGaeWUmP83kPNo/ZXGvpX8cxaXMfcHULOvjC+otx9N6c+fc8G8yb0wGyh5qMeP12H6Uy+ow73XEfxtyM3U+0PwnlB73ox+9Tv84q9b2vZMd68a1jUZnfV5MdhVG9U/TWCXj1yp2eQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACh8T9XtWgpN2qsIAAAAABJRU5ErkJggg==' />
                        </NavLink>

                    </div>
                    <div className='float-right'>
                        <p className=' text-xl hover:underline pt-8 px-20 font-semibold cursor-pointer' onClick={onclick}>Sign out</p>
                    </div>
                </div>
                <div className='ml-40'>
                    <p className=' text-sm my-4'>STEP 1 OF 3</p>
                    <h1 className=' text-3xl font-extrabold'>Choose the plan that’s right for you</h1>
                </div>
                <div>
                    <div className=' flex my-3 '>
                        <div className=' ml-[160px]'>
                            <IoMdCheckmark className='  text-red-500 h-8 w-8 ' />
                        </div>
                        <p className=' text-lg font-semibold pt-1 px-4'>Watch all you want. Ad-free.</p>
                    </div>
                    <div className=' flex my-3 '>
                        <div className=' ml-[160px]'>
                            <IoMdCheckmark className='  text-red-500 h-8 w-8 ' />
                        </div>
                        <p className=' text-lg font-semibold pt-1 px-4'>Recommendations just for you.</p>
                    </div>
                    <div className=' flex my-3 '>
                        <div className=' ml-[160px]'>
                            <IoMdCheckmark className='  text-red-500 h-8 w-8 ' />
                        </div>
                        <p className=' text-lg font-semibold pt-1 px-4'>Change or cancel your plan anytime.</p>
                    </div>
                </div>

                {/* four boxes */}
                <div className='flex space-x-2 ml-12 lg:ml-[40%] sm:space-x-10 '>
                    <div
                        className={`${activeItem === 'mobile' ? 'bg-red-700' : 'bg-red-500'
                            } first sm:h-28 h-20 hover:cursor-pointer text-xs sm:text-sm hover:bg-red-600  
                    w-28  text-white pt-7 text-center font-extrabold `}
                        onClick={() => {
                            handleItemClick('mobile');
                            setplan('mobile')
                        }}
                    >Mobile</div>
                    <div
                        className={`${activeItem === 'basic' ? 'bg-red-700' : 'bg-red-500'
                            } first sm:h-28 h-20 hover:cursor-pointer text-xs sm:text-sm hover:bg-red-600  
                w-28  text-white pt-7 text-center font-extrabold `}
                        onClick={() => {
                            handleItemClick('basic');
                            setplan('basic')
                        }}
                    >Basic</div>
                    <div
                        className={`${activeItem === 'standard' ? 'bg-red-700' : 'bg-red-500'
                            } first sm:h-28 h-20 hover:cursor-pointer text-xs sm:text-sm hover:bg-red-600  
                    w-28  text-white pt-7 text-center font-extrabold `}
                        onClick={() => {
                            handleItemClick('standard');
                            setplan('standard')
                        }}
                    >Standard</div>
                    <div
                        className={`${activeItem === 'premium' ? 'bg-red-700' : 'bg-red-500'
                            } first sm:h-28 h-20 hover:cursor-pointer text-xs sm:text-sm hover:bg-red-600  
                    w-28  text-white pt-7 text-center font-extrabold `}
                        onClick={() => {
                            handleItemClick('premium');
                            setplan('premium')
                        }}
                    >Premium</div>
                    <div
                        className={`${activeItem === 'free' ? 'bg-red-700' : 'bg-red-500'
                            } first sm:h-28 h-20 hover:cursor-pointer text-xs sm:text-sm hover:bg-red-600  
                    w-28  text-white pt-7 text-center font-extrabold `}
                        onClick={() => {
                            handleItemClick('free');
                            setplan('free')
                        }}
                    >Free</div>
                </div>
                <div className='hidden lg:block'>

                    <div className='flex'>
                        <div className='sm:ml-52 pt-5 text-md
                         text-[#383838] font-medium'> Monthly Price</div>
                        <div className=' space-x-16 sm:space-x-28 
                        p-7 sm:ml-[17%]'>
                            <span className={`${activeItem === 'mobile' ? 'text-red-600' : 'text-black'
                                }`}>₹149</span>
                            <span className={`${activeItem === 'basic' ? 'text-red-600' : 'text-black'
                                }`}>₹199</span>
                            <span className={`${activeItem === 'standard' ? 'text-red-600' : 'text-black'
                                }`}>₹499</span>
                            <span className={`${activeItem === 'premium' ? 'text-red-600' : 'text-black'
                                }`}>₹649</span>
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='ml-52 pt-5 text-md text-[#383838] font-medium'> Video Quality</div>
                        <div className=' space-x-28 p-7 ml-[17%]'>
                            <span className={`${activeItem === 'mobile' ? 'text-red-600' : 'text-black'
                                }`}>Good</span>
                            <span className={`${activeItem === 'basic' ? 'text-red-600' : 'text-black'
                                }`}>Good</span>
                            <span className={`${activeItem === 'standard' ? 'text-red-600' : 'text-black'
                                }`}>Better</span>
                            <span className={`${activeItem === 'premium' ? 'text-red-600' : 'text-black'
                                }`}>Best</span>
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='ml-52 pt-5 text-md text-[#383838] font-medium'>Resolution</div>
                        <div className=' space-x-28 p-7 ml-[19%]'>
                            <span className={`${activeItem === 'mobile' ? 'text-red-600' : 'text-black'
                                }`} >480p</span>
                            <span className={`${activeItem === 'basic' ? 'text-red-600' : 'text-black'
                                }`}>720p</span>
                            <span className={`${activeItem === 'standard' ? 'text-red-600' : 'text-black'
                                }`}>1080p</span>
                            <span className={`${activeItem === 'premium' ? 'text-red-600' : 'text-black'
                                }`}>4K+HDR</span>
                        </div>

                    </div>

                    <div className='flex'>
                        <div className='ml-52 pt-5 text-md text-[#383838] font-medium'>Device you can use to watch</div>
                        <div className=' space-x-28 p-7 ml-[8.1%] flex flex-row'>
                            <span
                                className={`${activeItem === 'mobile' ? 'text-red-600' : 'text-black'
                                    } flex flex-col space-y-5`}>
                                <div>
                                    <IoPhonePortraitOutline className='h-10 w-10' /><p className='text-xs text-center'>Phone</p>
                                </div>
                                <div>
                                    <IoMdTabletLandscape className='h-10 w-10' /><p className='text-xs text-center'>Tablet</p>
                                </div></span>
                            <span className={`${activeItem === 'basic' ? 'text-red-600' : 'text-black'
                                } flex flex-col space-y-5`}>
                                <div>
                                    <IoPhonePortraitOutline className='h-10 w-10' /><p className='text-xs text-center'>Phone</p>
                                </div>
                                <div>
                                    <IoMdTabletLandscape className='h-10 w-10' /><p className='text-xs text-center'>Tablet</p>
                                </div>
                                <div>
                                    <HiMiniComputerDesktop className='h-10 w-10' /><p className='text-xs text-center'>Computer</p>
                                </div>
                                <div>
                                    <GrDesktop className='h-10 w-10' /><p className='text-center text-xs'>Tv</p>
                                </div>
                            </span>
                            <span className={`${activeItem === 'standard' ? 'text-red-600' : 'text-black'
                                } flex flex-col space-y-5`}>
                                <div>
                                    <IoPhonePortraitOutline className='h-10 w-10' /><p className='text-xs text-center'>Phone</p>
                                </div>
                                <div>
                                    <IoMdTabletLandscape className='h-10 w-10' /><p className='text-xs text-center'>Tablet</p>
                                </div>
                                <div>
                                    <HiMiniComputerDesktop className='h-10 w-10' /><p className='text-xs text-center'>Computer</p>
                                </div>
                                <div>
                                    <GrDesktop className='h-10 w-10' /><p className='text-center text-xs'>Tv</p>
                                </div>
                            </span>
                            <span className={`${activeItem === 'premium' ? 'text-red-600' : 'text-black'
                                } flex flex-col space-y-5`}>
                                <div>
                                    <IoPhonePortraitOutline className='h-10 w-10' /><p className='text-xs text-center'>Phone</p>
                                </div>
                                <div>
                                    <IoMdTabletLandscape className='h-10 w-10' /><p className='text-xs text-center'>Tablet</p>
                                </div>
                                <div>
                                    <HiMiniComputerDesktop className='h-10 w-10' /><p className='text-xs text-center'>Computer</p>
                                </div>
                                <div>
                                    <GrDesktop className='h-10 w-10' /><p className='text-center text-xs'>Tv</p>
                                </div>
                            </span>
                        </div>

                    </div>
                </div>

                <div className='mx-auto text-center text-[#383838] text-sm p-10 px-32'>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                    Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                </div>
                <div className='text-center mt-16'>
                    <button className='p-3 bg-red-600 text-2xl 
            mx-auto font-semibold text-white w-96'  onClick={handleClick}>Next</button>
                </div>
            </div>


            <footer className=" bg-slate-100 p-20 pl-36 phone:pl-16 h-80 mt-40">
                <p className='text-[#282828] '>Questions? Call 000-800-919-1694</p>
                <div className='grid grid-cols-2 md:grid-cols-4 py-6 font-medium '>
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
