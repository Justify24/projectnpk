import React from "react";
import BottomNavigationFavoritesHighlighted from "../../../components/users-component/bottombar/bottombar-history";
import TableComponent from "../../../components/users-component/bottombar/tablecomponent";

const History = () => {
  const tableData = [
    { no: 1, tanggal: "2023-01-01", ukuranLahan: "100 m2", aksi: "Edit" },
    { no: 2, tanggal: "2023-01-02", ukuranLahan: "200 m2", aksi: "Edit" },
  ];

  const tableColumns = [
    { header: "No", accessor: "no" },
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Ukuran Lahan", accessor: "ukuranLahan" },
    { header: "Aksi", accessor: "aksi" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-gray-200 pt-10"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1587202372775-54c9d3c8e689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 py-4">
        {/* Header Section */}
        <nav
          className="text-black font-bold flex items-center justify-between mb-4"
          aria-label="Breadcrumb"
        >
          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 19a7.968 7.968 0 011.879-2.243A7.968 7.968 0 0112 16a7.968 7.968 0 015 1.757A7.968 7.968 0 0118.879 19M12 12a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
            <h1 className="text-xl font-bold text-gray-800">HISTORY</h1>
          </div>

          {/* Breadcrumb Section */}
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-teal-600 hover:text-teal-800">
                Home
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <a href="#" className="text-gray-500" aria-current="page">
                History Data Tanah
              </a>
            </li>
          </ol>
        </nav>

        {/* Table Section */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <TableComponent data={tableData} columns={tableColumns} pageSize={10} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigationFavoritesHighlighted />
    </div>
  );
};

export default History;
