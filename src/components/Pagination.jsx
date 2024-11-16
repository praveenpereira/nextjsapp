import React from 'react'

const Pagination = () => {
  return (
    <div className='flex item-center justify-center p-2 m-1'>
        <div><button className='uppercase text-lg p-2 bg-green-500 m-2 rounded'> Previous</button></div>
        <div><button className='uppercase text-lg p-2 bg-green-500 m-2 rounded'>Next </button></div>
    </div>
  )
}

export default Pagination