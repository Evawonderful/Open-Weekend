import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import adventure from '../assets/adventure.png'
const SignUp = () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-1/2 shadow-md rounded-lg flex">
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-5">Create Account</h2>
          {/* <p className="mb-5 text-gray-500">Hey Adventurer! Welcome back</p> */}
          {/* <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="www.xhuli@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
            <Link to="/forgot-password"><a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a></Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Log in
            </button>
          </form> */}
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
          <div className="text-center mt-6">
            <p className="text-sm">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
                </Link>
            </p>
            <div className="mt-4">
              <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${adventure})` }}></div>
          <div className="absolute w-1/5 top-60 m-6 text-black p-3 bg-white rounded-lg z-10">
          <h2 className="text-xs font-bold">Did you know?</h2>
          <p className="mt-2">
            Calabar Carnival, "Africa's Biggest Street Party," is a month-long celebration of music, dancing, and colorful costumes. It is a celebration of Nigeria's cultural history that brings people from all over the world.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
