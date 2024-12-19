import React, { useState, useEffect } from "react";
import {
  MapPin,
  Globe,
  Cloud,
  Clock,
  MapPin as MapPinIcon,
} from "lucide-react";
import BottomNavigation from "../../../components/users-component/bottombar/bottombar";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Token:", localStorage.getItem("token"));
    setUserData(user);
  }, []);

  const menuItems = [
    { icon: <Globe />, label: "Lahan" },
    { icon: <Globe />, label: "Cuaca" },
    { icon: <Globe />, label: "Panen" },
    { icon: <Globe />, label: "Pupuk" },
    { icon: <Globe />, label: "Hama" },
    { icon: <Globe />, label: "Bantuan" },
  ];

  return (
    <div className="min-h-screen bg-emerald-500">
      {/* Header Profile Section */}
      <div className="bg-emerald-500 p-4 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={`https://ui-avatars.com/api/?name=${
                userData?.nama_pengguna || "User"
              }&background=random`}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-xl font-semibold">
              {userData?.nama_pengguna || "Loading..."}
            </h1>
          </div>

          {/* Location Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <MapPinIcon className="text-white" size={20} />
              <div>
                <p className="text-sm text-white">
                  {userData?.alamat || "Alamat belum diisi"}
                </p>
                <p className="text-xs text-white/80">
                  {new Date().toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="text-2xl font-bold">35°</div>
          </div>
        </div>
      </div>

      {/* Menu Grid Section */}
      <div className="bg-gray-50 min-h-screen rounded-t-3xl -mt-4">
        <div className="container mx-auto max-w-6xl px-4 pt-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center aspect-square"
              >
                {item.icon}
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Carousel Section */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Carousel"
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>

          {/* Card Utama */}
          <h2 className="text-xl font-bold mb-4">LAHAN ANDA</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <div className="flex items-start gap-4">
              {/* Icon Padi */}
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/wheat-awn.svg"
                  alt="Padi"
                  className="w-8 h-8"
                  style={{
                    filter:
                      "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(95%)",
                  }}
                />
              </div>

              {/* Informasi Padi */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <a href="/hasilanalisalahan">
                      <h2 className="text-lg font-bold">
                        <span className="text-emerald-600">Padi</span>
                        <span className="text-gray-800"> Raja Lele</span>
                      </h2>
                    </a>
                    <p className="text-gray-400 text-sm">
                      Ditanam 23 Januari 2021
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-gray-400" />
                    <span className="text-xl font-bold">26</span>
                  </div>
                </div>

                {/* Tags dan Info */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-full">
                    HST 30
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>1 Bulan</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Sawah Cangkringan</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                    1 hektar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">LATEST NEWS</h2>

            {/* Main News Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
              <img
                src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="News"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="mr-2">Admin</span>
                  <span>4 min ago</span>
                </div>
              </div>
            </div>

            {/* Small News Cards */}
            {[
              {
                title:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting...",
                image:
                  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting...",
                image:
                  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white p-4 rounded-xl shadow-sm mb-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span className="mr-2">Admin</span>
                    <span>4 min ago</span>
                  </div>
                </div>
                <img
                  src={item.image}
                  alt="News thumbnail"
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
            ))}

            <button className="w-full py-3 bg-gray-100 text-blue-500 rounded-xl font-medium flex items-center justify-center gap-2">
              LOAD MORE
              <svg
                className="animate-spin h-4 w-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
