import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-[#dfe2f2] font-headline">
                Flyhigh
            </Link>
            <div className="hidden md:flex items-center space-x-10 font-headline tracking-tight">
                <Link className="text-[#dfe2f2]/70 hover:text-[#ffb0ca] transition-colors" to="/missions">Missions</Link>
                <Link className="text-[#dfe2f2]/70 hover:text-[#ffb0ca] transition-colors" to="/technology">Technology</Link>
                <Link className="text-[#dfe2f2]/70 hover:text-[#ffb0ca] transition-colors" to="/fleet">Fleet</Link>
                <Link className="text-[#dfe2f2]/70 hover:text-[#ffb0ca] transition-colors" to="/pricing">Pricing</Link>
            </div>
            <div className="flex items-center">
                <Link to="/get-started" className="gradient-button text-on-primary px-6 py-2.5 rounded-md font-label font-bold text-sm hover:opacity-80 transition-opacity duration-300 scale-95 hover:scale-100 ease-in-out">
                    Get Started
                </Link>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
