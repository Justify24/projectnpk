import React from "react";

const TableComponent = ({ data, columns, pageSize }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <label htmlFor="entries" className="text-gray-600 text-sm">
            Show
          </label>
          <input
            id="entries"
            type="number"
            defaultValue={pageSize}
            className="ml-2 border rounded p-1 text-gray-600 text-sm w-16"
          />
          <span className="text-gray-600 text-sm ml-2">entries</span>
        </div>

        <div>
          <label htmlFor="search" className="text-gray-600 text-sm mr-2">
            Search:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="border rounded p-1 text-gray-600 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, index) => (
              <th
                key={index}
                className="text-left border border-gray-200 px-4 py-2 text-gray-700"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-200 px-4 py-2 text-gray-600"
                  >
                    {col.accessor === "aksi" ? (
                      <div className="flex space-x-2">
                        {/* Edit Button */}
                        {/* <button
                          className="flex items-center px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                          onClick={() => alert(`Editing row ${row.no}`)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 17l4-4m0 0l-4-4m4 4H7"
                            />
                          </svg>
                          Edit
                        </button> */}
                        {/* Detail Button */}
                        <a
                          href={`/hasilanalisaalat`}
                          className="flex items-center px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12h2m-6 0h2m-6 0h2m9 4H6a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v5"
                            />
                          </svg>
                          Detail
                        </a>
                      </div>
                    ) : (
                      row[col.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm">
          Showing 1 to {Math.min(pageSize, data.length)} of {data.length}{" "}
          entries
        </span>
        <div className="flex items-center space-x-1">
          <button className="px-2 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">
            &lt;
          </button>
          {[...Array(Math.ceil(data.length / pageSize)).keys()].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded text-sm ${
                page === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-500 hover:text-white`}
            >
              {page + 1}
            </button>
          ))}
          <button className="px-2 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
