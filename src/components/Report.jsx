import React from 'react'
import {  TextareaAutosize } from '@mui/material'
import { AiOutlineMail } from 'react-icons/ai'
import { useStateContext } from './context/ContextProvider'
import { BsPhone } from 'react-icons/bs'



const Report = () => {
    const { currentColor} =useStateContext()
  return (
    <div> 
      
          <div className='md:mt-16 mt-28 md:p-20 p-4'>
      <div className='flex justify-center'>
        <h1 className='uppercase font-semibold text-2xl dark:text-white'>Report Isues</h1>
      </div>

      {/* EMAIL SECTION */}
      <form action="">

           <div className='w-full h-full '>
    
         
          <TextareaAutosize
          style={{border:'1px solid',borderColor:'purple',height:'40vh'}}
          className='p-4 w-full mt-10 rounded-lg  flex dark:bg-gray-900 dark:text-white  '
          placeholder='Type your issue here  '
          required
          />
       
      </div>
      <div>
        <button style={{background:currentColor}} type='submit' 
        className='md:p-4 p-3 flex mt-10 rounded-lg text-white text-xl hover:drop-shadow-2xl w-32
        justify-center items-center ml-auto shadow-xl'>
          Send
        </button>
      </div>   
      </form>
      {/* use email */}
      <div>
       <h1 className='text-2xl font-semibold flex justify-center mt-16'>Report Via Mail</h1>
       <a href="mailto:moneywave@gmail.com">
        <p className='flex items-center gap-10 justify-center mt-10 '>
          <a href='mailto:qunicykaranga28@gmail.com'>
          <div className='flex gap-4 border-2 p-2 shadow-lg rounded-xl ' style={{background:currentColor}}
          >
              <AiOutlineMail size={40}  style={{
                background:'white'
              }} className='rounded-full p-2 w-16 h-16 hover:drop-shadow-xl'/>
       <button className=' hover:text-orange-500 bg-white hover:shadow-2xl  p-4 rounded-lg hover:drop-shadow-2xl '>
        <h1 className='text-sm font-semibold '>send mail to qunicykaranga28@gmail.com</h1>
       </button>
       
          </div>
     </a>
    
        </p>
      
       </a>
        <div className='text-center mt-12'>
        <h2 className='text-2xl font-bold'>Call</h2>
        <a className='underline text-green-800 font-bold text-2xl' href='tel:0791032728'> +254791032728</a>
     </div>
      </div>

    </div>
 
    </div>
  
  )
}

export default Report
