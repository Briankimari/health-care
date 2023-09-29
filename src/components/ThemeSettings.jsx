import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { themeColors } from '../data/dummy';
import { BsCheck } from 'react-icons/bs';
import { useStateContext } from './context/ContextProvider';

const ThemeSettings = () => {
    const {setColor,setMode,currentMode,setThemeSettings,currentColor}=useStateContext();

  return (
    // themes settings
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0' style={{zIndex:'10'}}>
        <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484852] z-10 md:w-400'>
            <div className='flex justify-between items-center p-4 ml-4 '>
                <p className='font-semibold text-lg'>Settings</p>
                <button 
                type='button'
                onClick={()=> setThemeSettings(false)}
                style={{color:'rgb(153,171,180)',borderRadius:'50%'}}
                className='text-2xl p-3 hover:drop-shadow-lg hover:bg-light-grey'>
                      <MdOutlineCancel />
                </button>
            </div>
            {/* color-theme */}
            <div className='flex-col border-t-1 border-color p-4 ml-4'>
                <p className='font-semibold text-xl'>Theme Option</p>
                <div className='mt-4'>
                    <input
                    type='radio'
                    id='light'
                    name='theme'
                    value='Light'
                    className='cursor-pointer'
                    onChange={setMode}
                    checked={currentMode === 'Light'}/>

                    <label htmlFor="light">
                        Light
                    </label>
                </div>

                 <div className='mt-2'>
                    <input
                    type='radio'
                    id='dark'
                    name='theme'
                    value='Dark'
                    className='cursor-pointer'
                    onChange={setMode}
                    checked={currentMode === 'Dark'}/>

                    <label htmlFor="dark">
                        Dark
                    </label>
                </div>
            </div>
            {/* colors theme */}
            <div className='p-4 border-t-1 ml-4'>
                <p className='text-xl font-semibold'>Theme Color</p>
                <div className='flex gap-3'>
                    {themeColors.map((item,index)=> (
                        <div key={index} content={item.name} >
                            <div className='relative mt-2 cursor-pointer flex gap-5 item-center' key={item.name}>
                                <button 
                                type='button'
                                className='h-10 w-10 rounded-full cursor-pointer'
                                style={{background:item.color}}
                                onClick={()=>setColor(item.color)}>
                                
                                <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block': 'hidden'}`} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThemeSettings
