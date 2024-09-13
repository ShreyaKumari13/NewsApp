import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-blue-600">NEWSAPP</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-1000 text-2xl hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-1000 text-2xl hover:text-blue-600">Categories</a>
            <a href="#" className="text-gray-1000 text-2xl hover:text-blue-600">About</a>
            <a href="#" className="text-gray-1000 text-2xl hover:text-blue-600">Contact</a>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-600 text-3xl focus:outline-none">
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <a href="#" className="block py-2 px-4 text-gray-1000 text-xl hover:bg-blue-600 hover:text-white">Home</a>
            <a href="#" className="block py-2 px-4 text-gray-1000 text-xl hover:bg-blue-600 hover:text-white">Categories</a>
            <a href="#" className="block py-2 px-4 text-gray-1000 text-xl hover:bg-blue-600 hover:text-white">About</a>
            <a href="#" className="block py-2 px-4 text-gray-1000 text-xl hover:bg-blue-600 hover:text-white">Contact</a>
          </div>
        )}
      </nav>

      <section className="mt-10 bg-blue-600 text-white py-5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Stay Updated with the Latest News</h1>
          <p className="mt-4 text-lg">Breaking news from around the world, all in one place</p>
        </div>
      </section>
    </div>
  );
}

export default Navbar;


