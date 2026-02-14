import React from 'react';

export const Clouds: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* CSS Cloud Shapes - using blurred white circles for a soft aesthetic */}
      
      {/* Cloud 1 */}
      <div className="absolute top-[10%] left-[-20%] w-[40%] h-[20%] bg-white blur-[60px] opacity-40 animate-[float_20s_linear_infinite]" 
           style={{ animationDuration: '45s' }}></div>
      
      {/* Cloud 2 */}
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[30%] bg-white blur-[80px] opacity-30 animate-[float_25s_linear_infinite_reverse]" 
           style={{ animationDuration: '60s' }}></div>

      {/* Cloud 3 */}
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-white blur-[70px] opacity-40 animate-[float_30s_ease-in-out_infinite]"
           style={{ animationDuration: '35s' }}></div>
      
      {/* Subtle overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sky-200/50"></div>
    </div>
  );
};