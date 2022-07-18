import React from 'react'
import Kreact from '../assets/kreact.png'
import Cryto from '../assets/cryto.png'
import Netflix from '../assets/netflix.jpg'
import Defi from '../assets/defi.png'
import Secured from '../assets/secured.png'
import Crypto from '../assets/crypto-ul.png'
import Portfolio from '../assets/portfolio.png'
const Projects = () => {
  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300 md:h-screen font-serif'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>Projects</p>
                <p className='py-6 text-[#8892b0]' >// Check out some of my recent projects</p>
            </div>
            <div  
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
                <div  style={{backgroundImage: `url(${Netflix})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white  tracking-wider text-center'>
                                Netflix UI</p>
                        <p className='text-center font-bold'>React Js</p>
                        <div className='pt-8 text-center'>
                            <a href="https://netgo.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Cryto})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100'>
                    <p className='text-2xl font-bold text-white  tracking-wider text-center'>
                                Crypto UI</p>
                        <p className='text-center font-bold'>React Js</p>
                        <div className='pt-8 text-center'>
                            <a href="https://crypto111.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Defi})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100'>
                    <p className='text-2xl font-bold text-white  tracking-wider text-center'>
                                Defi</p>
                        <p className='text-center font-bold'>React Js</p>
                        <div className='pt-8 text-center'>
                            <a href="https://defi24.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Secured})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100'>
                    <p className='text-2xl font-bold text-white  tracking-wider text-center'>
                                Secured</p>
                        <p className='text-center font-bold'>React Js</p>
                        <div className='pt-8 text-center'>
                            <a href="https://secured1.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Kreact})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100'>
                    <p className='text-2xl font-bold text-white  tracking-wider text-center'>
                                REACT</p>
                        <p className='text-center font-bold'>React Js</p>
                        <div className='pt-8 text-center'>
                            <a href="https://react24.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage: `url(${Crypto})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white  tracking-wider text-center'>
                                Crypto UI 2</p>
                        <p className='text-center font-bold'>React Js</p>
                        <div className='pt-8 text-center'>
                            <a href="https://crypto-ul.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 ml-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects