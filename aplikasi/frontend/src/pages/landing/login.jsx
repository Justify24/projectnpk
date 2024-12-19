import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginPage() {
  const navigate = useNavigate(); // Create navigate function using useNavigate
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // To handle loading state

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      // Send login request to backend
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        formData
      );

      if (response.status === 200) {
        // Cek apakah token ada dalam response
        const token = response.data.data.token;

        if (token) {
          // Store the token and user data in localStorage
          localStorage.setItem("token", token); // Save token to localStorage
          localStorage.setItem("user", JSON.stringify(response.data.data.user)); // Save user data

          // Log the token and user data to check if everything is working fine
          console.log("Token:", localStorage.getItem("token"));
          console.log("User data:", JSON.parse(localStorage.getItem("user")));

          // Redirect to dashboard page after successful login
          navigate("/dashboard"); // Redirect using navigate
        } else {
          setError("Login failed, no token returned.");
        }
      }
    } catch (err) {
      // If login fails, display error message
      if (err.response && err.response.data.message) {
        setError(err.response.data.message); // Show the error message from the backend
      } else {
        setError("An error occurred. Please try again."); // Generic error message
      }
      console.error(err);
    } finally {
      setLoading(false); // Set loading state to false after the request
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1587202372775-54c9d3c8e689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')`,
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm bg-opacity-90">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Sign In
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Enter your email and password to access the website
        </p>

        {/* Display error message if login fails */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
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
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <div className="border-t w-full"></div>
          <p className="text-sm text-gray-500 mx-2">Or</p>
          <div className="border-t w-full"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <img
              src="https://pluspng.com/img-png/google-logo-png-open-2000.png"
              alt="Google"
              className="h-5 w-5"
            />
            <span>Google</span>
          </button>

          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-5 w-5"
            />
            <span>Facebook</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
