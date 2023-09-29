import React from 'react';
import {  AiOutlineHome } from 'react-icons/ai';
import { FiDatabase, FiLogOut } from 'react-icons/fi';
import { FaUserDoctor} from 'react-icons/fa6'
import { GoReport} from 'react-icons/go'


// sidebar links
export const links=[
    {
        title:'Homepage',
       
                name:'homepage',
                icon:<AiOutlineHome/>
           
    },
     {
        title:'Consoltation',
        
                name:'consoltation',
                icon:<FaUserDoctor/>
          
    },
   
    
    {
        title:'DataBase',
        
                name:'database',
                icon:<FiDatabase/>
           
    },
    
    {
        title:'Report',
        
                name:'Report',
                icon:<GoReport/>
           
    },
   

]
// profile details

export const themeColors=[
    {
      name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },

]
 