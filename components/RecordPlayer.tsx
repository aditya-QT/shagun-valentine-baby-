import React, { useEffect, useState } from 'react';

interface RecordPlayerProps {
  isPlaying: boolean;
}

export const RecordPlayer: React.FC<RecordPlayerProps> = ({ isPlaying }) => {
  // Internal state to manage the specific timing of the arm movement
  const [armActive, setArmActive] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      // Wait for vinyl to drop (2s) before moving arm
      const timer = setTimeout(() => {
        setArmActive(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="relative w-[340px] h-[280px] bg-[#5D4037] rounded-xl shadow-2xl flex items-center justify-center border-t-4 border-[#8D6E63] shadow-black/40">
      
      {/* Wood Texture Detail */}
      <div className="absolute inset-0 rounded-xl opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>

      {/* Turntable Platter */}
      <div className="w-[260px] h-[260px] bg-zinc-800 rounded-full shadow-inner flex items-center justify-center border-4 border-zinc-700">
        
        {/* The Vinyl Record Wrapper - Handles the Drop Animation */}
        <div 
          className={`transition-all duration-[2000ms] ease-out transform ${
            isPlaying ? 'translate-y-0 opacity-100' : '-translate-y-[800px] opacity-0'
          }`}
        >
          {/* The Spinning Vinyl - Handles the Rotation */}
          <div className={`relative w-[240px] h-[240px] rounded-full shadow-xl flex items-center justify-center ${armActive ? 'animate-spin-slow' : ''}`}>
            
            {/* Vinyl Body (Grooves) - Red color handled by CSS in index.html */}
            <div className="absolute inset-0 rounded-full vinyl-grooves border border-[#7f0b18]"></div>
            
            {/* SVG Text Overlay - "BE MY VALENTINE" */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240">
                <defs>
                    {/* Path definition: A circle with radius 75 centered at 120,120 */}
                    {/* M 120,120 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0 */}
                    {/* Starts at 9 o'clock. Clockwise. 25% offset is 12 o'clock (Top), 75% offset is 6 o'clock (Bottom) */}
                    <path id="curve" d="M 120, 120 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fill="white" fontSize="20" fontWeight="700" fontFamily="serif" letterSpacing="0.15em" style={{ textTransform: 'uppercase', filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.4))' }}>
                    {/* startOffset="25%" centers it at the top */}
                    <textPath href="#curve" startOffset="25%" textAnchor="middle">
                        Be My Valentine
                    </textPath>
                </text>
                 <text fill="white" fontSize="20" fontWeight="700" fontFamily="serif" letterSpacing="0.15em" style={{ textTransform: 'uppercase', filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.4))' }}>
                    {/* startOffset="75%" centers it at the bottom */}
                    <textPath href="#curve" startOffset="75%" textAnchor="middle">
                        Be My Valentine
                    </textPath>
                </text>
            </svg>

            {/* Inner aesthetic ring */}
            <div className="absolute w-28 h-28 rounded-full border border-white/10 opacity-50 pointer-events-none"></div>

            {/* Center Hole */}
            <div className="absolute w-3 h-3 bg-black rounded-full z-20 shadow-inner"></div>

            {/* Shine/Reflection */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </div>

      {/* Tonearm Assembly */}
      <div className="absolute top-4 right-4 z-20">
        {/* Pivot Base */}
        <div className="w-16 h-16 bg-zinc-300 rounded-full border-4 border-zinc-400 shadow-lg flex items-center justify-center relative">
          <div className="w-4 h-4 bg-zinc-500 rounded-full border-2 border-zinc-600"></div>
          
          {/* The Arm Itself */}
          <div 
            className={`absolute top-1/2 left-1/2 w-[160px] h-3 bg-zinc-300 origin-[10px_50%] rounded-full shadow-md transition-transform duration-[1500ms] ease-in-out ${
                armActive ? 'rotate-[25deg]' : 'rotate-0'
            }`}
            style={{ transformBox: 'fill-box' }} // Ensure origin works correctly
          >
            {/* Counterweight */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-10 bg-zinc-400 rounded-md shadow-sm border border-zinc-500"></div>
            
            {/* Headshell (Needle Holder) */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-5 bg-zinc-400 rounded-sm rotate-12 flex items-center shadow-sm">
                <div className="absolute right-1 top-full h-2 w-1 bg-zinc-800"></div> {/* Needle */}
            </div>
          </div>
        </div>
      </div>

      {/* Control Knobs */}
      <div className="absolute bottom-4 right-4 flex space-x-3">
        <div className="w-6 h-6 rounded-full bg-zinc-400 shadow border border-zinc-500"></div>
        <div className={`w-6 h-6 rounded-full bg-red-800 shadow border border-red-900 ${isPlaying ? 'shadow-[0_0_10px_rgba(255,0,0,0.5)]' : ''}`}></div>
      </div>

    </div>
  );
};