import React from "react";
import bgHero from '../../assets/bg-hero.png';

const Hero = () => {
  return (
    <section 
      className="h-screen w-full flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${bgHero})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw'
      }}
    >
      <div className="mx-auto w-full px-6 text-center">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-white">
            Welcome To AgrinutriioT
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">
            Nutrisi Terbaik dari Alam Untuk 
            <p>Masa Depan Sehat</p>
          </h1>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#"
            className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 flex items-center gap-2"
          >
            Get started for free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;