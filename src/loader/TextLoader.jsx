
import React from 'react';
import './Loader.css'; 

const TextLoader = () => {
  return (
    <div className="flex flex-col gap-3 items-center ">
      <div className="loader-spinners">
        
      </div>
      <p className='text-sm text-orange-600'>loading your data...</p>
    </div>
  );
};

export default TextLoader;
