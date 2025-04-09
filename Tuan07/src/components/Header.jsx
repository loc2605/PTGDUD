import React from 'react'

const Header =() => {
  return (
    <div className='p-4 text-center font-bold justify-between flex'>
      <p className='font-bold text-pink-500 text-2xl'>Dashboard</p>
      <div className='flex'>
      <input className='border border-gray-300 rounded-xl' type="text"  placeholder='  Search'/>
      <img src="Bell 1.png" alt="" />
      <img src="Question 1.png" alt="" />  
      <img src="Avatar (5).png" alt="" />
      </div>
      
    </div>
  )
}
export default Header;