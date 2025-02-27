import React from 'react'
import HomeImg from '../../assets/Homepage-Model-Y.avif';
import { Link } from 'react-router-dom';
const Home = () => {
  return (

        <div className='relative w-full h-screen'>
          {/* Background Image */} 
            <img src={HomeImg} className='w-full h-full object-cover transition-transform duration-300 ' alt='Model Y'></img>
            {/* Container for text and Button */}
            <div className='absolute  top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10'>
              <h1 className='mb-8  font-bold text-white text-5xl md:text-8xl '> Model Y</h1> 
                <Link to='/config' className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mb-4  md:py-3.5 md:px-18 md:text-xl '>
                    Order Now 
                </Link>
            </div>
        </div>
  )
}

export default Home;