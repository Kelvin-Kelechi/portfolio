import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 mb-6 font-serif'> 
         <form method='POST' action="https://getform.io/f/9b749c8f-f983-4b6b-9622-ff4e506db74a"className='flex flex-col max-w-[600px] w-full'>
             <div className='pb-8'>
                 <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>
                     Contact
                 </p>
                 </div>
                 <p className=' text-[#8892b0] py-4'>// Submit the form below or shoot me as an email-ogkelvin99@gmail.com</p>
                 <input className='bg-[#ccdef6] p-2' type="text" name="text" placeholder='Name' />
                 <input className='bg-[#ccdef6] my-4 p-2' type="email" name="email" placeholder='Email' />
                 <textarea className='bg-[#ccdef6] p-2' name="message"  placeholder='Message'  rows="10"></textarea>
                 <button className='text-white border-2 font-serif rounded-md border-orange-500 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 mx-auto flex items-center my-8'>
                   Let's Collaborate</button>
         </form>
    </div>
  )
}

export default Contact