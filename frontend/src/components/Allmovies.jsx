import React, { useContext } from 'react'
import { useRef ,useState } from 'react';

import Moviecomponent from './Moviecomponent';
import Moviecon from '../contextapi/Moviecontext';
import { useNavigate } from 'react-router-dom';


export default function Allmovies(props) {
    const context=useContext(Moviecon)
    const navigate = useNavigate();
    const{response}=context
    const handleclick = async (c) => {
     const dataToPass =await {
        imdbid: c,
    };
        navigate('/page', { state: { data: dataToPass } })
    }
    
    const containerRef = useRef(null);
    const [prevX, setPrevX] = useState(null);
  
    const handleMouseMove = (e) => {
      if (prevX !== null) {
        const deltaX = e.clientX - prevX;
        containerRef.current.scrollLeft += deltaX;
      }
      setPrevX(e.clientX);
    };
  
    const handleMouseLeave = () => {
      setPrevX(null);
    };
  
  return (
    <> 
     
     <div
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
     
    >
      <div className="inline-flex space-x-3 md:space-x-6">
        {
            response.map((element,i)=>(
              
                <div className='flex-shrink-0 hover:visible'  key={i}>
                    <img src={element.image} onClick={()=>{
                      handleclick(element.imdbid)}} className='md:h-40  md:w-60 h-28 w-28 shadow-md shadow-orange-100
                       rounded-md hover:opacity-90 opacity-100 hover:shadow-lg hover:shadow-white
                      cursor-pointer'/>
                      <div className='h-20 w-28 md:w-60 text-center  py-3 font-light '>
                        <p className='text-white text-xs'>{element.title}</p>
                        </div>
                </div>
            ))
        }
      </div>
    </div>
    
    <div className='mt-1 mb-4'>
        <h1 className='font-extrabold text-white text-2xl my-5'>TOP THRILLERS</h1>
        <div className=' grid grid-cols-2 lg:grid-cols-4 justify-around space-y-4 items-baseline'>
        {
            response.map((element,i)=>(
               <Moviecomponent key={i} image={element.image} description={element.description}
                rating={element.rating} title={element.title} year={element.year} imdbid={element.imdbid}/>
                
            ))
        }
        </div>
    </div>

    <div className='mt-16 mb-4'>
        <h1 className='font-extrabold text-white text-2xl my-5'>TOP-15 OF NETFLIX</h1>
        <div className=' grid grid-cols-2 lg:grid-cols-4 justify-around space-y-4 items-baseline '>
        {
            response.map((element,i)=>(
               <Moviecomponent key={i} title={element.title} image={element.image} 
               description={element.description} imdbid={element.imdbid} rating={element.rating} 
               year={element.year}/>
                
            ))
        }
        </div>
    </div>
    
    </>
  )
}
