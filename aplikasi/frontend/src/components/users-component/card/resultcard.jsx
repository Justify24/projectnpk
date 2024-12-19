import React from "react";

const ResultCard = ({ title, value }) => (
  <div
    className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center"
    style={{ width: "265px", height: "150px" }}
  >
    <h3 className="text-gray-500 text-sm font-bold">{title}</h3>
    <h1 className="text-3xl font-bold text-gray-800 mt-2">{value}</h1>
  </div>
);

export default ResultCard;
