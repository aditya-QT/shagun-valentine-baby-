import React from 'react';

interface RosesProps {
  show: boolean;
}

export const Roses: React.FC<RosesProps> = ({ show }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      
      {/* Left Rose */}
      <div 
        className={`absolute bottom-0 left-[-20px] md:left-0 w-48 h-64 md:w-64 md:h-80 transition-transform duration-[3000ms] ease-out delay-[2500ms] origin-bottom ${
          show ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-full scale-90 opacity-0'
        }`}
      >
        <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-xl">
          {/* Stem */}
          <path 
            d="M50,150 Q45,100 50,80 Q55,60 40,40" 
            fill="none" 
            stroke="#2d5a27" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* Leaves */}
          <path d="M50,100 Q30,90 20,110 Q40,110 50,100" fill="#4a8a3c" />
          <path d="M50,120 Q70,110 80,130 Q60,130 50,120" fill="#4a8a3c" />
          
          {/* Flower */}
          <g className={`transition-all duration-[2000ms] delay-[4000ms] ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{ transformOrigin: '40px 40px' }}>
             <path d="M40,40 C20,20 60,20 40,40 Z" fill="#e11d48" />
             <circle cx="35" cy="35" r="10" fill="#f43f5e" />
             <circle cx="45" cy="35" r="10" fill="#fb7185" />
             <circle cx="40" cy="45" r="10" fill="#fda4af" />
             {/* Simple petal shapes */}
             <path d="M40,40 Q20,10 10,40 Q30,70 40,40" fill="#e11d48" opacity="0.9" />
             <path d="M40,40 Q60,10 70,40 Q50,70 40,40" fill="#be123c" opacity="0.9" />
             <path d="M40,40 Q10,40 20,10" fill="#fb7185" />
          </g>
        </svg>
      </div>

      {/* Right Rose */}
      <div 
        className={`absolute bottom-0 right-[-20px] md:right-0 w-56 h-72 md:w-72 md:h-96 transition-transform duration-[3500ms] ease-out delay-[3000ms] origin-bottom ${
          show ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-full scale-90 opacity-0'
        }`}
      >
        <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-xl">
           {/* Stem */}
          <path 
            d="M50,150 Q60,100 50,70 Q40,40 60,30" 
            fill="none" 
            stroke="#2d5a27" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
           {/* Leaves */}
          <path d="M50,110 Q70,100 80,120 Q60,120 50,110" fill="#4a8a3c" />
          <path d="M52,90 Q30,80 20,100 Q40,100 52,90" fill="#4a8a3c" />

           {/* Flower */}
           <g className={`transition-all duration-[2000ms] delay-[4500ms] ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{ transformOrigin: '60px 30px' }}>
             <circle cx="60" cy="30" r="12" fill="#be123c" />
             <circle cx="55" cy="25" r="10" fill="#f43f5e" />
             <circle cx="65" cy="25" r="10" fill="#fb7185" />
             <circle cx="60" cy="35" r="10" fill="#fda4af" />
             <path d="M60,30 Q40,0 30,30 Q50,60 60,30" fill="#e11d48" opacity="0.8" />
             <path d="M60,30 Q80,0 90,30 Q70,60 60,30" fill="#9f1239" opacity="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
};