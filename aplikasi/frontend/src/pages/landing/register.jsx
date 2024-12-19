import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
  // State untuk menyimpan input form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "", // Menggunakan 'name' sesuai dengan format input baru
    role: "user", // default role is 'user'
  });

  // State untuk menangani error dan status pengiriman
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Mengirim request ke backend dengan data yang sudah dipetakan
      const response = await axios.post("http://127.0.0.1:8000/auth/register", {
        email: formData.email,
        password: formData.password,
        name: formData.name, // Kirim 'name' ke backend
      });

      // Menangani respon sukses
      if (response.status === 201) {
        alert("User berhasil dibuat!");
        console.log(response.data);
      }
    } catch (err) {
      // Menangani error
      setError("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1527192086816-fb47e2eafd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJhY2tncm91bmR8ZW58MHx8fHwxNjg4NTA1NjUw&ixlib=rb-1.2.1&q=80&w=1080')`,
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm bg-opacity-90">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Sign Up
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Don’t have an account? Create your account, it takes less than a minute.
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name" // Gunakan 'name' di sini sesuai input baru
              placeholder="Enter your username"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-gray-900"
            >
              I accept Terms & Conditions
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
