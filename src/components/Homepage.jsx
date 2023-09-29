import { Select, Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from './context/ContextProvider'
import {  useMediaQuery } from '@mui/material';
import LineChart from '../pages/chats/LineChart'
import axios from 'axios'
import { toast } from 'react-toastify'



const Homepage = () => {
   const { currentColor } = useStateContext();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [fullName,setFullName]= useState("");
  const [age,setAge]= useState("")
  const [bmi, setBMI] = useState(null);
  const [weightC,setWeightC] = useState("")
  const [heightC,setheightC] = useState("")
  const [colorie, setColorie] = useState(null);
  const [bmiCategory, setBMICategory] = useState("");
  
  
 
  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      calculateBMICategory()
    }
  };

   const calculateCalorieIntake = (e) => {
    e.preventDefault();
    if (weightC > 0 && heightC > 0) {
      
      const heightInMeters = heightC / 100;
      const bmiValue = (weightC / (heightInMeters * heightInMeters)).toFixed(2);

      
      const calorieValue = calculateCaloriesBasedOnBMI(bmiValue);

      
      setColorie(calorieValue);

      calculateBMICategory()
    }
  };

   
  const calculateCaloriesBasedOnBMI = (bmiValue) => {
  
    
    const calorieValue = parseFloat(bmiValue) * 20;
    return calorieValue.toFixed(2);
  };


   const calculateBMICategory = () => {
    if (bmi !== null) {
      const bmiValue = parseFloat(bmi);

      if (bmiValue < 18.5) {
        setBMICategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setBMICategory("Normal Weight");
      } else if (bmiValue >= 30 && bmiValue <= 34.9) {
        setBMICategory("Obese Class I");
      } else if (bmiValue >= 35 && bmiValue <= 39.9){
        setBMICategory("Obese class II");  
      } else {
        setBMICategory("Obese class III")
      }
    }
  };
  
  const getCategoryColor = (category) => {
  const colorMapping = {
    'Underweight': 'text-blue-400',
    'Normal Weight': 'text-orange-400',
    'Obese Class I': 'text-red-600',
    'Obese Class II': 'text-yellow-500',
    'Obese Class III': 'text-purple-700',
  };

  return colorMapping[category] || 'text-black'; 
};

 
  const saveBMI = () => {
    
    const bmiData = {
      fullName,
      age,
      weight,
      height,
      bmi,
     colorie,
    };

    axios.post('http://localhost:5000/api/save-bmi', bmiData)

    .then((response)=> {
      console.log(response.data.message);
      toast.success("saved to database")
    })
    .catch((error)=> {
      // error
      console.log('Error saving Bmi data',error);
      toast.error(error.message)
    })
  } 

    // save colorie 
 const saveColorie =()=> {
  
  const calorieData = {
    weightC,
    heightC,
    
  };

  axios.post('http://localhost:5000/api/save-colorie', calorieData)

  .then((response)=> {
    console.log(response.data.message);
    toast.success("colorie data saved")
  })
  .catch((error)=> {
    console.log("Error saving colorie data:", error);
    toast.error("Error saving colorie data")
  })
 }
  

  
  return (
    <div className='md:p-16 md:mt-0 mt-32 p-4 h-full' >
     <h3 className='md:text-lg text-sm text-center text-gray-400 font-bold dark:text-white'>
      This website is designed to help you maintain a healthy weight and 
      lifestyle. We offer a variety of resources, including a BMI calculator,
      calorie intake calculator, and advice on how to eat healthy and exercise.
     </h3>
  

     {/* calculations */}
      <div className='xl:flex block items-center justify-evenly mt-28 pb-32'> 
      
      <div className=''>
        <h2 className='text-center font-semibold text-xl text-gray-500 pb-3 uppercase dark:text-white'>bmi calculations</h2>
           <div className='bg-white dark:bg-gray-300 shadow-xl p-8  rounded-lg xl:w-800 w-full' >
          
          <form onSubmit={calculateBMI}>
           <Box display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr))"
         sx={{ marginTop:'50px',"& > div":{gridColumn: isNonMobile ? undefined : 'span 4'}}}>

              <TextField
              label='Full Name'
              sx={{gridColumn:'span 2'}}
              name='fullName'
              value={fullName}
              onChange={(e)=> setFullName(e.target.value)}
              />
              
              <TextField
              type='number'
              label='Age'
              sx={{gridColumn:'span 2'}}
              name='age'
              value={age}
              onChange={(e)=> setAge(e.target.value)}
              />

               
              <TextField  
              label="Weight (Kg)"
              name='weight'
              type='number'
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
              required
              sx={{gridColumn:'span 2'}}
              />

               <TextField  
              label="Height (cm)"
              name='height'
              type='number'
              value={height}
              onChange={(e)=> setHeight(e.target.value)}
              sx={{gridColumn:'span 2'}}
              required
              />

              <Select
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ gridColumn: "span 4" }}
              required
              
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>

             
              <TextField
              name='bmi'
              onChange={(e)=> setBMI(e.target.value)}
              type='number'
              value={bmi}
              sx={{gridColumn:'span 2'}}
              required
              disabled
              />

                <TextField
                required
                disabled
              name='colorie'
              type='number'
              value={colorie}
              onChange={(e)=> setColorie(e.target.value)}
              sx={{gridColumn:'span 2'}}
              />

              
            </Box>
            <button type='submit'  className='w-full mt-8 p-4 rounded-lg hover:shadow-2xl text-white text-xl' style={{background:currentColor}}>
              Calculate BMI
            </button>
          </form>
        </div>
      </div>
     
 <div className='xl:mt-0 mt-16'>
  <h2 className='text-center font-semibold text-xl text-gray-500 pb-3 uppercase dark:text-white '>Calorie Intake Calculator</h2>
  <div className='bg-white dark:bg-gray-300  shadow-xl p-8   rounded-lg xl:w-400   w-full'>
          
          <form onSubmit={calculateCalorieIntake}>
           <Box display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr))"
         sx={{ marginTop:'50px',"& > div":{gridColumn: isNonMobile ? undefined : 'span 4'}}}>

              <TextField  
              label="Weight (Kg)"
              name='weightC'
              type='number'
              value={weightC}
              onChange={(e)=> setWeightC(e.target.value)}
              required
              sx={{gridColumn:'span 4'}}
              />

               <TextField  
              label="Height (cm)"
              name='heightC'
              value={heightC}
              onChange={(e)=> setheightC(e.target.value)}
              type='number'
              sx={{gridColumn:'span 4'}}
              required
              />
            

                 <TextField
                required
                disabled
              name='colorie'
              type='number'
              value={colorie}
              onChange={(e)=> setColorie(e.target.value)}
              sx={{gridColumn:'span 4'}}
              />
              
            </Box>
             <button type='submit' className='w-full mt-8 p-4 rounded-lg hover:drop-shadow-2xl text-white text-xl' style={{background:currentColor}}>
              Calculate Colorie Intake
            </button>
          </form>
        </div>
 </div>
          
      </div>
      {/* bmi records */}
      <div className='xl:flex block justify-evenly  items-center'>
           <div className='bg-white dark:bg-secondary-dark-bg dark:shadow-2xl  xl:w-800 w-full p-4 shadow-lg mt-6 rounded-lg '>
      <h2 className='pb-6 text-center text-xl font-semibold text-gray-600 dark:text-white'>BMI Category as per BMI Calculations</h2>
      <div className='border-b-2 '>
       <p className='flex justify-between  items-center'>
        <h1 className='text-xl font-semibold  text-gray-500 dark:text-white'>Your BMI</h1>
        <h2 className='font-semibold text-2xl text-orange-400'>{bmi}</h2>
       </p>
        
        
      </div>

       <div className='pt-8 pb-4'>
       <p className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold text-gray-500 dark:text-white'>Category</h1>
         <h2 className={`font-semibold text-2xl ${getCategoryColor(bmiCategory)}`}>{bmiCategory}</h2>
       </p>
        
        
      </div>

       <div className='border-t-2 pt-8 border-b-2 pb-4'>
       <p className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold  text-gray-500 dark:text-white'>Consaltation</h1>
        <h2 className={`font-semibold text-2xl ${bmiCategory !== 'Normal Weight' ? 'text-red-600' : 'text-green-400'}`}>
          {bmiCategory !== 'Normal Weight' ? 'Action Needed' : 'No Action Needed'}
        </h2>
       </p>
        
        
      </div>
      <button onClick={saveBMI} className='p-3 rounded-xl flex ml-auto text-white mt-4 hover:drop-shadow-2xl' style={{background:currentColor}}>
        Save BMI
      </button>
    </div>
        
      
{/* colorie */}
      <div>
       <div className='bg-white dark:bg-secondary-dark-bg dark:shadow-2xl  xl:w-400 w-full p-4 shadow-lg mt-6 rounded-lg '>
      <h2 className='pb-6 text-center text-xl font-semibold text-gray-600 dark:text-white'> Colorie Calculations</h2>
      <div className='border-b-2 '>
       <p className='flex justify-between  items-center'>
        <h1 className='text-xl font-semibold dark:text-white  text-gray-500'>Your Colorie</h1>
        <h2 className='font-semibold text-2xl  text-orange-400'>{colorie}</h2>
       </p>
        
        
      </div>

       <div className='pt-8 pb-4'>
       <p className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold dark:text-white text-gray-500'>Category</h1>
         <h2 className={`font-semibold text-2xl ${getCategoryColor(bmiCategory)}`}>{bmiCategory}</h2>
       </p>
        
        
      </div>

       <div className='border-t-2 pt-8 border-b-2 pb-4'>
       <p className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold  text-gray-500 dark:text-white'>Consaltation</h1>
        <h2 className={`font-semibold text-2xl ${bmiCategory !== 'Normal Weight' ? 'text-red-600' : 'text-green-400'}`}>
          {bmiCategory !== 'Normal Weight' ? 'Action Needed' : 'No Action Needed'}
        </h2>
       </p>
        
        
      </div>
      <button onClick={saveColorie} className='p-4 rounded-lg w-full text-center text-white mt-4 hover:drop-shadow-2xl' style={{background:currentColor}}>
        Save Colorie
      </button>
    </div>
      </div>
    
          </div>
    <p className='p-8 text-xl text-gray-950 dark:text-white'>If action is required, patient is required to <Link to='/consoltation' className='text-blue-400 underline hover:text-red-600'>Click Here</Link></p>
        <div className='xl:flex block justify-evenly items-center pt-20 '>

          
          <div className='mt-10 bg-white dark:bg-secondary-dark-bg dark:text-white dark:shadow-2xl  xl:w-800 w-full shadow-sm  p-3 rounded-lg'>
            <h1 className=' text-center font-semibold text-2xl p-2'>Weekly Combination Graph</h1>
             <LineChart/>
          </div>

           <div className='mt-10 bg-white dark:bg-secondary-dark-bg dark:text-white dark:shadow-2xl xl:w-400 w-full md:p-3 p-4  shadow-sm rounded-lg'>
            <h2 className='text-xl font-semibold text-center'>Patient History</h2>
            <div className='flex justify-between mt-6 border-1 p-4  border-orange-300'>
            <p className=' font-semibold'>BMI</p>
            <p>17.22</p>
            </div>

             <div className='flex justify-between mt-6  border-1 p-4  border-orange-300'>
            <p className='font-semibold'>BMI</p>
            <p className=''>47.89</p>
            </div>

             <div className='flex justify-between mt-6  border-1 p-4  border-orange-300'>
            <p className=' font-semibold'>Colorie</p>
            <p>54.08</p>
            </div>

             <div className='flex justify-between mt-6  border-1 p-4  border-orange-300'>
            <p className=' font-semibold'>BMI</p>
            <p>20.93</p>
            </div>

             <div className='flex justify-between mt-6  border-1 p-4 border-orange-300'>
            <p className=' font-semibold'>Calorie</p>
            <p>13.87</p>
            </div>
            
           
           
          </div>
     
      </div>
      
    </div>
  )
}



export default Homepage
