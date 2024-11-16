'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
    {id:1, title:'signup',url:'/signup'},
    {id:2, title:'login',url:'/login'},
    {id:3, title:'add-quote',url:'/dashboard'},
]

const user = false

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
    {!open?(   <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/>):
        (<Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>)}

       {open &&(<div className='w-full absolute left-0 top-12 bg-green-500 text-white flex flex-col items-center justify-center gap-4 h-[calc(100vh-3rem)] uppercase'>
       {links.map((item)=>{
                return(
                    <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
                )
            })}
        
        </div>)} 
    </div>
  )
}

export default Menu