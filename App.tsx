import React, { useState, useRef, useEffect } from 'react';
import { Clouds } from './components/Clouds';
import { RecordPlayer } from './components/RecordPlayer';
import { Roses } from './components/Roses';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  
  // Intro state
  const [introDismissed, setIntroDismissed] = useState(false);
  const [introRemoved, setIntroRemoved] = useState(false);
  
  // Refs for audio elements
  const songRef = useRef<HTMLAudioElement | null>(null);
  const crackleRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Play crackle sound immediately
    if (crackleRef.current) {
      crackleRef.current.volume = 0.4;
      crackleRef.current.loop = true;
      crackleRef.current.play().catch(e => console.log("Audio play failed", e));
    }

    // Sequence timing
    // 0s: Click & Vinyl Drops
    // 2s: Arm moves
    // 3s: Needle drops, Music starts
    
    setTimeout(() => {
      if (songRef.current) {
        songRef.current.volume = 0.6;
        songRef.current.play().catch(e => console.log("Audio play failed", e));
      }
    }, 3000); // Wait for needle to hit
  };

  const handleIntroClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleStart();
    setIntroDismissed(true);
    
    // Remove from DOM after transition completes
    setTimeout(() => {
      setIntroRemoved(true);
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-sky-100 select-none">
      
      {/* Audio Elements */}
      <audio ref={songRef} src="song.mp3" preload="auto" />
      <audio ref={crackleRef} src="https://assets.mixkit.co/active_storage/sfx/2074/2074-preview.mp3" preload="auto" />

      {/* Main Content Wrapper - Blurs when intro is visible */}
      <div 
        className={`relative w-full h-full transition-all duration-1000 ease-in-out ${
          introDismissed ? 'blur-0 scale-100' : 'blur-sm scale-105'
        }`}
        onClick={introDismissed ? undefined : handleStart} // Fallback click handler
      >
        {/* Background */}
        <Clouds />

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          
          {/* Record Player Section */}
          <div className="transform scale-75 md:scale-100 transition-transform duration-500">
             <RecordPlayer isPlaying={hasStarted} />
          </div>
        </div>

        {/* Foreground Roses */}
        <Roses show={hasStarted} />
      </div>

      {/* Apple-style Intro Overlay */}
      {!introRemoved && (
        <div 
          onClick={handleIntroClick}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f7] cursor-pointer transition-all duration-1000 ease-in-out
            ${introDismissed ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}
          `}
        >
          <div className="text-center animate-[fadeIn_1.5s_ease-out]">
            <h1 
              className="text-[#1d1d1f] text-3xl md:text-4xl font-light tracking-[0.04em] select-none"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
            >
              For my girl
            </h1>
          </div>
        </div>
      )}

    </div>
  );
}