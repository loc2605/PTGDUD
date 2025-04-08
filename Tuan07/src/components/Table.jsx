import React from 'react'

function Table() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
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
      <table className="w-300 border border-gray-600 text-center text-l">
        <thead>
          <tr>
            <th className="border border-gray-600 px-2 py-">Column 1</th>
            <th className="border border-gray-600 px-2 py-1">Column 2</th>
            <th className="border border-gray-600 px-2 py-1">Column 3</th>
            <th className="border border-gray-600 px-2 py-1">Column 4</th>
            <th className="border border-gray-600 px-2 py-1">Column 5</th>
          </tr>
        </thead>
        <tbody className="leading-tight">
          <tr>
            <td className="border border-gray-600 px-2 py-1">Row1-1</td>
            <td className="border border-gray-600 px-2 py-1">Row1-2</td>
            <td className="border border-gray-600 px-2 py-1">Row1-3</td>
            <td className="border border-gray-600 px-2 py-1">Row1-4</td>
            <td className="border border-gray-600 px-2 py-1">Row1-5</td>
          </tr>
          <tr>
            <td className="border border-gray-600 px-2 py-1">Row2-1</td>
            <td className="border border-gray-600 px-2 py-1">Row2-2</td>
            <td className="border border-gray-600 px-2 py-1">Row2-3</td>
            <td className="border border-gray-600 px-2 py-1">Row2-4</td>
            <td className="border border-gray-600 px-2 py-1">Row2-5</td>
          </tr>
          <tr>
            <td className="border border-gray-600 px-2 py-1">Row3-1</td>
            <td className="border border-gray-600 px-2 py-1">Row3-2</td>
            <td className="border border-gray-600 px-2 py-1">Row3-3</td>
            <td className="border border-gray-600 px-2 py-1">Row3-4</td>
            <td className="border border-gray-600 px-2 py-1">Row3-5</td>
          </tr>
          <tr>
            <td className="border border-gray-600 px-2 py-1">Row4-1</td>
            <td className="border border-gray-600 px-2 py-1">Row4-2</td>
            <td className="border border-gray-600 px-2 py-1">Row4-3</td>
            <td className="border border-gray-600 px-2 py-1">Row4-4</td>
            <td className="border border-gray-600 px-2 py-1">Row4-5</td>
          </tr>
          <tr>
            <td className="border border-gray-600 px-2 py-1">Row5-1</td>
            <td className="border border-gray-600 px-2 py-1">Row5-2</td>
            <td className="border border-gray-600 px-2 py-1">Row5-3</td>
            <td className="border border-gray-600 px-2 py-1">Row5-4</td>
            <td className="border border-gray-600 px-2 py-1">Row5-5</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}
export default Table;