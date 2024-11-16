import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 w-full bg-green-500 text-white p-2 flex items-center justify-between border-b-2 border-red-500  md:border-b-2 md:border-white shadow-md'>
        <div className='hidden md:flex flex-1' >
            <Link href='/about'>About</Link>
        </div>
        <div className='flex-1 text-center'>
        <Link href='/' className='uppercase font-bold '>quotes</Link>
        </div>
        <div className='md:hidden'>
            <Menu/>
        </div>
        <div className='hidden md:flex item-center justify-center gap-4 uppercase flex-1'>
            <Link href='/login'>Login</Link>
            <Link href='/dashboard'>Add-Quote</Link>
            <Link href='/signup' className='border-2 border-red-500 rounded-lg'>signup</Link>
            
        </div>
    </div>
  )
}

export default Navbar