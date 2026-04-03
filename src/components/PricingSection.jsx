import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <section className="py-32 bg-surface">
            <div className="container mx-auto px-8 max-w-screen-2xl">
                <div className="text-center mb-20">
                    <h2 className="font-headline text-5xl font-bold text-[#dfe2f2] mb-6">Celestial Access</h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">
                        Flexible operational tiers designed for everyone from independent prospectors to planetary governments.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    
                    {/* Lite Tier */}
                    <div className="glass-panel p-10 rounded-xl flex flex-col hover:border-outline-variant/30 transition-all">
                        <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">Discovery</div>
                        <h3 className="font-headline text-3xl font-bold text-on-surface mb-6">Lite</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">$99</span>
                            <span className="text-on-surface-variant ml-2">/ lunar cycle</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                Single Orbit Vector
                            </li>
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                Basic Telemetry
                            </li>
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                10TB Data Stream
                            </li>
                        </ul>
                        <Link to="/get-started" className="block text-center w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-md hover:bg-surface-bright transition-colors">
                            Initialize
                        </Link>
                    </div>
                    
                    {/* Pro Tier */}
                    <div className="glass-panel p-10 rounded-xl flex flex-col border border-primary/30 relative void-shadow transform lg:-translate-y-4">
                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                            Standard Ops
                        </div>
                        <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Command</div>
                        <h3 className="font-headline text-3xl font-bold text-on-surface mb-6">Pro</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold text-primary">$499</span>
                            <span className="text-on-surface-variant ml-2">/ lunar cycle</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-center text-on-surface">
                                <span className="material-symbols-outlined text-sm mr-3 text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                Multi-Orbit Vectors
                            </li>
                            <li className="flex items-center text-on-surface">
                                <span className="material-symbols-outlined text-sm mr-3 text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                Real-time AI Navigation
                            </li>
                            <li className="flex items-center text-on-surface">
                                <span className="material-symbols-outlined text-sm mr-3 text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                Unlimited Telemetry
                            </li>
                            <li className="flex items-center text-on-surface">
                                <span className="material-symbols-outlined text-sm mr-3 text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                Starship Fleet Sync
                            </li>
                        </ul>
                        <Link to="/get-started" className="block text-center w-full py-4 gradient-button text-on-primary font-bold rounded-md hover:opacity-90 neon-glow-primary transition-all">
                            Launch Enterprise
                        </Link>
                    </div>

                    {/* Galactic Tier */}
                    <div className="glass-panel p-10 rounded-xl flex flex-col hover:border-outline-variant/30 transition-all">
                        <div className="font-label text-xs uppercase tracking-widest text-tertiary mb-4">Imperial</div>
                        <h3 className="font-headline text-3xl font-bold text-on-surface mb-6">Galactic</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">$2,499</span>
                            <span className="text-on-surface-variant ml-2">/ lunar cycle</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                Custom Star-Gate Protocols
                            </li>
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                Planetary Governance Access
                            </li>
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                Quantum Encryption Keys
                            </li>
                            <li className="flex items-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm mr-3 text-tertiary">check</span>
                                White-glove Support
                            </li>
                        </ul>
                        <Link to="/contact" className="block text-center w-full py-3 bg-tertiary-container text-tertiary font-bold rounded-md hover:bg-tertiary-container/80 transition-colors">
                            Contact Admiralty
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingSection;
