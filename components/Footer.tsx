
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-40 mb-10 text-center space-y-8">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="flex flex-col items-center">
        <div className="text-4xl font-black tracking-tighter mb-4">SPERM</div>
        <div className="flex gap-8 text-2xl">
          <a href="https://x.com" target="_blank" className="hover:text-gray-400 transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://dexscreener.com/solana/8a9vJCNjiM7LW43JeAYjf4FDVzi2qhoEF4fCWqwgpump" target="_blank" className="hover:text-gray-400 transition-colors"><i className="fa-solid fa-chart-pie"></i></a>
          <a href="https://pump.fun/coin/8a9vJCNjiM7LW43JeAYjf4FDVzi2qhoEF4fCWqwgpump" target="_blank" className="hover:text-gray-400 transition-colors"><i className="fa-solid fa-droplet"></i></a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
          Legal Disclaimer: $SPERM is a memecoin with no intrinsic value or expectation of financial return. 
          The project is for entertainment purposes only. Investing in crypto involves high risk. 
          Don't swim in waters you can't handle.
        </p>
      </div>

      <div className="text-[10px] text-gray-800 font-mono">
        © {new Date().getFullYear()} SPERM FOUNDATION. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};
