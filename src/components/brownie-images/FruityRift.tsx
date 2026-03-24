export function FruityRiftImage({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="fr-bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a0a2e" />
            <stop offset="100%" stopColor="#080010" />
          </radialGradient>
          <radialGradient id="fr-brownie" cx="45%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#3d1f0a" />
            <stop offset="40%" stopColor="#2a1506" />
            <stop offset="100%" stopColor="#1a0d04" />
          </radialGradient>
          <radialGradient id="fr-shine" cx="35%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(124,58,237,0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="fr-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="fr-cereal-glow">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="300" height="300" fill="url(#fr-bg)" />
        
        {/* Rainbow ambient glow */}
        <ellipse cx="150" cy="140" r="85" fill="rgba(124,58,237,0.05)" />
        
        {/* Shadow */}
        <ellipse cx="150" cy="220" rx="75" ry="15" fill="rgba(0,0,0,0.6)" filter="url(#fr-glow)" />
        
        {/* Main brownie body */}
        <rect x="75" y="100" width="150" height="100" rx="8" fill="url(#fr-brownie)" />
        
        {/* Top surface */}
        <rect x="75" y="95" width="150" height="20" rx="6" fill="#3d1f0a" />
        
        {/* Cereal pieces on top — colorful fragments */}
        {/* Reds */}
        <ellipse cx="95" cy="100" rx="5" ry="3.5" fill="#ef4444" opacity="0.85" transform="rotate(-15 95 100)" />
        <ellipse cx="185" cy="103" rx="4" ry="3" fill="#dc2626" opacity="0.8" transform="rotate(20 185 103)" />
        
        {/* Oranges */}
        <ellipse cx="120" cy="98" rx="4.5" ry="3" fill="#f97316" opacity="0.8" transform="rotate(10 120 98)" />
        <ellipse cx="205" cy="100" rx="3.5" ry="2.5" fill="#fb923c" opacity="0.75" transform="rotate(-25 205 100)" />
        
        {/* Yellows */}
        <ellipse cx="140" cy="102" rx="5" ry="3" fill="#eab308" opacity="0.85" transform="rotate(-5 140 102)" />
        <ellipse cx="108" cy="106" rx="3.5" ry="2.5" fill="#fde047" opacity="0.7" transform="rotate(30 108 106)" />
        
        {/* Greens */}
        <ellipse cx="160" cy="99" rx="4" ry="3" fill="#22c55e" opacity="0.8" transform="rotate(15 160 99)" />
        <ellipse cx="88" cy="105" rx="3" ry="2.5" fill="#4ade80" opacity="0.7" transform="rotate(-20 88 105)" />
        
        {/* Blues */}
        <ellipse cx="175" cy="105" rx="4.5" ry="3" fill="#3b82f6" opacity="0.8" transform="rotate(-10 175 105)" />
        <ellipse cx="130" cy="107" rx="3.5" ry="2.5" fill="#60a5fa" opacity="0.7" transform="rotate(25 130 107)" />
        
        {/* Purples */}
        <ellipse cx="150" cy="96" rx="4" ry="3" fill="#a855f7" opacity="0.85" transform="rotate(8 150 96)" />
        <ellipse cx="195" cy="107" rx="3" ry="2.5" fill="#c084fc" opacity="0.7" transform="rotate(-12 195 107)" />
        
        {/* Cereal pieces embedded in the side (visible in cross section) */}
        <ellipse cx="105" cy="140" rx="3.5" ry="2.5" fill="#ef4444" opacity="0.5" />
        <ellipse cx="170" cy="155" rx="3" ry="2" fill="#3b82f6" opacity="0.4" />
        <ellipse cx="140" cy="170" rx="3.5" ry="2" fill="#eab308" opacity="0.45" />
        <ellipse cx="195" cy="145" rx="2.5" ry="2" fill="#22c55e" opacity="0.4" />
        <ellipse cx="120" cy="180" rx="3" ry="2" fill="#a855f7" opacity="0.4" />
        <ellipse cx="185" cy="175" rx="2.5" ry="2" fill="#f97316" opacity="0.35" />
        
        {/* Crackle lines on surface */}
        <path d="M92 101 Q115 95, 135 102 Q160 96, 180 101 Q195 95, 210 102" 
              stroke="#5c2d0a" strokeWidth="1" fill="none" opacity="0.4" />
        
        {/* Shine */}
        <rect x="75" y="95" width="150" height="105" rx="8" fill="url(#fr-shine)" />
        
        {/* Edge */}
        <rect x="75" y="95" width="150" height="105" rx="8" 
              fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
        
        {/* Chromatic floating particles */}
        <circle cx="85" cy="70" r="1.5" fill="#ef4444" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="60" r="1.2" fill="#eab308" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="55" r="1.3" fill="#22c55e" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.65;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="65" r="1.4" fill="#3b82f6" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="50" r="1.6" fill="#a855f7" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="240" r="1.3" fill="#f97316" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
