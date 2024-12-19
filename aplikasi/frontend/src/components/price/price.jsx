import React from "react";

function Price() {
  const plans = [
    {
      title: "Basic Plan",
      price: "$25",
      description: "/ month",
      features: [
        "Pemantauan kelembapan tanah",
        "Rekomendasi pemupukan dasar",
        "Laporan data harian",
        "Dukungan via email",
      ],
    },
    {
      title: "Standard Plan",
      price: "$50",
      description: "/ month",
      features: [
        "Semua fitur Basic Plan",
        "Rekomendasi berbasis data historis",
        "Pemantauan suhu dan pH tanah",
        "Dukungan prioritas",
      ],
    },
    {
      title: "Premium Plan",
      price: "$100",
      description: "/ month",
      features: [
        "Semua fitur Standard Plan",
        "Integrasi perangkat IoT tambahan",
        "Layanan konsultasi agronomis",
        "Pelaporan mingguan terperinci",
      ],
    },
  ];

  return (
    <>
      <div className="container mx-auto px-6 text-center pt-20 pb-20">
        {/* Section Title */}
        <div className="mb-12 text-left">
          <h3 className="text-sm font-medium uppercase text-gray-500 mb-2">
            Who are Agrinutri
          </h3>
          <h1 className="text-3xl font-bold text-gray-800">
            Pricing Structure
          </h1>
          <p className="text-green-500 font-medium">
            For helping the economy and trade
          </p>
          <img
            className="w-full lg:w-[6%] mb-4 pt-5 pb-5"
            src="../../src/assets/border.png"
            alt="Agrinutri Border"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <h2 className="text-sm font-medium uppercase text-gray-500 mb-2">
                {plan.title}
              </h2>
              <p className="text-4xl font-bold text-gray-800 mb-2">
                {plan.price}
              </p>
              <span className="text-sm text-gray-500 mb-4">
                {plan.description}
              </span>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Price;
