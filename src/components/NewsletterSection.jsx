import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="py-24 px-8">
            <div className="max-w-6xl mx-auto glass-panel p-16 rounded-2xl relative overflow-hidden group border border-outline-variant/20">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-1000"></div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Secure Your Transmission</h2>
                        <p className="text-on-surface-variant text-lg">Join 50,000+ commanders receiving the latest in orbital technology and mission updates.</p>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            className="bg-surface-container-high outline-none text-on-surface border-none rounded-md px-6 py-4 flex-grow focus:ring-2 focus:ring-tertiary transition-all placeholder:text-on-surface-variant/40" 
                            placeholder="commander@fleet.orbit" 
                            type="email"
                        />
                        <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-md font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,219,233,0.2)]">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
