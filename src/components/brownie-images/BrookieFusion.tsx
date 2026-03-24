export function BrookieFusionImage({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="bf-bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a0a2e" />
            <stop offset="100%" stopColor="#080010" />
          </radialGradient>
          <linearGradient id="bf-cookie" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a55a" />
            <stop offset="50%" stopColor="#c49040" />
            <stop offset="100%" stopColor="#a87830" />
          </linearGradient>
          <linearGradient id="bf-brownie" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d1f0a" />
            <stop offset="100%" stopColor="#1a0d04" />
          </linearGradient>
          <linearGradient id="bf-fusion" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a55a" />
            <stop offset="40%" stopColor="#8B5E3C" />
            <stop offset="60%" stopColor="#5c3d24" />
            <stop offset="100%" stopColor="#2a1506" />
          </linearGradient>
          <radialGradient id="bf-shine" cx="35%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(212,165,90,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="bf-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bf-energy">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="300" height="300" fill="url(#bf-bg)" />
        
        {/* Shadow */}
        <ellipse cx="150" cy="220" rx="75" ry="15" fill="rgba(0,0,0,0.6)" filter="url(#bf-glow)" />
        
        {/* Main brownie body — right half dark */}
        <rect x="150" y="100" width="75" height="100" rx="0" fill="url(#bf-brownie)" />
        <rect x="218" y="100" width="7" height="100" rx="0 8 8 0" fill="#1a0d04" />
        
        {/* Cookie half — left side golden */}
        <rect x="75" y="100" width="75" height="100" rx="0" fill="url(#bf-cookie)" />
        <rect x="75" y="100" width="7" height="100" rx="8 0 0 8" fill="#d4a55a" />
        
        {/* Fusion zone — the meeting point */}
        <rect x="135" y="95" width="30" height="110" fill="url(#bf-fusion)" opacity="0.9" />
        
        {/* Top crust — cookie to brownie gradient */}
        <rect x="75" y="95" width="150" height="18" rx="6" fill="url(#bf-fusion)" />
        
        {/* Cookie texture — chocolate chips on left */}
        <circle cx="100" cy="130" r="5" fill="#3d1f0a" opacity="0.8" />
        <circle cx="115" cy="155" r="4" fill="#2a1506" opacity="0.7" />
        <circle cx="90" cy="165" r="3.5" fill="#3d1f0a" opacity="0.6" />
        <circle cx="125" cy="175" r="4.5" fill="#2a1506" opacity="0.7" />
        <circle cx="105" cy="103" r="3" fill="#3d1f0a" opacity="0.7" />
        
        {/* Cookie golden speckles */}
        <circle cx="88" cy="140" r="1.5" fill="#e8c06a" opacity="0.5" />
        <circle cx="120" cy="120" r="1" fill="#e8c06a" opacity="0.4" />
        <circle cx="95" cy="180" r="1.2" fill="#e8c06a" opacity="0.4" />
        
        {/* Brownie texture — fudgy patches on right */}
        <circle cx="185" cy="140" r="5" fill="#1a0d04" opacity="0.5" />
        <circle cx="205" cy="165" r="4" fill="#1a0d04" opacity="0.4" />
        <circle cx="175" cy="175" r="3.5" fill="#1a0d04" opacity="0.45" />
        
        {/* Energy line at fusion seam */}
        <line x1="150" y1="95" x2="150" y2="200" stroke="#7c3aed" strokeWidth="2" opacity="0.4" filter="url(#bf-energy)">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="95" x2="150" y2="200" stroke="#d4a017" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
        </line>
        
        {/* Shine */}
        <rect x="75" y="95" width="150" height="105" rx="8" fill="url(#bf-shine)" />
        
        {/* Edge */}
        <rect x="75" y="95" width="150" height="105" rx="8" 
              fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
        
        {/* Ambient particles */}
        <circle cx="80" cy="70" r="1.3" fill="#d4a55a" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="220" cy="75" r="1.2" fill="#7c3aed" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="55" r="1.5" fill="#d4a017" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
