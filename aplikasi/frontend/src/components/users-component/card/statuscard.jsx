import React from "react";

const StatusCard = ({ status }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center w-full sm:max-w-xs">
    <div>
      <h2 className="text-gray-500 text-xs font-bold uppercase">
        Status Active
      </h2>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-lg font-bold text-gray-800">
          {status === "online" ? "Online" : "Offline"}
        </span>
        <div
          className={`w-2 h-2 rounded-full ${
            status === "online" ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>
      <p className="text-sm text-gray-400 mt-1">
        {status === "online"
          ? "Online since 2 min ago"
          : "Offline since 4 min ago"}
      </p>
    </div>
  </div>
);

const DataCard = ({ total, increase, decrease }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between w-full sm:max-w-xs">
    <div className="flex justify-between items-center">
      <h2 className="text-gray-500 text-xs font-bold uppercase">
        Total Data Simpan
      </h2>
    </div>
    <h1 className="text-3xl font-bold text-gray-800 mt-2">{total}</h1>
    <div className="flex items-center mt-2">
      <span className="text-green-500 text-sm font-bold mr-2">
        ↑ {increase}%
      </span>
      <span className="text-gray-400 text-sm">Since last month/week/day</span>
      <span className="text-red-500 text-sm font-bold ml-2">↓ {decrease}%</span>
    </div>
  </div>
);

const DateTimeCard = ({ date, time, timezone }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between w-full sm:max-w-xs">
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500 text-xs font-bold uppercase">Tanggal</h2>
        <div className="flex bg-gray-100 rounded-lg px-3 py-2 items-center w-40 justify-between">
          <span className="text-gray-800 text-left">{date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500 text-xs font-bold uppercase">Waktu</h2>
        <div className="flex bg-gray-100 rounded-lg px-3 py-2 items-center w-40 justify-between">
          <span className="text-gray-800 text-sm">{time}</span>
          <span className="text-gray-500 font-bold ml-2">{timezone}</span>
        </div>
      </div>
    </div>
  </div>
);

const DashboardCards = () => {
  const status = "offline"; // Replace with dynamic status
  const totalData = 129;
  const increase = 2.27;
  const decrease = 2.27;
  const currentDate = "17/11/2024";
  const currentTime = "22:38:24";
  const timezone = "UTC +7";

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatusCard status={status} />
      <DataCard total={totalData} increase={increase} decrease={decrease} />
      <DateTimeCard date={currentDate} time={currentTime} timezone={timezone} />
    </div>
  );
};

export default DashboardCards;
