import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp} from 'react-icons/bs'
import { useStateContext } from './context/ContextProvider';


const Footer = () => {
    const {currentColor} = useStateContext();
  return (
    <div>
      
  <div className="">
    
    <p className="dark:text-gray-200 text-gray-700 text-center m-20 ">
       © 2023 All rights reserved by health care services.
       <div className='flex justify-evenly mt-10'>

   <div className='p-4 rounded-full text-white hover:bg-black hover:text-white' style={{color:currentColor}}>
      <a href='https://api.whatsapp.com/send?phone=254791032728'>
         <BsWhatsapp size={30}/>
       </a>
     </div>
      <div className='p-4 flex items-center justify-center rounded-full text-white hover:bg-black hover:text-white ' style={{color:currentColor}}>
      <a href='https://www.facebook.com/Bryan_Bandi'>
        <BsFacebook size={30} />
      </a>
     </div>
     <div className='p-4 rounded-full text-white hover:bg-black flex items-center  hover:text-white ' style={{color:currentColor}}>
       <a href='https://twitter.com/@KimariBandi'>
         <BsTwitter size={25}/>
       </a>
     </div>
     <div className='p-4 rounded-full text-white hover:bg-black hover:text-white ' style={{color:currentColor}}>
       <a href='https://www.instagram.com/BrianBandi'>
         <BsInstagram size={25}/>
       </a>
     </div>
       </div>
     
     </p>
   
   </div>
    </div>
  )
}

export default Footer
