import React, { useState } from 'react';

export const ContractAddress: React.FC = () => {
  const ca = "8a9vJCNjiM7LW43JeAYjf4FDVzi2qhoEF4fCWqwgpump";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-3xl relative group overflow-hidden mx-2">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter">Official Contract</h2>
        <div className="relative w-full max-w-2xl bg-black border border-white/20 p-3 md:p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <code className="text-xs md:text-lg break-all font-mono opacity-80 px-2">{ca}</code>
          <button 
            onClick={handleCopy}
            className="w-full md:w-auto whitespace-nowrap bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
                <><i className="fa-solid fa-check"></i> COPIED</>
            ) : (
                <><i className="fa-solid fa-copy"></i> COPY</>
            )}
          </button>
        </div>
      </div>

      {/* Drip Decor */}
      <div className="absolute -bottom-2 left-10 w-4 h-12 bg-white rounded-full opacity-10 md:opacity-20 group-hover:h-20 transition-all pointer-events-none"></div>
      <div className="absolute -bottom-2 left-20 w-4 h-8 bg-white rounded-full opacity-10 md:opacity-20 group-hover:h-16 transition-all pointer-events-none"></div>
    </div>
  );
};