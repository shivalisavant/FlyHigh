import React from 'react';

const FeaturesGrid = () => {
    const features = [
        {
            title: "Quantum Telemetry",
            desc: "Real-time data streaming across light-years with zero latency degradation using entangled link nodes.",
            icon: "rocket_launch",
            bgIcon: "query_stats",
            iconBgColor: "bg-tertiary-container text-tertiary"
        },
        {
            title: "Orbit Management",
            desc: "AI-driven debris avoidance and trajectory optimization for high-density traffic corridors.",
            icon: "orbit",
            bgIcon: "all_inclusive",
            iconBgColor: "bg-primary-container text-primary"
        },
        {
            title: "Starship Logistics",
            desc: "End-to-end cargo manifest tracking from lunar colonies to deep space fabrication outposts.",
            icon: "conveyor_belt",
            bgIcon: "inventory_2",
            iconBgColor: "bg-surface-container-highest text-secondary"
        }
    ];

    return (
        <section className="py-32 bg-surface-container-low relative">
            <div className="container mx-auto px-8 max-w-screen-2xl">
                <div className="flex flex-col xl:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <h2 className="font-headline text-4xl font-bold text-[#dfe2f2] mb-4">Precision Primitives</h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed">Engineered for the infinite void, our tools provide unparalleled telemetry and logistics control.</p>
                    </div>
                    <div className="h-[1px] flex-grow bg-outline-variant/15 mx-12 hidden lg:block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="group p-8 rounded-xl bg-surface-container transition-all duration-500 hover:bg-surface-container-high relative overflow-hidden border border-outline-variant/10">
                            <div className={`mb-12 inline-flex items-center justify-center w-14 h-14 rounded-lg group-hover:scale-110 transition-transform ${feature.iconBgColor}`}>
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">{feature.title}</h3>
                            <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
                            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-[10rem]">{feature.bgIcon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
