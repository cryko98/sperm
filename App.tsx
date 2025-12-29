
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContractAddress } from './components/ContractAddress';
import { Tokenomics } from './components/Tokenomics';
import { HowToBuy } from './components/HowToBuy';
import { Footer } from './components/Footer';
import { DripOverlay } from './components/DripOverlay';
import { MiniGame } from './components/MiniGame';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center">
      <DripOverlay />
      
      <div className="w-full max-w-6xl px-4 z-10">
        <Navbar />
        
        <main className="space-y-32 py-20">
          <Hero />

          <section id="video" className="scroll-mt-24 w-full flex flex-col items-center">
            <div className="w-full max-w-4xl aspect-video bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/GYVoND3GBTo?autoplay=0&mute=0" 
                title="SPERM Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="grayscale contrast-125"
              ></iframe>
              {/* Decorative Drip */}
              <div className="absolute -bottom-1 left-1/4 w-3 h-10 bg-white rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-1 right-1/4 w-2 h-6 bg-white rounded-full opacity-20"></div>
            </div>
          </section>
          
          <section id="ca" className="scroll-mt-24">
            <ContractAddress />
          </section>

          <section id="tokenomics" className="scroll-mt-24">
            <Tokenomics />
          </section>

          <section id="game" className="scroll-mt-24 flex flex-col items-center">
             <h2 className="text-5xl font-bold mb-10 uppercase tracking-tighter text-center">The Great Race</h2>
             <MiniGame />
          </section>

          <section id="how-to-buy" className="scroll-mt-24">
            <HowToBuy />
          </section>

          <section id="chart" className="scroll-mt-24 w-full flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-10 uppercase tracking-tighter text-center">Live Swimmer Chart</h2>
            <div className="w-full aspect-video md:aspect-[21/9] bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <iframe 
                src="https://dexscreener.com/solana/8a9vJCNjiM7LW43JeAYjf4FDVzi2qhoEF4fCWqwgpump?embed=1&theme=dark"
                className="w-full h-full border-0"
                title="Dexscreener Chart"
              ></iframe>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
