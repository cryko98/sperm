import React from 'react';

export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center py-3 md:py-5 sticky top-2 md:top-4 z-40 bg-black/90 backdrop-blur-xl rounded-full px-4 md:px-8 border border-white/10 mx-1 md:mx-2 shadow-2xl group">
      <div className="text-lg md:text-xl font-black tracking-tighter flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
        <img 
          src="https://pbs.twimg.com/media/G9TUCxHWkAAHEkP?format=jpg&name=medium" 
          alt="SPERM Logo" 
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover grayscale contrast-125 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform"
        />
        <span className="inline-block">SPERM</span>
      </div>
      
      <div className="flex gap-4 md:gap-10 items-center text-[9px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">
        <button onClick={() => scrollTo('tokenomics')} className="hidden sm:inline-block hover:text-white text-gray-400 transition-colors">Stats</button>
        <button onClick={() => scrollTo('chart')} className="hidden sm:inline-block hover:text-white text-gray-400 transition-colors">Chart</button>
        <a 
            href="https://pump.fun/coin/8a9vJCNjiM7LW43JeAYjf4FDVzi2qhoEF4fCWqwgpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-4 md:px-7 py-2 md:py-2.5 rounded-full hover:bg-gray-200 transition-all transform active:scale-95 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          BUY $SPERM
        </a>
      </div>
      
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-[1px] md:h-[2px] bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </nav>
  );
};