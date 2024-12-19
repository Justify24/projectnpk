import React, { useState } from "react";

const FormInput = () => {
  const [formData, setFormData] = useState({
    nama_lahan: "",
    luas_lahan: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Form Submitted");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-gray-600 text-lg font-bold mb-4">FORM INPUT</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input for Width */}
        <div>
          <label htmlFor="width" className="text-gray-500 font-semibold block mb-2">
            Nama Lahan
          </label>
          <input
            type="text"
            id="width"
            name="width"
            placeholder="Nama Lahan"
            value={formData.nama_lahan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Input for Length */}
        <div>
          <label htmlFor="length" className="text-gray-500 font-semibold block mb-2">
            Ukuran Lahan
          </label>
          <input
            type="text"
            id="length"
            name="length"
            placeholder="Ukuran Lahan"
            value={formData.luas_lahan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Input for Location */}
        <div className="md:col-span-2">
          <label htmlFor="location" className="text-gray-500 font-semibold block mb-2">
            Lokasi
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
