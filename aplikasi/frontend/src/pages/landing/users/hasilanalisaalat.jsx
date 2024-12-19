import React from "react";
import "./css/bgui.css"; // CSS for background styles
import BottomNavigationSearchHighlighted from "../../../components/users-component/bottombar/bottombar-analisis";

const Hasilanalisaalat = () => {
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
            <h1 className="text-xl font-bold text-gray-800">Analisis Alat</h1>
          </div>
          <ol className="list-none p-0 flex items-center justify-between sm:justify-start space-x-6 flex-wrap">
            {/* Bagikan Section */}
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="w-7 h-7 bg-stone-300 rounded-full flex justify-center items-center">
                {/* Tambahkan ikon di sini jika ada */}
              </div>
              <div className="text-stone-300 text-xs font-medium font-nunito">
                Bagikan
              </div>
            </div>

            {/* Unduh Section */}
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="w-7 h-7 bg-gray-500 rounded-full flex justify-center items-center">
                {/* Tambahkan ikon di sini jika ada */}
              </div>
              <div className="text-gray-500 text-xs font-medium font-nunito">
                Unduh
              </div>
            </div>

            {/* Breadcrumb Section */}
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

        {/* Main Content */}
        <div className="w-full h-auto p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row justify-between gap-6 mb-10">
          {/* Informasi Lahan */}
          <div className="w-full lg:w-[427px] text-gray-600 text-xl font-bold pt-2">
            INFORMASI LAHAN
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="w-full text-gray-800 text-base font-normal pt-5 flex">
                <span className="w-48">Nama Lahan</span>: Pamali 3
              </div>
              <div className="w-full text-gray-800 text-base font-normal pt-3 flex">
                <span className="w-48">Tanaman</span>: Bawang Merah - Umbi
              </div>
              <div className="w-full text-gray-800 text-base font-normal pt-3 flex">
                <span className="w-48">Luas Lahan</span>: 5000 H
              </div>
              <div className="w-full text-gray-800 text-base font-normal pt-3 flex">
                <span className="w-48">Tanggal Pengecekan</span>: Rabu, 26 Juni
                2024
              </div>
              <div className="w-full text-gray-800 text-base font-normal pt-3 flex">
                <span className="w-48">Tanggal Pengecekan</span>: Rabu, 26 Juni
                2024
              </div>
            </div>
          </div>

          {/* Pupuk Utama */}
          <div className="w-full lg:w-[523px] bg-white shadow-lg rounded-lg p-6">
            {/* Pemupukan HST */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-md flex flex-col justify-center items-center">
                <span className="text-blue-500 text-sm">Jun</span>
                <span className="text-blue-500 text-lg font-bold">26</span>
              </div>
              <h3 className="text-gray-800 font-semibold text-lg">
                Pemupukan HST 10
              </h3>
            </div>

            {/* Detail Pupuk */}
            <div className="w-full text-gray-800 text-sm">
              <div className="grid grid-cols-3 border-b border-gray-200 pb-2">
                <span>Nama</span>
                <span className="text-center">Jumlah</span>
                <span className="text-right">Harga</span>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <span>SP-36</span>
                <span className="text-center">29 KG</span>
                <span className="text-right">Rp. 145,000</span>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <span>SP-36</span>
                <span className="text-center">29 KG</span>
                <span className="text-right">Rp. 145,000</span>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <span>SP-36</span>
                <span className="text-center">29 KG</span>
                <span className="text-right">Rp. 145,000</span>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <span>SP-36</span>
                <span className="text-center">29 KG</span>
                <span className="text-right">Rp. 145,000</span>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <span>KCL</span>
                <span className="text-center">20 KG</span>
                <span className="text-right">Rp. 88,000</span>
              </div>
              <div className="grid grid-cols-3 border-t border-gray-200 pt-2 mt-2">
                <span>Total</span>
                <span></span>
                <span className="text-right font-bold">Rp. 233,800</span>
              </div>
            </div>

            {/* Pupuk Tambahan */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-14 h-14 bg-blue-100 rounded-md flex flex-col justify-center items-center">
                <span className="text-blue-500 text-sm">Jun</span>
                <span className="text-blue-500 text-lg font-bold">26</span>
              </div>
              <h3 className="text-gray-800 font-semibold text-lg">
                Pupuk Tambahan
              </h3>
            </div>

            <div className="w-full flex flex-col justify-center items-center pt-10 gap-4">
              <h3 className="text-gray-800 text-lg font-semibold text-center">
                Aplikasi Pupuk Tambahan
              </h3>
              <div className="w-[160px] h-[87px] bg-green-100 rounded-md flex flex-col justify-center items-center p-4">
                <div className="text-green-500 text-base font-normal text-center">
                  Pupuk Kandang
                </div>
                <div className="text-green-500 text-lg font-bold mt-2 text-center">
                  5 Kg/ha
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigationSearchHighlighted />
      </div>
    </div>
  );
};

export default Hasilanalisaalat;
