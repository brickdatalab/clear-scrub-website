import { useEffect, useRef, useState } from 'react';

interface NetworkCard {
  id: string;
  label: string;
  x: number;
  y: number;
  prominent?: boolean;
  icon?: string;
}

interface Connection {
  from: string;
  to: string;
}

interface NetworkVisualizationProps {
  cards: NetworkCard[];
  connections: Connection[];
}

export function NetworkVisualization({ cards, connections }: NetworkVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedConnections, setAnimatedConnections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Simple fade in for all connections
            setTimeout(() => {
              setAnimatedConnections(new Set(connections.map((_, i) => i)));
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [connections, isVisible]);

  const getCardPosition = (cardId: string) => {
    const card = cards.find((c) => c.id === cardId);
    return card ? { x: card.x, y: card.y } : { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-cs-g-50 to-cs-g-100 overflow-hidden shadow-inner"
    >
      {/* SVG for connections */}
      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ zIndex: 1 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#006F46" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00AA6C" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {connections.map((connection, index) => {
          const from = getCardPosition(connection.from);
          const to = getCardPosition(connection.to);
          
          // Simple gentle curve - mostly horizontal/vertical
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const midX = from.x + dx * 0.5;
          
          // Gentle curve with minimal offset
          const curve = Math.abs(dy) > 10 ? 8 : 4;
          const cx1 = from.x + Math.min(Math.abs(dx) * 0.3, curve);
          const cy1 = from.y;
          const cx2 = to.x - Math.min(Math.abs(dx) * 0.3, curve);
          const cy2 = to.y;

          const isAnimated = animatedConnections.has(index);

          return (
            <path
              key={index}
              d={`M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transition: 'opacity 0.8s ease',
                opacity: isAnimated ? 1 : 0,
              }}
            />
          );
        })}
      </svg>

      {/* Cards */}
      <div className="relative w-full h-full" style={{ zIndex: 2 }}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: 'translate(-50%, -50%)',
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {card.prominent ? (
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-cs-g-200 min-w-[120px] text-center transition-all duration-300">
                {card.icon && (
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-cs-accent to-[#00AA6C] flex items-center justify-center">
                    <span className="text-white text-base">{card.icon}</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-cs-black">{card.label}</p>
              </div>
            ) : (
              <div className="bg-cs-g-100/80 rounded-lg px-3 py-2 border border-cs-g-200/60 min-w-[90px] text-center backdrop-blur-sm">
                <p className="text-xs text-cs-g-400">{card.label}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
