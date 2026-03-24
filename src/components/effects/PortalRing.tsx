import { cn } from '@/lib/utils';

interface PortalRingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function PortalRing({ className, size = 'lg' }: PortalRingProps) {
  const sizeMap = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  };

  return (
    <div className={cn('relative', sizeMap[size], className)}>
      {/* Outer glow ring */}
      <div className="absolute -inset-4 rounded-full bg-gradient-portal opacity-30 blur-xl" />
      
      <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-portal-pulse" />
      <div className="absolute inset-3 rounded-full border border-secondary/40 animate-portal-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="absolute inset-6 rounded-full border border-primary/30 animate-portal-pulse" style={{ animationDelay: '0.6s' }} />
      <div className="absolute inset-9 rounded-full border border-secondary/20 animate-portal-pulse" style={{ animationDelay: '0.9s' }} />
      <div className="absolute inset-12 rounded-full bg-gradient-portal opacity-70" />
      <div className="absolute inset-16 rounded-full bg-black/80" />
      
      {/* Orbiting particles */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            className="absolute w-2.5 h-2.5 bg-secondary rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${angle}deg) translateY(-48%) translateX(-50%)`,
              boxShadow: '0 0 8px rgba(212,160,23,0.6)',
            }}
          />
        ))}
      </div>
      
      {/* Inner counter-rotating particles */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
        {[30, 150, 270].map((angle) => (
          <div
            key={angle}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${angle}deg) translateY(-35%) translateX(-50%)`,
              boxShadow: '0 0 6px rgba(107,33,168,0.8)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
