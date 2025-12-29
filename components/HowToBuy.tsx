import React from 'react';

const Step: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="flex gap-4 md:gap-6 group">
    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center text-xl md:text-3xl font-black">
      {num}
    </div>
    <div className="flex flex-col">
      <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter mb-1">{title}</h4>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const HowToBuy: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="px-2">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 uppercase tracking-tighter">How to Join<br className="hidden md:block" />The Race</h2>
        <div className="space-y-8 md:space-y-12">
          <Step 
            num="01" 
            title="Get Phantom" 
            desc="Download the Phantom wallet extension or mobile app. This is your vessel for the Solana ecosystem."
          />
          <Step 
            num="02" 
            title="Refuel with SOL" 
            desc="Buy SOL on an exchange and send it to your Phantom wallet address. You'll need it to swap for $SPERM."
          />
          <Step 
            num="03" 
            title="Go to Pump.fun" 
            desc="Visit pump.fun and paste our contract address into the search bar to find the official $SPERM token page."
          />
          <Step 
            num="04" 
            title="Finish First" 
            desc="Connect your wallet, choose the amount of SOL you want to spend, and click buy. Welcome to the winner's circle."
          />
        </div>
      </div>
      
      <div className="relative px-8 md:px-0">
        <div className="aspect-square bg-white rounded-full flex items-center justify-center p-4 border-[10px] md:border-[20px] border-white/10 relative overflow-hidden max-w-[300px] md:max-w-none mx-auto">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="text-black text-[120px] md:text-[200px] font-black leading-none drop-shadow-2xl">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            {/* Animated drops */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute bg-black rounded-full animate-bounce"
                    style={{
                        width: '8px md:12px',
                        height: '8px md:12px',
                        left: (20 + i * 15) + '%',
                        top: (15 + i * 5) + '%',
                        animationDelay: i * 0.2 + 's'
                    }}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};