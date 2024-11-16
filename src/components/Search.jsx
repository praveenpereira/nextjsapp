import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col p-4 bg-green-200 md:flex md:flex-row items-center justify-center'>
        <div className='flex flex-col md:flex-row'>
            <input  placeholder='search here' className='px-4 py-1 m-2 b-2 border-green-500 rounded'/>
            <button className='px-1 py-1 md:px-6 md:py-1 rounded  text-black flex items-center justify-center'>Search</button>
        </div>
    </div>
  )
}

export default Search