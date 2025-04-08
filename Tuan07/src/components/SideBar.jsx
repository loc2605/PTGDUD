import React from 'react'

function SideBar() {
  return (
    <div className=' w-1/5 flex flex-col items-center p-4'>
        <img src="Image 1858.png" alt="" />
        <nav className='mb-4'>
            
            <ul className='text-blue-500 space-y-2'>
                <li className='text-2xl flex text-white bg-pink-500 rounded-lg'>
                    <img src="Squares four 1.png" alt=""  />
                    Dashboard</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="Folder.png" alt="" />
                    Projects</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="Groups.png" alt="" />
                    Teams</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="Pie chart.png" alt="" />
                    Analytics</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="Chat.png" alt="" />
                    Messages</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="Code.png" alt="" />
                    Integrations</li>
                
            </ul>
        </nav>
        <img src="Group.png" alt="" />
        <p className="text-xl font-semibold">V2.0 is available</p>
        <button className="w-40 px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition">
            Try now
        </button>
    </div>
  )
}
export default SideBar;