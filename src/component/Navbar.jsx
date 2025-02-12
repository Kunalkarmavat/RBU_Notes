import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.svg";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center m-auto w-5/6 mt-8  ">
      {/* Logo */}
      <div>
        <div className='w-60'>
          <img src={logo} alt="Logo" className='w-full' />

        </div>
      </div>

      <div className='flex space-x-12 items-center pr-12'>
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between space-x-6">
          <li className="pl-4"><a href="/">HOME</a></li>
          <li className="pl-4"><a href="/about">ABOUT</a></li>
        </ul>

        {/* Registration Button */}
        <button className="hidden md:block hover:bg-black hover:text-white r px-12 py-2 border border-black">
          CONTACT
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-10" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white hidden md:flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <ul className="text-center space-y-6">
          <li className="text-lg"><a href="#">Home</a></li>
          <li className="text-lg"><a href="#">About</a></li>
          <li className="text-lg"><a href="#">Event</a></li>
        </ul>
        <button className="mt-8 hover:bg-black hover:text-white rounded-2xl px-8 py-2 border border-black">
          Registration
        </button>
      </div>
    </div>
  );
}

export default Navbar;
