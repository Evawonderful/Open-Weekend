import React from 'react';
import adventure from '../assets/adventure.png';

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an account!</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="flex items-center justify-center w-full py-2 border rounded-lg hover:bg-gray-100">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-start items-start bg-cover bg-center min-h-screen w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${adventure})` }}
        >
    
        </div>
        <div className="relative w-2/3 m-6 text-black p-6 bg-white rounded-lg z-10">
          <h2 className="text-sm font-bold">Did you know?</h2>
          <p className="mt-2">
            Calabar Carnival, "Africa's Biggest Street Party," is a month-long celebration of music, dancing, and colorful costumes. It is a celebration of Nigeria's cultural history that brings people from all over the world.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default SignUp;
