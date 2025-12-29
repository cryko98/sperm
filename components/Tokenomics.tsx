
import React from 'react';

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center p-8 bg-black border border-white/10 rounded-2xl relative group overflow-hidden">
    <span className="text-xs uppercase tracking-[0.2em] mb-2 opacity-50">{label}</span>
    <span className="text-4xl font-bold tracking-tighter">{value}</span>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
  </div>
);

export const Tokenomics: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-16 uppercase tracking-tighter">Swimmer Stats</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard label="Total Supply" value="1,000,000,000" />
        <StatCard label="Taxes" value="0 / 0" />
        <StatCard label="Liquidity" value="Burned" />
      </div>

      <div className="mt-16 p-12 bg-white text-black rounded-3xl text-left relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-black italic mb-4">FAIR LAUNCH. NO PRE-SALE.</h3>
          <p className="text-lg font-medium opacity-80 leading-relaxed max-w-3xl">
            $SPERM follows the laws of nature. Only the strongest holders survive. 
            All liquidity is permanently locked and burned to ensure the integrity of the race.
          </p>
        </div>
        
        {/* Visual liquid blobs background */}
        <div className="absolute top-1/2 -right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-black/5 animate-pulse"></div>
      </div>
    </div>
  );
};
