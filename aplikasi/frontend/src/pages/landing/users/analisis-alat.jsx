import React, { useState, useEffect } from "react";
import { AlertCircle, Home, ChevronRight } from "lucide-react";
import BottomNavigationSearchHighlighted from "../../../components/users-component/bottombar/bottombar-analisis";
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect after submission

const AnalisisAlat = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nama_lahan: "",
    luas_lahan: "",
    location: "",
  });

  // Initialize navigation hook
  const navigate = useNavigate();

  // Device configuration
  const alat = {
    link_thinger: "https://backend.thinger.io/v3/users/Justify24/devices/Serial_ThingerIoT_AgrinutriIoT_1/resources/Dataku",
    token_thinger: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJTZXJpYWxfVGhpbmdlcklvVF9BZ3JpbnV0cmlJb1RfMSIsImlhdCI6MTczMjczNDAzMiwianRpIjoiNjc0NzZjNTBiNDNiODMxNGFlMGRkZWQ4Iiwic3ZyIjoiYXAtc291dGhlYXN0LmF3cy50aGluZ2VyLmlvIiwidXNyIjoiSnVzdGlmeTI0In0.fDjX47FiyVixITMDsGHxl5u1t8giKluWODEFpfLpR28",  // Replace with your actual token
    user_id: 13,
  };

  // Fetch sensor data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(alat.link_thinger, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${alat.token_thinger}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSensorData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch sensor data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
    // Poll every 5 seconds
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [alat.link_thinger, alat.token_thinger]);

  // Handle form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    // Define the sensor data structure based on your form input
    const sensorPayload = {
      ph: sensorData?.ph,        // Static data for testing purposes
      fosfor: sensorData?.p,
      kalium: sensorData?.k,
      moisture: sensorData?.moisture,
      suhu: sensorData?.temperature,
      natrium: sensorData?.n,
    };

    try {
      // Send POST request to backend API to save the data
      const response = await fetch("http://127.0.0.1:8000/data-sensor/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sensorPayload), // Send sensor data
      });

      if (!response.ok) {
        throw new Error("Failed to submit data to the server.");
      }

      // If the request is successful, navigate to another page
      navigate("/hasilanalisalahan"); // Redirect to /hasilanalisalahan

    } catch (err) {
      console.error("Error submitting data:", err);
      setError("Failed to submit data. Please try again later.");
    }
  };

  // Result Card component for displaying sensor data
  const ResultCard = ({ title, value, unit = "" }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">
        {typeof value === "number" ? value.toFixed(2) : value} {unit}
      </p>
    </div>
  );

  const resultData = [
    { title: "pH Level", value: sensorData?.ph || "-", unit: "" },
    { title: "Kelembaban", value: sensorData?.moisture || "-", unit: "%" },
    { title: "EC Level", value: sensorData?.ec || "-", unit: "mS/cm" },
    { title: "Suhu", value: sensorData?.temperature || "-", unit: "°C" },
    { title: "Nitrogen (N)", value: sensorData?.n || "-", unit: "mg/kg" },
    { title: "Phosphorus (P)", value: sensorData?.p || "-", unit: "mg/kg" },
    { title: "Potassium (K)", value: sensorData?.k || "-", unit: "mg/kg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header and Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Analisis Alat
          </h1>
          <nav className="flex items-center text-sm">
            <Home className="w-4 h-4 text-gray-500" />
            <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
            <span className="text-gray-600">Analisis Alat</span>
          </nav>
        </div>

        {/* Status Section */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${
                loading ? "bg-yellow-500" : error ? "bg-red-500" : "bg-green-500"
              }`}
            ></div>
            <span className="font-medium text-gray-700">
              Status: {loading ? "Updating..." : error ? "Error" : "Online"}
            </span>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Sensor Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {loading && !sensorData ? (
            <div className="col-span-full text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading sensor data...</p>
            </div>
          ) : (
            resultData.map((item, index) => (
              <ResultCard
                key={index}
                title={item.title}
                value={item.value}
                unit={item.unit}
              />
            ))
          )}
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Input Data Lahan
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lahan
                </label>
                <input
                  type="text"
                  name="nama_lahan"
                  value={formData.nama_lahan}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan nama lahan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Luas Lahan
                </label>
                <input
                  type="text"
                  name="luas_lahan"
                  value={formData.luas_lahan}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan luas lahan"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan lokasi lahan"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigationSearchHighlighted />
      </div>
    </div>
  );
};

export default AnalisisAlat;
