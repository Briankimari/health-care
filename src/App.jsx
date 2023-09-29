import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Homepage from './components/Homepage';
import { useEffect } from 'react';
import {FiSettings} from 'react-icons/fi'
import Navbar from './components/Navbar';
import ThemeSettings from './components/ThemeSettings';
import Sidebar from './components/Sidebar';
import { useStateContext } from './components/context/ContextProvider';
import { Footer } from './components';
import Consoltation from './components/Consoltation';
import Database from './components/Database';
import Report from './components/Report';




const App=()=> {

    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();  

    
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  
  return(
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <ToastContainer/>

        
         <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
           
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

         
          </div>
          
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-whit ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full  z-10">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}
              {/* pages */}
              <Routes>

                <Route path="/" element={(<Homepage />)} />
                <Route path="/homepage" element={(<Homepage />)} />
                <Route path="/consoltation" element={(<Consoltation />)} />
                <Route path='/database' element={<Database/>}/>
                <Route path='/report' element={<Report/>} />
             

              </Routes>

            </div>
            <Footer/>
          </div>
        </div>
       
      
    </div>
  );
};

export default App;


