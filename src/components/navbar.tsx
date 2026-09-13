import React from 'react';
import NavLogo from "../assets/logo-text.png"

const NavBar = () => {
  return (
     <div className='bg-[#FFFFFF] sticky top-0 z-50'>
    <div className='flex justify-between items-center max-w-[90%] mx-auto py-4'>

      <img src={NavLogo} alt="" />

      <ul className='flex items-center gap-5'>
        <li className='text-[#DB2777]'>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='flex gap-4 items-center'>
        <button>Sign In</button>
        <button className='bg-[#D91B7E] border rounded-2xl px-3 py-1 text-white'>Sign Up</button>
      </div>
      
    </div>
   </div>
  );
};

export default NavBar;