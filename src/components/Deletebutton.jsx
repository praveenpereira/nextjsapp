'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

const Deletebutton = ({id}) => {

    const router = useRouter();
    const removeQuote = async ()=>{
        const confirmed = confirm('are you sure?');
        if(confirmed){
        const res = await fetch(`http://localhost:3000/api/quote?id=${id}`,{
                method: "DELETE",
            });
            
            if(res.ok){
             router.refresh();   
            }
        }
    }
  return (
    <div>
        <button onClick={removeQuote} className='mx-1 px-1 bg-white text-red-500 border border-green-800 rounded'>delete</button>
    </div>
  )
}

export default Deletebutton