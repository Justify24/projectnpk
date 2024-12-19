import React from "react";
import { ChevronDown } from "lucide-react";
import BottomNavigationSearchHighlighted from "../../../components/users-component/bottombar/bottombar-analisis";

// CSS yang perlu ditambahkan ke file CSS Anda
const styles = `
.bgui-container {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.progress-container {
  position: relative;
  width: 100%;
}

.arrow-indicator {
  position: absolute;
  top: -8px;
  transform: translateX(-50%);
}

.select-container {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
`;

function Hasilanalisalahan() {
  return (
    <div className="bgui-container">
      <div className="container mx-auto px-6 py-4 pt-8">
        {/* Header Section */}
        <nav
          className="text-black font-bold flex items-center justify-between mb-4"
          aria-label="Breadcrumb"
        >
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
            <h1 className="text-xl font-bold text-gray-800">
              Hasil Analisa Lahan
            </h1>
          </div>

          <ol className="list-none p-0 flex items-center space-x-6">
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 bg-stone-300 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <span className="text-stone-300 text-xs font-medium">
                Bagikan
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                </svg>
              </div>
              <span className="text-gray-500 text-xs font-medium">Unduh</span>
            </div>

            <li className="flex items-center">
              <a href="#" className="text-teal-600 hover:text-teal-800">
                Home
              </a>
              <svg
                className="fill-current w-3 h-3 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <a href="#" className="text-gray-500" aria-current="page">
                Hasil Analisis Alat
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content - Split Layout */}
        <div className="w-full bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-500 mb-4">
            KONDISI LAHAN
          </h2>

          <div className="flex gap-8">
            {/* Left Side - Parameters */}
            <div className="w-1/2 space-y-8">
              <h3 className="text-base font-bold text-emerald-500">
                PARAMETER
              </h3>

              {/* Nitrogen */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center">
                    <span className="text-white text-3xl font-extrabold">
                      N
                    </span>
                  </div>
                  <span className="text-xl font-bold text-zinc-700">16</span>
                  <div className="flex-1 relative">
                    <div className="flex space-x-1">
                      <div className="w-full h-3 bg-red-400/50 rounded-l-2xl" />
                      <div className="w-full h-3 bg-lime-600/40" />
                      <div className="w-full h-3 bg-amber-400/30 rounded-r-2xl" />
                    </div>
                    {/* Arrow Indicator */}
                    <div className="absolute -top-2 left-[20%] transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-black"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-zinc-700 w-16">
                    Rendah
                  </span>
                </div>
              </div>

              {/* Fosfor */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center">
                    <span className="text-white text-3xl font-extrabold">
                      P
                    </span>
                  </div>
                  <span className="text-xl font-bold text-zinc-700">16</span>
                  <div className="flex-1 relative">
                    <div className="flex space-x-1">
                      <div className="w-full h-3 bg-red-400/50 rounded-l-2xl" />
                      <div className="w-full h-3 bg-lime-600/40" />
                      <div className="w-full h-3 bg-amber-400/30 rounded-r-2xl" />
                    </div>
                    {/* Arrow Indicator */}
                    <div className="absolute -top-2 left-[20%] transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-black"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-zinc-700 w-16">
                    Rendah
                  </span>
                </div>
              </div>

              {/* Kalium */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center">
                    <span className="text-white text-3xl font-extrabold">
                      K
                    </span>
                  </div>
                  <span className="text-xl font-bold text-zinc-700">16</span>
                  <div className="flex-1 relative">
                    <div className="flex space-x-1">
                      <div className="w-full h-3 bg-red-400/50 rounded-l-2xl" />
                      <div className="w-full h-3 bg-lime-600/40" />
                      <div className="w-full h-3 bg-amber-400/30 rounded-r-2xl" />
                    </div>
                    {/* Arrow Indicator */}
                    <div className="absolute -top-2 left-[20%] transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-black"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-zinc-700 w-16">
                    Rendah
                  </span>
                </div>
              </div>

              {/* pH */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">pH</span>
                  </div>
                  <span className="text-xl font-bold text-zinc-700">16</span>
                  <div className="flex-1 relative">
                    <div className="flex space-x-1">
                      <div className="w-full h-3 bg-amber-300 rounded-l-2xl" />
                      <div className="w-full h-3 bg-green-700" />
                      <div className="w-full h-3 bg-purple-900 rounded-r-2xl" />
                    </div>
                    {/* Arrow Indicator */}
                    <div className="absolute -top-2 left-[40%] transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-black"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-zinc-700 w-16">
                    Rendah
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Fertilizer Inputs */}
            <div className="w-1/2 space-y-8">
              {/* Nitrogen Input */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-emerald-500">
                  NITROGEN (N)
                </h4>
                <div className="relative">
                  <select className="w-full p-2 border rounded-lg appearance-none bg-white pr-8">
                    <option>Urea</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Fosfor Input */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-emerald-500">
                  FOSFOR (P)
                </h4>
                <div className="relative">
                  <select className="w-full p-2 border rounded-lg appearance-none bg-white pr-8">
                    <option>SP36</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Kalium Input */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-emerald-500">
                  KALSIUM (K)
                </h4>
                <div className="relative">
                  <select className="w-full p-2 border rounded-lg appearance-none bg-white pr-8">
                    <option>KCL</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Pupuk Majemuk */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-emerald-500">
                  PUPUK MAJEMUK
                </h4>
                <div className="relative">
                  <select className="w-full p-2 border rounded-lg appearance-none bg-white pr-8">
                    <option>Phonska</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Rekomendasi Button */}
              <div className="pt-4">
                <a
                  href="/hasilanalisaalat"
                  className="w-full px-6 py-3 bg-emerald-500 text-white font-bold rounded hover:bg-emerald-600 transition-colors text-center block"
                >
                  REKOMENDASI PEMUPUKAN
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigationSearchHighlighted />
      </div>
    </div>
  );
}

export default Hasilanalisalahan;
