import React from 'react';

const WhychooseUS = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-40 pb-40">
      <p className="text-lg font-medium leading-8 text-gray-500 text-center">
        WHY CHOOSE US?
      </p>
      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
        Comprehensive Programs
      </h1>
      <h2 className="text-lg font-medium text-green-600 pb-6 text-center">
        For helping the economy and trade
      </h2>
      <img
          className="w-full lg:w-[6%] mb-4"
          src="../../src/assets/border.png"
          alt="Agrinutri Border"
        />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://png.pngtree.com/background/20230424/original/pngtree-asian-farmer-digging-mud-in-the-rice-field-picture-image_2458116.jpg"
            alt="Farmer in the field"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-left">The Coldest Sunset</div>
            <p className="text-gray-700 text-base text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://png.pngtree.com/background/20230424/original/pngtree-asian-farmer-digging-mud-in-the-rice-field-picture-image_2458116.jpg"
            alt="Farmer in the field"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-left">The Golden Hour</div>
            <p className="text-gray-700 text-base text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://png.pngtree.com/background/20230424/original/pngtree-asian-farmer-digging-mud-in-the-rice-field-picture-image_2458116.jpg"
            alt="Farmer in the field"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-left">A Peaceful Moment</div>
            <p className="text-gray-700 text-base text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhychooseUS;
