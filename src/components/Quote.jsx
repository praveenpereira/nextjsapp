"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Deletebutton from './Deletebutton';
import DATA from 'data.json'
import Searchinput from '@/app/search/Searchinput';





const Quote = () => {

    const[data, setData] = useState(DATA);

    
    const Filter =(event)=>{
        setData(DATA.filter(f=>f.quoteby.toLowerCase().includes(event.target.value)))
    }
 
  
  return (
    <div>
     
     <div className='flex items-center justify-center bg-green-200 p-4'>
        <input onChange={Filter} type="text" placeholder='search' className='w-[50%] md:w-[30%] shadow-lg m-2 p-2 rounded'
        
        
       
        />
        <button className='p-2 bg-green-700 text-white cursor-pointer rounded'>Search</button>

        <div>
           
        </div>
        
    </div>


        {
            data.map((item)=>{
             
                return(
                    

                
        <div className='h-30 md:h-36 bg-green-500 p-2 m-4 shadow rounded'>
            
              
                <div className='flex flex-row items-center justify-end '>
                
                <Link href ={"/quoteedit"} className='mx-1 px-1 bg-green-800 text-white border border-white rounded'>Edit</Link>
                <Deletebutton />
                
    
           </div>
          
        
           <h2 className='text-xl md:text-xl text-white flex items-center justify-center' key={item.id}>{item.quote}</h2>
            <h3 className='text-base md:text-lg text-black bg-green-50 flex items-center justify-center rounded mt-1'> Quote By : {item.quoteby}</h3>
            <div className='p-2 flex items-center justify-end'> Post By : {item.postby}</div>
         
    
        </div>
       )
    })
        
        }
        
    </div>

  )
}

export default Quote