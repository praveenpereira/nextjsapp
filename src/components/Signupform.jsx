'use client';
import React,{useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signupform = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async(e)=>{
      e.preventDefault();
    if( !name || !email || !password){
      setError("all fields are required");
      return
    }
      try {
       const resUser = await fetch('http://localhost:3000/api/userexists',{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
         
          email,
         
        }),
        
       });

       const {user} = await resUser.json();

       if(user){
        setError("email already taken");
        return;
       }


       const res = await fetch('http://localhost:3000/api/register',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, email, password,
          }),
        });
          if(res.ok){
        const form = e.target;
        form.reset();
        router.push("/login")
          }else{
            console.log("users registration failed")
          }

          const data = await res.json();
             setError(data.message)
             return;
        
      } catch (error) {
        console.log('error during registration:', error);
      }
  }


  return (
    <div className='flex items-center justify-center h-screen'>
        <form onSubmit={handleSubmit} className='shadow-lg py-3 px-6 border-t-4 border-green-400 rounded flex flex-col m-1'>Register
        <input onChange={(e)=>setName(e.target.value)}  value={name} type='text' placeholder='full name'/>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type='text' placeholder='email'/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='password'/>
        <button type='submit' className='bg-green-600 text-white px-6 py-2 m-2 mt-2 flex items-center justify-center font-bold cursor-pointer'>Register</button>
        {error &&(
        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 m-2 rounded-md'>{error}</div>
        )}
        <Link className='text-sm mt-2 text-right' href={'/login'}>Already have an account? <span className='underline'> Login</span></Link>
        </form>
    </div>
  )
}

export default Signupform