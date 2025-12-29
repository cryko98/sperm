
import React from 'react';

const RoadmapStep: React.FC<{ phase: string; title: string; items: string[] }> = ({ phase, title, items }) => (
  <div className="relative pl-12 pb-16 border-l border-white/20 group">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-white rounded-full ring-8 ring-black group-hover:scale-150 transition-transform"></div>
    <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">{phase}</div>
    <h3 className="text-2xl font-bold uppercase mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Roadmap: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold mb-20 text-center uppercase tracking-tighter">The Life Cycle</h2>
      
      <div className="flex flex-col">
        <RoadmapStep 
          phase="Phase 1" 
          title="The Ejaculation" 
          items={["Fair Launch on Pump.fun", "Community Building", "Twitter/Telegram Viral Push"]}
        />
        <RoadmapStep 
          phase="Phase 2" 
          title="The Journey" 
          items={["Raydium Listing", "CoinGecko & CMC Application", "Marketing Influencers Onboarded"]}
        />
        <RoadmapStep 
          phase="Phase 3" 
          title="The Conception" 
          items={["First Tier-2 Exchange Listing", "Strategic Partnerships", "SPERM Swap Utility Beta"]}
        />
        <RoadmapStep 
          phase="Phase 4" 
          title="New Life" 
          items={["Tier-1 Exchange Listings", "Global Brand Expansion", "Reaching the Moon"]}
        />
      </div>
    </div>
  );
};
