import React, { useEffect } from 'react';
import { AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Notification from './Notification';
import UserProfile from './UserProfile';
import { useStateContext } from './context/ContextProvider';
import image from '../data/bmi.jpg'

const NavButton= ({title,customFunc,icon,color,dotColor}) => (
  <button 
  type='button'
  onClick={()=> customFunc()}
  style={{ color}}
  className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
    <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
    {icon}
  </button>
)


const Navbar = () => {
   const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

   useEffect(()=> {
    const handleResize=()=> setScreenSize(window.innerWidth);
    
    window.addEventListener('resize',handleResize);

    handleResize();

    return () => window.removeEventListener('resize',handleResize)
   },[]);

   useEffect(()=>{
    if(screenSize <= 900) {
      setActiveMenu(false)
    }else {
      setActiveMenu(true)
    }
   },[screenSize]);

   const handleActiveMenu =()=> setActiveMenu(!activeMenu);

  return (
    <div className='flex  justify-between p-2 md:ml-2  dark:bg-secondary-dark-bg  relative bg-gray-200 shadow-xl  h-20' >
      <NavButton title='Menu' customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu/>}/>
         
      <div className='flex '>
             <NavButton  title="Login" customFunc={()=>handleClick('login') } color={currentColor} />
          
             <NavButton title='Notification' dotColor='rgba(254,201,15)' customFunc={()=> handleClick('notification')} color={currentColor} icon={<RiNotification3Line/>}/>
            <div className='flex dark:text-white dark:border-orange-300 dark:border-1 items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=> handleClick('userProfile')}>
              <img 
              className='rounded-full w-8 h-8'
              src={image}
              alt='BMI/CALORIE'
              />
              <p>
                <span>
                  <span>Health</span>
                </span>
              </p>
              <MdKeyboardArrowDown className='text-gray-900 text-28 md:mr-6 relative' />
            </div>
           
            {isClicked.notification && (<Notification/>)}
            {isClicked.userProfile && (<UserProfile/>)}
      </div>
    </div>
  )
}

export default Navbar
