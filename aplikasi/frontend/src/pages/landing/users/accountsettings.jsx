import React, { useState, useEffect } from "react";
import BottomNavigationProfileHighlighted from "../../../components/users-component/bottombar/bottombar-account";

const AccountSettings = () => {
  const [userData, setUserData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    bio: '',
    location: ''
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);
    if (user) {
      setFormData({
        email: user.token || '',
        password: user.password || '',
        bio: user.bio || '',
        location: user.location || ''
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const updatedUser = await response.json();
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUserData(updatedUser);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-gray-200 pb-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1587202372775-54c9d3c8e689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-grow container mx-auto p-6">
        <nav className="text-black font-bold my-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 19a7.968 7.968 0 011.879-2.243A7.968 7.968 0 0112 16a7.968 7.968 0 015 1.757A7.968 7.968 0 0118.879 19M12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <div>
              <h1 className="text-xl font-bold text-gray-800">PROFILE</h1>
            </div>
          </div>

          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-teal-600 hover:text-teal-800">Home</a>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <a href="#" className="text-gray-500">Profile</a>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${userData?.nama_pengguna || 'User'}&background=random`}
                alt="Profile"
                className="rounded-full w-24 h-24 mb-4 shadow-lg border-4 border-gray-300"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {userData?.nama_pengguna || 'Loading...'}
              </h2>
              <p className="text-sm text-gray-500 mb-6">{userData?.role || 'User'}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-2">ABOUT ME:</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600 pb-2">
                  <span className="font-bold mr-2">Username:</span>
                  <span className="text-gray-400">{userData?.nama_pengguna || 'Loading...'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 pb-2">
                  <span className="font-bold mr-2">Email:</span>
                  <span className="text-gray-400">{userData?.email || 'Loading...'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-bold mr-2">Location:</span>
                  <span className="text-gray-400">{userData?.alamat || 'Not set'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              PERSONAL INFO
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows="6"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Write something..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                ></textarea>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                >
                  <option value="">Select your location</option>
                  <option value="IDN">Indonesia</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AUS">Australia</option>
                  <option value="CAN">Canada</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BottomNavigationProfileHighlighted />
    </div>
  );
};

export default AccountSettings;