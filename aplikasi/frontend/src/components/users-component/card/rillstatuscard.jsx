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

export default StatusCard;
