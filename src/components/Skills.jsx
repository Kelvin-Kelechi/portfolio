import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import react from '../assets/react.png' 
import Tailwind from '../assets/tailwind.png'
import Firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div name='skills'  className='bg-[#0a192f] text-gray-300 w-full h-screen font-serif'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-centerw w-full h-full'>
            <div>
                <p className='text-4xl   font-bold inline border-b-4 border-orange-600'>Skills</p>
                <p className='py-4 text-[#8892b0]'>// These are the technogies I've worked with</p>
            </div>
             <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Html} alt="" />
                   <p className='my-4'>HTML</p>
                 </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Css} alt="" />
                   <p className='my-4'>CSS</p>
                 </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Javascript} alt="" />
                   <p className='my-4'>JAVASCRIPT</p>
                 </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={react} alt="" />
                   <p className='my-4'>REACT</p>
                 </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Tailwind} alt="" />
                   <p className='my-4'>TAILWIND CSS</p>
                 </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Firebase} alt="" />
                   <p className='my-4'>FIREBASE</p>
                 </div>
                 
             </div>
        </div>

    </div>
  )
}

export default Skills