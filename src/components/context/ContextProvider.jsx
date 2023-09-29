
import React, { createContext, useContext, useState } from 'react';

const MyContext=createContext();


const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function MyContextProvider({children}) {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <MyContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize,
     setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor,
      setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </MyContext.Provider>
  )
}

export function useStateContext() {
  return useContext(MyContext);
}