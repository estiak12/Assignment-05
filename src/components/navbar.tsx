import { useState } from "react";
import NavLogo from "../assets/logo-text.png";
import Hamburger from "../assets/hamburger.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[80%] mx-auto py-3">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <img src={Hamburger} alt="Menu" className="w-5 h-5" />
          </button>
          <img src={NavLogo} alt="DevStack" className="w-[95px] md:w-auto" />
          <ul className="hidden md:flex items-center gap-5">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-2 md:gap-4 items-center">
            <button className="text-sm">Sign In</button>

            <button className="bg-[#D91B7E] border rounded-2xl px-3 py-1 text-white text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 pt-4 pb-2 text-center border-t mt-3">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
