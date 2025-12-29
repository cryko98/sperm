import React, { useState, useEffect, useRef, useCallback } from 'react';

const GRAVITY = 0.6;
const JUMP_STRENGTH = -8;
const PIPE_WIDTH = 60;
const PIPE_GAP = 160;
const PIPE_SPEED = 3.5;
const SPAWN_RATE = 1500; // ms

interface Pipe {
  id: number;
  x: number;
  height: number;
}

export const MiniGame: React.FC = () => {
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'GAME_OVER'>('START');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [birdY, setBirdY] = useState(250);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState<Pipe[]>([]);
  
  const gameRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);

  const jump = useCallback((e?: React.MouseEvent | React.TouchEvent | KeyboardEvent) => {
    if (e) {
      if ('preventDefault' in e) e.preventDefault();
    }
    
    if (gameState === 'START') {
      setGameState('PLAYING');
      resetGame();
    } else if (gameState === 'PLAYING') {
      setVelocity(JUMP_STRENGTH);
    } else if (gameState === 'GAME_OVER') {
      resetGame();
      setGameState('PLAYING');
    }
  }, [gameState]);

  const resetGame = () => {
    setBirdY(250);
    setVelocity(0);
    setPipes([]);
    setScore(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jump(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jump]);

  const update = useCallback(() => {
    if (gameState !== 'PLAYING') return;

    setBirdY((y) => {
      const nextY = y + velocity;
      // Collision with floor/ceiling
      if (nextY > 480 || nextY < 0) {
        setGameState('GAME_OVER');
        return y;
      }
      return nextY;
    });
    setVelocity((v) => v + GRAVITY);

    setPipes((prev) => {
      const nextPipes = prev
        .map((p) => ({ ...p, x: p.x - PIPE_SPEED }))
        .filter((p) => p.x + PIPE_WIDTH > -100);

      // Spawn new pipe
      if (nextPipes.length === 0 || (600 - nextPipes[nextPipes.length - 1].x) > (SPAWN_RATE / 10)) {
         if (nextPipes.length < 3 && (nextPipes.length === 0 || nextPipes[nextPipes.length - 1].x < 400)) {
            nextPipes.push({
              id: Date.now(),
              x: 600,
              height: Math.random() * 200 + 50,
            });
         }
      }

      // Check collisions and scoring
      nextPipes.forEach((p) => {
        // Scoring
        if (p.x + PIPE_SPEED > 50 && p.x <= 50) {
          setScore((s) => {
            const newScore = s + 1;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
        }

        // Collision detection
        const birdRect = { top: birdY, bottom: birdY + 15, left: 50, right: 90 };
        const upperPipe = { top: 0, bottom: p.height, left: p.x, right: p.x + PIPE_WIDTH };
        const lowerPipe = { top: p.height + PIPE_GAP, bottom: 500, left: p.x, right: p.x + PIPE_WIDTH };

        if (
          (birdRect.right > upperPipe.left && birdRect.left < upperPipe.right && birdRect.top < upperPipe.bottom) ||
          (birdRect.right > lowerPipe.left && birdRect.left < lowerPipe.right && birdRect.bottom > lowerPipe.top)
        ) {
          setGameState('GAME_OVER');
        }
      });

      return nextPipes;
    });

    requestRef.current = requestAnimationFrame(update);
  }, [gameState, velocity, birdY, highScore]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [update]);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto touch-none">
      <div className="flex justify-between w-full mb-3 md:mb-4 font-black uppercase italic tracking-widest text-[10px] md:text-sm px-2">
        <span>Score: {score}</span>
        <span>High Score: {highScore}</span>
      </div>
      
      <div 
        ref={gameRef}
        className="relative w-full h-[400px] md:h-[500px] bg-[#0a0a0a] border-2 md:border-4 border-white/10 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
        onClick={(e) => jump(e)}
        onTouchStart={(e) => jump(e)}
      >
        {/* The Swimmer */}
        <div 
          className="absolute left-[30px] md:left-[50px] flex flex-row items-center transition-transform duration-75"
          style={{ 
            top: `${birdY}px`,
            transform: `rotate(${Math.min(Math.max(velocity * 2, -15), 30)}deg) scale(${window.innerWidth < 768 ? 0.8 : 1})`
          }}
        >
          <div className="w-8 md:w-10 h-[2px] bg-gradient-to-l from-white to-transparent animate-[wiggle_0.15s_ease-in-out_infinite] origin-right" />
          <div className="w-3 md:w-4 h-2 md:h-3 bg-white rounded-full shadow-[0_0_12px_white]" />
        </div>

        {/* The Pipes */}
        {pipes.map(p => (
          <React.Fragment key={p.id}>
            <div 
              className="absolute bg-white/90 border-l border-r border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              style={{ left: p.x, top: 0, width: PIPE_WIDTH, height: p.height, borderRadius: '0 0 8px 8px' }}
            >
                <div className="absolute bottom-0 w-full h-1 md:h-2 bg-white" />
            </div>
            <div 
              className="absolute bg-white/90 border-l border-r border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              style={{ left: p.x, top: p.height + PIPE_GAP, width: PIPE_WIDTH, height: 500 - (p.height + PIPE_GAP), borderRadius: '8px 8px 0 0' }}
            >
                <div className="absolute top-0 w-full h-1 md:h-2 bg-white" />
            </div>
          </React.Fragment>
        ))}

        {/* Overlays */}
        {gameState === 'START' && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-4xl font-black mb-3 md:mb-4 uppercase tracking-tighter">Enter the Race</h3>
            <p className="text-[10px] md:text-sm opacity-70 mb-6 md:mb-8 uppercase tracking-[0.2em]">Tap or Space to swim</p>
            <div className="w-12 h-12 md:w-16 md:h-16 border-2 md:border-4 border-white rounded-full flex items-center justify-center animate-pulse">
                <i className="fa-solid fa-play ml-1"></i>
            </div>
          </div>
        )}

        {gameState === 'GAME_OVER' && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 md:p-8 text-center backdrop-blur-sm">
            <h3 className="text-4xl md:text-5xl font-black mb-1 md:mb-2 uppercase tracking-tighter text-white">DNF</h3>
            <p className="text-sm md:text-lg font-bold mb-6 md:mb-8 text-white/50 italic uppercase">Did Not Finish</p>
            <div className="text-xl md:text-2xl font-black mb-5 md:mb-6 uppercase tracking-widest text-white">Score: {score}</div>
            <button className="bg-white text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase text-lg md:text-xl hover:scale-105 transition-transform active:scale-95">
              Respawn
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 md:mt-6 text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-30 text-center px-4">
        SWIM FAST • DON'T HIT THE WALLS
      </div>
    </div>
  );
};