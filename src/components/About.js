import React from 'react';
import location1 from '../assets/location1.png'
import location2 from '../assets/location2.png'
import arrow from '../assets/Arrow.png'
const About = () => {
  return (
    <section className="py-20">
      <div className="flex justify-between mx-auto container p-6">
            <div className='w-1/2'>
                <img src={location1} alt="New Location" className="mx-auto mb-6" />
            </div>
            <div className='text-left w-1/2 p-8'>
                <h2 className="text-4xl font-light mb-6 ">Are you in a new location?</h2>
                <p className="text-gray-700 mb-6 font-light text-xl text-justify">Sway is a travel technology that opens you up to latest events, fun activities, religious events, corporate workshops, sports events, tourism attractions, and entertainment events in your new location.</p>
            </div>
      </div>

        <div className="flex justify-between mx-auto container p-6">
            <div className='text-left w-1/2 p-8'>
                <h2 className="text-4xl font-light mb-6 px-8">Need things to do?</h2>
                <p className="text-gray-700 mb-6 font-light text-xl text-justify px-8">Sway can help you find your next adventure in your new city!</p>
                <a href='#' className='text-blue-600 px-8'>Check our list of activities</a>
            </div>
            <div className='w-1/2'>
                <img src={location2} alt="New Location" className="mx-auto mb-6" />
            </div>
       </div>
   
    </section>
  );
};

export default About;
