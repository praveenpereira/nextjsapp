'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [quote, setQuote] = useState("");
  const [quoteby, setQuoteBy] = useState("");
  const [postby, setPostBy] = useState("");

  const router = useRouter();

 
  
  return (
    <div className = 'flex flex-row items-center justify-center h-screen px-12 py-6'>
           
        <form  className='shadow-lg py-3 px-6 border-t-4 border-green-400 rounded flex flex-col m-20'>PUBLISH QUOTE
            <input onChange={(e)=>setQuote(e.target.value)} value={quote} className='border border-slate-400 px-4 py-2 rounded mx-4 my-2' type='text' placeholder="write quote"/>
            <input onChange={(e)=>setQuoteBy(e.target.value)} value={quoteby} className='border border-slate-400 px-4 py-2 rounded mx-4 my-2' type='text' placeholder="quoteby name"/>
            <input onChange={(e)=>setPostBy(e.target.value)} value={postby} className='border border-slate-400 px-4 py-2 rounded mx-4 my-2' type='text' placeholder="postby name"/>
            <button type = 'submit' className='px-4 py-2 bg-green-600 rounded w-fit text-white mx-10 my-2'>Publish</button>
        </form>
       
        
    </div>
  )
  }

export default Dashboard