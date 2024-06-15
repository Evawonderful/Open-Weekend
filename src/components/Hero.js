import React from 'react';
import flyImage from '../assets/fly.png';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${flyImage})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto text-center text-white py-32">
        <h1 className="text-4xl md:text-6xl font-bold mt-40 mb-6">DISCOVER YOUR NEXT ADVENTURE...</h1>
        <p className="text-xl mb-4">Find out the latest events in your new location.</p>
        <div className="flex justify-center mt-4">
          <input type="text" className="p-5 rounded-l-3xl w-1/3 md:w-1/4 text-black" placeholder="Enter your location" />
          <button className="bg-blue-600 p-5 text-sm rounded-r-3xl">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
