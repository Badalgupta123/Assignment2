
import React from 'react';
import img from "../assets/sport.jpg"

const Header = () => {
   
    return (
      <header className=" h-[45%] mb-2">
      <img src={img} alt="Background" className="w-full h-full" />
    </header>
    );
  };
  
  export default Header;
