'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';



const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        email,
         password,
          redirect: false,
      });

      

      if(res.error){
        setError("Invalid credentials");
        return;   
      }
      
      router.replace("logout");
      
      
      
    } catch (error) {
      
      console.log(error);
    }
  }
  return (
    <div className='flex items-center justify-center h-screen'>
        <form onSubmit={handleSubmit} className='shadow-lg py-3 px-6 border-t-4 border-green-400 rounded flex flex-col m-1'>Login
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type='text' placeholder='email'/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='password'/>
        <button  className='bg-green-600 text-white px-6 py-2 m-2 mt-2 flex items-center justify-center font-bold cursor-pointer'>Login</button>
        {error && (
        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 m-2 rounded-md'>{error}</div>)}
        <Link className='text-sm mt-2 text-right' href={'/signup'}>Dont have an account? <span className='underline'> Register</span></Link>
        </form>
    </div>
  )
}

export default Loginform