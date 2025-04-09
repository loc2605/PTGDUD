import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar =() => {
  return (
    <div className='w-1/5 flex flex-col items-center p-4'>
      <img src="Image 1858.png" alt="Logo" className="mb-6" />
      <nav className='w-full mb-4'>
        <ul className='space-y-2'>
          <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 text-2xl px-4 py-2 rounded-lg transition ${
                isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-600'
              }`
            }
          >
            <img src="Squares four 1.png" alt="Dashboard" className="w-6 h-6" />
            Dashboard
          </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center gap-3 text-2xl px-4 py-2 rounded-lg transition ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-600'
                }`
              }
            >
              <img src="Folder.png" alt="Projects" className="w-6 h-6" />
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                `flex items-center gap-3 text-2xl px-4 py-2 rounded-lg transition ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-600'
                }`
              }
            >
              <img src="Groups.png" alt="Teams" className="w-6 h-6" />
              Teams
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center gap-3 text-2xl px-4 py-2 rounded-lg transition ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-600'
                }`
              }
            >
              <img src="Pie chart.png" alt="Analytics" className="w-6 h-6" />
              Analytics
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `flex items-center gap-3 text-2xl px-4 py-2 rounded-lg transition ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-600'
                }`
              }
            >
              <img src="Chat.png" alt="Messages" className="w-6 h-6" />
              Messages
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/integrations"
              className={({ isActive }) =>
                `flex items-center gap-3 text-2xl px-4 py-2 rounded-lg transition ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-600'
                }`
              }
            >
              <img src="Code.png" alt="Integrations" className="w-6 h-6" />
              Integrations
            </NavLink>
          </li>

        </ul>
      </nav>

      <img src="Group.png" alt="Version" className="mb-2" />
      <p className="text-xl font-semibold mb-2">V2.0 is available</p>
      <button className="w-40 px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition">
        Try now
      </button>
    </div>
  );
}

export default SideBar;
