import React from 'react';

function Overview() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <img src="Squares four 1.png" alt="overview icon" className="w-5 h-5" />
        <h5 className="text-lg font-semibold">Overview</h5>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-between items-center flex-1 p-7 bg-gray-100 rounded-lg">
          <div>
            <h3 className="text-sm text-gray-600 font-bold">Turnover</h3>
            <p className="text-xl font-bold">$92,405</p>
            <p className="text-green-500 text-sm">5.39% period of change</p>
          </div>
          <img src="Button 1509.png" alt="Turnover" className="w-8 h-8" />
        </div>

        <div className="flex justify-between items-center flex-1 p-7 bg-gray-100 rounded-lg">
          <div>
            <h3 className="text-sm text-gray-600 font-bold">Profit</h3>
            <p className="text-xl font-bold">$32,218</p>
            <p className="text-green-500 text-sm">5.39% period of change</p>
          </div>
          <img src="Button 1529.png" alt="Profit" className="w-8 h-8" />
        </div>

        <div className="flex justify-between items-center flex-1 p-7 bg-gray-100 rounded-lg">
          <div>
            <h3 className="text-sm text-gray-600 font-bold">New customer</h3>
            <p className="text-xl font-bold">298</p>
            <p className="text-green-500 text-sm">6.84% period of change</p>
          </div>
          <img src="Button 1530.png" alt="Customer" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
export default Overview;