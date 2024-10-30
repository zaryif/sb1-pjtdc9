import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1517614134510-173805458c61?w=32&h=32&fit=crop&auto=format"
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-green-800 text-xl">E-Rickshaw</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Rides</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Support</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Sign In
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#" className="block py-2 text-gray-600">Home</a>
            <a href="#" className="block py-2 text-gray-600">Rides</a>
            <a href="#" className="block py-2 text-gray-600">Support</a>
            <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}