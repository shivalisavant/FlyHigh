import React from 'react';

const MockPage = ({ title, subtitle }) => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/10 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-8 relative z-10 text-center">
                <span className="inline-block text-tertiary font-label text-sm uppercase tracking-[0.3em] mb-6 shadow-[0_0_10px_rgba(0,219,233,0.3)] bg-tertiary/10 px-4 py-1 rounded-full">
                    Under Construction
                </span>
                
                <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter text-[#dfe2f2] mb-6">
                    {title}
                </h1>
                
                <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed mb-12">
                    {subtitle || "This sector of the celestial infrastructure is currently undergoing maintenance. Please return to the command center."}
                </p>
                
                <div className="inline-block animate-pulse text-primary font-bold tracking-widest uppercase font-label">
                    Establishing Uplink...
                </div>
            </div>
        </section>
    );
};

export default MockPage;
