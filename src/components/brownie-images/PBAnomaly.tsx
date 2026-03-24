export function PBAnomalyImage({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="pb-bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a0a2e" />
            <stop offset="100%" stopColor="#080010" />
          </radialGradient>
          <radialGradient id="pb-brownie" cx="45%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#3d1f0a" />
            <stop offset="40%" stopColor="#2a1506" />
            <stop offset="100%" stopColor="#1a0d04" />
          </radialGradient>
          <linearGradient id="pb-swirl1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a017" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#b8860b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="pb-swirl2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c99a2e" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="pb-shine" cx="35%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(212,160,23,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="pb-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pb-amber-glow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="300" height="300" fill="url(#pb-bg)" />
        
        {/* Amber ambient glow behind brownie */}
        <ellipse cx="150" cy="140" r="90" fill="rgba(184,134,11,0.06)" />
        
        {/* Shadow */}
        <ellipse cx="150" cy="220" rx="75" ry="15" fill="rgba(0,0,0,0.6)" filter="url(#pb-glow)" />
        
        {/* Main brownie body */}
        <rect x="75" y="100" width="150" height="100" rx="8" fill="url(#pb-brownie)" />
        
        {/* Top surface */}
        <rect x="75" y="95" width="150" height="20" rx="6" fill="#3d1f0a" />
        
        {/* Peanut butter swirl ribbons on top */}
        <path d="M85 100 Q110 92, 130 103 Q155 95, 180 102 Q200 93, 220 100" 
              stroke="url(#pb-swirl1)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M90 108 Q120 115, 145 104 Q170 112, 195 106 Q210 113, 225 107" 
              stroke="url(#pb-swirl2)" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M100 97 Q115 103, 140 96 Q165 104, 200 97" 
              stroke="#d4a017" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
        
        {/* PB pooling on side */}
        <path d="M90 115 Q88 130, 92 145 Q95 152, 88 160" 
              stroke="#b8860b" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M200 112 Q204 128, 198 142" 
              stroke="#c99a2e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
        
        {/* PB veins inside brownie */}
        <path d="M100 140 Q120 135, 140 145 Q160 138, 180 143" 
              stroke="#b8860b" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M110 165 Q140 158, 170 168 Q190 160, 205 165" 
              stroke="#8B6914" strokeWidth="1.5" fill="none" opacity="0.3" />
        
        {/* Shine */}
        <rect x="75" y="95" width="150" height="105" rx="8" fill="url(#pb-shine)" />
        
        {/* Edge */}
        <rect x="75" y="95" width="150" height="105" rx="8" 
              fill="none" stroke="rgba(184,134,11,0.3)" strokeWidth="1" />
        
        {/* Ambient particles */}
        <circle cx="90" cy="75" r="1.5" fill="#d4a017" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="65" r="1.2" fill="#d4a017" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="155" cy="55" r="1" fill="#b8860b" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="240" r="1.3" fill="#7c3aed" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
