export function OGChunkImage({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="og-bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a0a2e" />
            <stop offset="100%" stopColor="#080010" />
          </radialGradient>
          <radialGradient id="og-brownie" cx="45%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#3d1f0a" />
            <stop offset="40%" stopColor="#2a1506" />
            <stop offset="100%" stopColor="#1a0d04" />
          </radialGradient>
          <radialGradient id="og-shine" cx="35%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(212,160,23,0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="og-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="og-crack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5c2d0a" />
            <stop offset="50%" stopColor="#3d1f0a" />
            <stop offset="100%" stopColor="#2a1506" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="300" height="300" fill="url(#og-bg)" />
        
        {/* Ambient glow */}
        <circle cx="150" cy="150" r="100" fill="rgba(107,33,168,0.08)" />
        
        {/* Shadow */}
        <ellipse cx="150" cy="220" rx="75" ry="15" fill="rgba(0,0,0,0.6)" filter="url(#og-glow)" />
        
        {/* Main brownie body */}
        <rect x="75" y="100" width="150" height="100" rx="8" fill="url(#og-brownie)" />
        
        {/* Top surface — slightly lighter */}
        <rect x="75" y="95" width="150" height="20" rx="6" fill="#3d1f0a" />
        
        {/* Crackle texture on top */}
        <path d="M90 102 Q120 98, 140 105 Q160 99, 180 103 Q200 97, 215 104" 
              stroke="#5c2d0a" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M95 108 Q130 112, 155 107 Q175 113, 210 108" 
              stroke="#4a2408" strokeWidth="1" fill="none" opacity="0.5" />
        
        {/* Gooey chocolate drip from crack */}
        <path d="M130 115 Q128 130, 132 145 Q135 155, 130 165" 
              stroke="#2a1506" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M170 112 Q172 125, 168 140" 
              stroke="#2a1506" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
        
        {/* Shine / gloss */}
        <rect x="75" y="95" width="150" height="105" rx="8" fill="url(#og-shine)" />
        
        {/* Edge highlight */}
        <rect x="75" y="95" width="150" height="105" rx="8" 
              fill="none" stroke="rgba(92,45,10,0.4)" strokeWidth="1" />
        
        {/* Fudgy chunks visible in cross-section */}
        <circle cx="110" cy="155" r="6" fill="#1a0d04" opacity="0.6" />
        <circle cx="160" cy="140" r="5" fill="#1a0d04" opacity="0.5" />
        <circle cx="190" cy="165" r="4" fill="#1a0d04" opacity="0.4" />
        
        {/* Subtle gold ambient particles */}
        <circle cx="100" cy="80" r="1.5" fill="#d4a017" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="70" r="1" fill="#d4a017" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="60" r="1.2" fill="#7c3aed" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
