import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
        </div>
        <p className="mt-6">&copy; 2024 Sway Travel & Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
