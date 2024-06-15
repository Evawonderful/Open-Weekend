import React from 'react';
import logo from '../assets/sway.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="">
          <img src={logo} alt='logo' />
           </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Destinations</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Events</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Sign Up</button>
          <button className="bg-transparent text-blue-600 py-2 px-4 ml-2">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
