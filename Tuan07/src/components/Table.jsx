import React from 'react'
const data = [
  {
    name: 'Elizabeth Lee',
    company: 'AvatarSystems',
    value: '$359',
    date: '10/07/2023',
    status: 'New',
    avatar: 'Avatar.png'
  },
  {
    name: 'Carlos Garcia',
    company: 'SmoozeShift',
    value: '$747',
    date: '24/07/2023',
    status: 'New',
    avatar: 'Avatar (1).png'
  },
  {
    name: 'Elizabeth Bailey',
    company: 'Prime Time Telecom',
    value: '$564',
    date: '08/08/2023',
    status: 'In-progress',
    avatar: 'Avatar (2).png'
  },
  {
    name: 'Ryan Brown',
    company: 'OmniTech Corporation',
    value: '$541',
    date: '31/08/2023',
    status: 'In-progress',
    avatar: 'Avatar (3).png'
  },
  {
    name: 'Ryan Young',
    company: 'DataStream Inc.',
    value: '$769',
    date: '01/05/2023',
    status: 'Completed',
    avatar: 'Avatar (4).png'
  },
  {
    name: 'Hailey Adams',
    company: 'FlowRush',
    value: '$922',
    date: '10/06/2023',
    status: 'Completed',
    avatar: 'Avatar (5).png'
  }
];
const statusColor = {
  'New': 'text-blue-500 bg-blue-100',
  'In-progress': 'text-yellow-600 bg-yellow-100',
  'Completed': 'text-green-600 bg-green-100'
};
function Table() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 p-3">
        <img src="File text 1.png" alt="overview icon" className="w-5 h-5" />
        <h5 className="text-lg font-semibold">Detailed Report</h5>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-pink-600 border border-pink-500 rounded-lg">
            <img src="Download.png" alt="Import icon"/>
            <span>Import</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1  text-pink-600 border border-pink-500 rounded-lg">
            <img src="Move up.png" alt="Export icon" />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div>
      <table className="min-w-full text-l p-2">
        <thead>
          <tr className="text-left text-gray-600 bg-gray-100 border-b">
            <th className="py-2">CUSTOMER NAME</th>
            <th className="py-2">COMPANY</th>
            <th className="py-2">ORDER VALUE</th>
            <th className="py-2">ORDER DATE</th>
            <th className="py-2">STATUS</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className=" hover:bg-gray-50">
              <td className="flex items-center gap-2 py-2">
                <img src={row.avatar} alt="" className="w-8 h-8 rounded-full" />
                <span className='font-bold'>{row.name}</span>
              </td>
              <td>{row.company}</td>
              <td>{row.value}</td>
              <td>{row.date}</td>
              <td>
                <span className={`px-3 py-2 rounded-full text-sm font-medium ${statusColor[row.status]}`}>
                  {row.status}
                </span>
              </td>
              <td>
                <button>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
export default Table;