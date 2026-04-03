import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/15 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <div className="text-lg font-black text-[#dfe2f2] font-headline mb-4 uppercase tracking-tighter">Flyhigh</div>
                    <p className="text-[#dfe2f2]/50 font-label text-sm uppercase tracking-widest">© 2024 Flyhigh Celestial Systems. All rights reserved.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-label text-sm uppercase tracking-widest">
                    <Link className="text-[#dfe2f2]/50 hover:text-tertiary transition-colors" to="/privacy">Privacy Policy</Link>
                    <Link className="text-[#dfe2f2]/50 hover:text-tertiary transition-colors" to="/terms">Terms of Orbit</Link>
                    <Link className="text-[#dfe2f2]/50 hover:text-tertiary transition-colors" to="/telemetry">Telemetry</Link>
                    <Link className="text-[#dfe2f2]/50 hover:text-tertiary transition-colors" to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
