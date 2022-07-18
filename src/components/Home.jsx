import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll'
import Typed from 'react-typed'
const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center font-serif'>
            <p className='text-orange-500'>Hi, my name is</p>
            <Typed 
            className='text-4xl sm:text-7xl font-bold text-[#ffff]'
            strings={['Anyigor Kelvin','You are welcome']}
            typeSpeed={50}
            backSpeed={70}
            loop
            />
            <h2 className='text-3xl sm:text-6xl font-bold text-[#c1c4ce]'>I'm a Front-End Developer</h2>
            <h3 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>Based in Nigeria</h3>
            <p className='text-[#8892b0] py-8 max-w-[500px]'>I'm a front-end developer specializing in building exceptional digital experiences. currently, I'm focused
                 on building  reponsive front-end web applications while learning back-end technologies </p>
                 <div>
                 
                     <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md border-orange-500 font-serif hover:bg-orange-600'>
                        <Link to="work" smooth={true} duration={500} >
                        View Projects
                        </Link>
                          
                         <span className='group-hover:rotate-90 duration-300'>
                         <HiArrowNarrowRight className='ml-3' />
                         </span>
                         
                     </button>
                 </div>
        </div>

        
    </div>
  )
}

export default Home