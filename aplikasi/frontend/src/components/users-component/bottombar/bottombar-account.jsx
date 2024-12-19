import React from "react";

function BottomNavigationProfileHighlighted() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-10">
        {/* Home Icon */}
        <a href="/dashboard" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 22V12h6v10"
            />
          </svg>
        </a>

        {/* Search Icon */}
        <a href="/analisis-alat" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16a8 8 0 1111.31 1.73l4.6 4.6a1 1 0 01-1.42 1.42l-4.6-4.6A8 8 0 018 16z"
            />
          </svg>
        </a>

        {/* Favorites Icon */}
        <a href="/history" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 19a1 1 0 00.757.293h11.244a1 1 0 00.757-.293l4.854-4.854a5.001 5.001 0 10-7.07-7.07L12 8.586l-3.364-3.364a5.001 5.001 0 10-7.07 7.07L5.121 19z"
            />
          </svg>
        </a>

        {/* Profile Icon (Highlighted) */}
        <a href="/accountsettings" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-teal-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 19A7.968 7.968 0 0112 20a7.968 7.968 0 016.879-1h0a3.991 3.991 0 00-3.334-1H8.455A3.991 3.991 0 005.121 19z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BottomNavigationProfileHighlighted;
