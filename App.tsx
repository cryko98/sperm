
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
