import React from "react";

const AboutUS = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
      <div className="w-full lg:w-6/12 lg:pt-8">
        <div className="grid md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <img
              className="w-full lg:w-[90%]"
              src="../../src/assets/petani.png"
              alt="Agrinutri Farmer"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <p className="text-lg font leading-8 text-gray-500 text-left">
            ABOUT US
          </p>
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-left">
          What is AgrinutriIoT?
        </h1>
        <h2 className="text-lg font-medium text-green-600 pb-2 text-left">
          For helping the economy and trade
        </h2>
        <img
          className="w-full lg:w-[15%] mb-4"
          src="../../src/assets/border.png"
          alt="Agrinutri Border"
        />
        <p className="font-normal text-base leading-6 text-black text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p className="font-normal text-base leading-6 text-black mt-4 text-left">
          Vivamus tellus enim, euismod euismod laoreet nec, aliquet ut metus.
          Cras feugiat turpis varius pellentesque eleifend. Vivamus porta ipsum
          diamy ac congue felis imperdiet vitae duis porttitor.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
