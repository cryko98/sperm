
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center relative min-h-[70vh] md:min-h-[85vh] justify-center px-4">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-black shadow-2xl">
        <img 
          src="https://i.guim.co.uk/img/media/758316591486a04bccf8087171312068ce044ed1/0_411_4756_2853/master/4756.jpg?width=1200&quality=85&auto=format&fit=max&s=8bf9f61caf4e136c8af6df156eed7997" 
          alt="Microscopic Swimmers" 
          className="w-full h-full object-cover hero-bg"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black"></div>
      </div>

      <div className="relative flex flex-col items-center mb-6 md:mb-10">
        <span className="text-sm sm:text-lg md:text-3xl font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-80 mb-[-0.5rem] md:mb-[-1.5rem] drop-shadow-lg">
          Return to the
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-none tracking-tighter glitch-text drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300">
          SPERM
        </h1>
        <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-1.5 bg-white rounded-full overflow-hidden">
            <div className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
      
      <p className="text-base md:text-2xl max-w-2xl text-white font-light italic leading-relaxed bg-black/60 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 mx-2">
        The first one to the finish line wins everything. 
        <br />
        <span className="font-bold not-italic text-white underline decoration-white/30 decoration-2 underline-offset-4 md:underline-offset-8 mt-1 md:mt-2 inline-block">$SPERM</span>
      </p>

      <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
        <a 
          href="https://pump.fun/coin/8a9vJCNjiM7LW43JeAYjf4FDVzi2qhoEF4fCWqwgpump"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 md:px-14 py-3 md:py-4 bg-white text-black text-base md:text-lg font-black rounded-full hover:scale-105 transition-all flex items-center gap-3 justify-center shadow-[0_0_25px_rgba(255,255,255,0.4)] uppercase tracking-tighter"
        >
          <i className="fa-solid fa-droplet"></i> Buy on Pump.fun
        </a>
        <a 
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 md:px-14 py-3 md:py-4 border-2 border-white/40 text-white text-base md:text-lg font-black rounded-full hover:bg-white hover:text-black hover:border-white transition-all flex items-center gap-3 justify-center backdrop-blur-sm"
        >
          <i className="fa-brands fa-x-twitter"></i> X Community
        </a>
      </div>
      
      <div className="mt-16 md:mt-24 flex flex-col items-center gap-3 md:gap-4 opacity-40">
        <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold">The Great Race Has Begun</span>
        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};
