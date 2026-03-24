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
    xl: 'w-[500px] h-[500px]',
  };

  return (
    <div className={cn('relative', sizeMap[size], className)}>
      <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-portal-pulse" />
      <div className="absolute inset-4 rounded-full border border-secondary/30" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-8 rounded-full border border-primary/20 animate-portal-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-12 rounded-full bg-gradient-portal opacity-60" />
      <div className="absolute inset-16 rounded-full bg-black/80" />
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <div
            key={angle}
            className="absolute w-2 h-2 bg-secondary rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${angle}deg) translateY(-45%) translateX(-50%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
