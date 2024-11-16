'use client';

import React, { useEffect, useState } from 'react'
//import SearchQuote from './SearchQuote';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import DATA from 'data.json'


const Searchinput = () => {

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
    
    </div>
    
  )

}

export default Searchinput