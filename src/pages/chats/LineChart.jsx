import React from "react";
import Chart from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import { useStateContext } from "../../components/context/ContextProvider";



const LineChart =()=>{
  const {currentColor} = useStateContext()
    const data={
        labels:[ 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday' ],
        datasets:[
            {
                label:'BMI',
                data:[11,24,36,25,40,17,35],
                borderColor:currentColor,
                backgroundColor:'rgba(75,192,192,0.2)',
                borderWidth:2,
                  tension:0.3
                
                
            },
             {
                label:'COLORIE',
                data:[15,10,30,30,17,30,21],
                borderColor:'black',
                backgroundColor:'rgba(75,192,192,0.2)',
                borderWidth:2,
                tension:0.3
                
                
            },
        ],
    };
    const options={
        responsive:true,
         
            scales:{
                y:{
                    beginAtZero:true,
                  
                },
               
              
            }
    };
    
    return <Line data={data} options={options} />
};
export default LineChart