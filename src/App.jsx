import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import InputField from './components/InputField';
import GlassPanel from './components/GlassPanel';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background ambient glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-tertiary/5 blur-[120px] pointer-events-none" />

      {/* Navigation Layer */}
      <nav className="w-full relative z-20 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-on-primary-container shadow-[0_0_15px_rgba(255,176,202,0.4)]" />
          <span className="font-display font-bold text-xl tracking-wide">Flyhigh</span>
        </div>
        
        <GlassPanel className="hidden md:flex gap-8 py-3 px-8 rounded-full !w-auto">
          <a href="#" className="font-label text-sm font-semibold text-on-surface hover:text-primary transition-colors">Platform</a>
          <a href="#" className="font-label text-sm font-semibold text-on-surface hover:text-primary transition-colors">Solutions</a>
          <a href="#" className="font-label text-sm font-semibold text-on-surface hover:text-primary transition-colors">Pricing</a>
        </GlassPanel>

        <Button variant="secondary" className="!py-2 text-sm">Sign In</Button>
      </nav>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 pt-20 pb-32 relative z-10 flex flex-col gap-32">
        {/* Asymmetrical Hero Section */}
        <section className="flex flex-col md:flex-row justify-between items-end gap-12 w-full">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="font-label text-tertiary text-sm font-bold uppercase tracking-[0.2em]">The Celestial Architect</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] font-bold">
              Engineering the<br />Next Frontier
            </h1>
          </div>
          <div className="flex flex-col gap-6 max-w-sm">
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              We move away from the flat, crowded dashboards of legacy SaaS and toward a high-end, editorial experience.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Button>Deploy Node</Button>
              <Button variant="tertiary">View Docs</Button>
            </div>
          </div>
        </section>

        {/* Technical Data & Interface Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          <Card className="col-span-1 lg:col-span-8 flex flex-col gap-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-bright/5 to-transparent pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-label uppercase tracking-widest text-sm text-on-surface-variant mb-2">System Telemetry</h3>
                <h2 className="font-display text-3xl font-semibold">Nebula Metrics</h2>
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_rgba(0,219,233,0.8)]" />
                <span className="font-label text-xs uppercase tracking-widest text-tertiary">Live</span>
              </div>
            </div>

            {/* Custom SVG Nebula Chart */}
            <div className="flex-1 min-h-[300px] w-full mt-4 relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-surface-bright/30" />
                ))}
              </div>
              
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Primary glow under the stroke */}
                <path 
                  d="M0,80 Q10,70 20,75 T40,60 T60,65 T80,30 T100,35" 
                  fill="none" 
                  stroke="rgba(255,176,202,0.4)" 
                  strokeWidth="6" 
                  className="filter blur-[8px]"
                />
                
                {/* Tertiary data line */}
                <path 
                  d="M0,80 Q10,70 20,75 T40,60 T60,65 T80,30 T100,35" 
                  fill="none" 
                  stroke="#00dbe9" 
                  strokeWidth="2.5" 
                />

                {/* Data Points */}
                <circle cx="40" cy="60" r="2.5" fill="#0f131e" stroke="#00dbe9" strokeWidth="1.5" />
                <circle cx="80" cy="30" r="2.5" fill="#0f131e" stroke="#00dbe9" strokeWidth="1.5" />
              </svg>
            </div>
          </Card>

          <Card recessed className="col-span-1 lg:col-span-4 flex flex-col gap-8">
            <div>
              <h3 className="font-label uppercase tracking-widest text-sm text-on-surface-variant mb-2">Access Portal</h3>
              <h2 className="font-display text-3xl font-semibold">Configuration</h2>
            </div>
            
            <div className="flex flex-col gap-6 mt-4">
              <InputField label="Cluster ID" placeholder="e.g. ALPHA-904" />
              <InputField label="API Key" type="password" placeholder="••••••••••••••••" />
              <div className="pt-4">
                <Button className="w-full">Initialize</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Table Section */}
        <section className="flex flex-col gap-6">
          <h2 className="font-display text-4xl font-semibold mb-6">Active Instances</h2>
          <div className="flex flex-col gap-3">
             <div className="grid grid-cols-4 px-6 pb-2 border-b border-surface-container-highest">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Name</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Status</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Latency</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant text-right">Region</span>
             </div>
             
             {[
               { id: "Instance_01", status: "Healthy", ping: "24ms", region: "US-EAST" },
               { id: "Instance_02", status: "Degraded", ping: "142ms", region: "AP-SOUTH" },
               { id: "Instance_03", status: "Healthy", ping: "12ms", region: "EU-WEST" }
             ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 px-6 py-4 bg-surface-container-low rounded-lg hover:bg-surface-container-highest transition-colors items-center group cursor-pointer">
                  <span className="font-display font-semibold transition-colors group-hover:text-primary">{row.id}</span>
                  <span className={`font-label text-sm ${row.status === 'Healthy' ? 'text-primary' : 'text-error'}`}>{row.status}</span>
                  <span className="font-body text-sm text-on-surface-variant">{row.ping}</span>
                  <span className="font-label text-sm text-right text-on-surface">{row.region}</span>
                </div>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
