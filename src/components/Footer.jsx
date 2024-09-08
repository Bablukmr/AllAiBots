import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis justo eget diam efficitur, a
              venenatis tortor feugiat.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Services</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">About</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">Phone: +91 9390991899</li>
              <li className="text-sm">Email: info@allaibot.com</li>
              <li className="text-sm">Address: Patna, Bihar</li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 AllAiBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
