// Navbar.js
import React from 'react';
import logo from "../assets/react.svg"
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span className="text-white text-lg font-semibold">MySite</span>
        </div>
        
        {/* Site name in the middle (random name "MySite") */}
        <span className="text-white text-lg font-semibold">MySite</span>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
