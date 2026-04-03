import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-background">
                <img 
                    className="w-full h-full object-cover opacity-70 mix-blend-lighten" 
                    alt="cinematic view of planet earth" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqHFtsDcVe0yCcpGWU-tjQb7XDYY9tDNSwUs64_eE9ficf6W0ffipGqUUnKYZBTm34Rz2ND1ZRQRc7m92lZmo7TqonBIwOV5pOgKpxZvNy1sEBIIZnHaP8LbnIP_wr-dqvmau1uik4y6Xwchab7CW1Je-YCrb7bAduzYWFdtKxNbqMHXEuOhcujWndZUIC8t4JDRMrtEBMu4GOfNVd_TnPGkwZqpQuMDDXnZFFlYdA7_o5lb-mkKCmmeYzyrku0uDG3Za7InrMfgo-"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background"></div>
            </div>
            
            <div className="container mx-auto px-8 relative z-10 pt-20 pb-32">
                <div className="max-w-4xl">
                    <span className="inline-block text-tertiary font-label text-sm uppercase tracking-[0.3em] mb-6 animate-pulse">
                        Establishing Orbit
                    </span>
                    <h1 className="font-headline font-bold text-[4rem] md:text-[5rem] leading-[0.9] tracking-tighter text-[#dfe2f2] mb-8">
                        Sky's No Longer <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">the Limit</span>
                    </h1>
                    <p className="text-lg text-on-surface-variant max-w-2xl mb-12 font-light leading-relaxed">
                        The next generation of celestial infrastructure is here. Orchestrate complex orbital maneuvers and starship logistics with the precision of a mission-critical command center.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link to="/get-started" className="gradient-button neon-glow-primary text-on-primary px-10 py-4 rounded-md font-label font-bold tracking-wide transition-all hover:brightness-110 active:scale-95 text-center">
                            Get Started
                        </Link>
                        <Link to="/fleet" className="bg-surface-container-high text-primary px-10 py-4 rounded-md font-label font-bold tracking-wide hover:bg-surface-container-highest transition-colors text-center border-none">
                            Explore Fleet
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
