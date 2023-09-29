import * as React from 'react';
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import axios from 'axios';
import { useStateContext } from "./context/ContextProvider";

const Notification =()=>{
  const { currentColor } = useStateContext();
  const [bmiData,setBmiData]= React.useState([]);

  
 React.useEffect(() => {
    // Fetch BMI data from the backend
    axios.get('http://localhost:5000/api/get-bmi')
      .then((response) => {
      
        setBmiData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching BMI data:', error);
      });

  }, []);
    return(
        <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464d] P-8 rounded-lg w-96 p-6 shadow-lg" style={{zIndex:'10'}}>
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <p className="font-semibold text-lg dark:text-gray-200 ">Notification</p>
                     <button type="button" className="text-white text-xs rounded p-1 px-2 bg-blue-400 "> New Bmi alaert</button>
                    
                </div>
                <Button
                icon={<MdOutlineCancel/>}
                color='rgba(153,171,100)'
                bgHoverColor='light-gray'
                size='2xl'
                borderRadius='50%'
                />
                
            </div>
           {bmiData.map((data,index)=> {
            return (
                <div className='p-4 flex text-sm font-semibold 'style={{color:currentColor}}>
                 <h1 className='text-sm text-black font-bold '>{data.fullName}</h1> <p>Your BMI was successful, please check your database!!</p>
                </div>
            )
           })}
        </div> 
    )
}

export default Notification