import React, { useEffect, useState } from 'react';

interface SwimmerData {
  id: number;
  left: string;
  duration: string;
  delay: string;
  scale: number;
}

export const DripOverlay: React.FC = () => {
  const [swimmers, setSwimmers] = useState<SwimmerData[]>([]);

  useEffect(() => {
    // Generate initial batch
    const initial = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      duration: (Math.random() * 4 + 4) + 's',
      delay: (Math.random() * 8) + 's',
      scale: Math.random() * 0.4 + 0.6
    }));
    setSwimmers(initial);

    // Continuous flow
    const interval = setInterval(() => {
      setSwimmers(prev => {
        const id = Date.now() + Math.random();
        const newSwimmer = {
          id,
          left: Math.random() * 100 + '%',
          duration: (Math.random() * 4 + 4) + 's',
          delay: '0s',
          scale: Math.random() * 0.4 + 0.6
        };
        // Maintain a pool of swimmers for performance
        return [...prev.slice(-30), newSwimmer];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {swimmers.map(s => (
        <div 
          key={s.id}
          className="swimmer"
          style={{
            left: s.left,
            animationDuration: s.duration,
            animationDelay: s.delay,
            transform: `scale(${s.scale})`
          }}
        >
          {/* Tail on top per user request */}
          <div className="swimmer-tail" />
          <div className="swimmer-head" />
        </div>
      ))}
    </div>
  );
};