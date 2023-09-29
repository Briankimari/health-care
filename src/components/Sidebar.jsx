import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';


import { links } from '../data/dummy';
import { useStateContext } from './context/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 dark:hover:bg-black';

  return (
    <div className=" h-screen z-10 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-xl bg-gray-200 dark:bg-secondary-dark-bg">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Health Care</span>
            </Link>
          
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
              >
                <MdOutlineCancel />
              </button>
           
          </div>
          <div className="mt-16  ">
            {links.map((item) => (
              <div key={item.title} onClick={handleCloseSideBar} >
                   <NavLink className={({isActive})=> (isActive ? activeLink : normalLink)} onClick={handleCloseSideBar} 
                key={item.name} to={`/${item.name}`} style={({isActive})=> ({
                  background:isActive ? currentColor : ''
                })}  >
                  <div className='flex justify-between items-center'>
           <p className="text-gray-600 dark:text-white m-3  uppercase  " onClick={handleCloseSideBar}>
               
                    {item.title} 
                  </p>
                  <p className='right-4 absolute text-2xl' >
                     {item.icon}
                  </p>

                  </div>
            
                  
                </NavLink>
              
                
                
              </div>
              
            ))}
            
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;