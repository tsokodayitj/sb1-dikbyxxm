import React from 'react';

export function HeroImage() {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <div className="relative h-56 sm:h-72 md:h-96 lg:h-full w-full">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-500/20 to-blue-400/20 z-20"></div>
        
        {/* Futuristic grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTQwIDBoLTFNMCAwaDFNNDAgNDBoLTFNMCA0MGgxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-30"></div>
        
        {/* Glowing accent lines */}
        <div className="absolute inset-0 overflow-hidden z-40">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse delay-300"></div>
        </div>

        {/* Updated main image - more aspirational and future-oriented */}
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Futuristic business growth visualization"
        />

        {/* Enhanced holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-indigo-900/30 mix-blend-overlay z-50"></div>
        
        {/* Additional tech elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-screen z-60"></div>
      </div>
    </div>
  );
}