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
  const [isVisible, setIsVisible] = useState(false);
  const [animatedConnections, setAnimatedConnections] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate connections one by one
            connections.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedConnections((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [connections]);

  const getCardPosition = (cardId: string) => {
    const card = cards.find((c) => c.id === cardId);
    return card ? { x: card.x, y: card.y } : { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-cs-g-50 to-cs-g-100 overflow-hidden"
    >
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#006F46" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00AA6C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#006F46" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {connections.map((connection, index) => {
          const from = getCardPosition(connection.from);
          const to = getCardPosition(connection.to);
          
          // Calculate control points for bezier curve
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const offset = Math.min(Math.abs(dx), Math.abs(dy)) * 0.3;
          
          const cx1 = from.x + offset;
          const cy1 = from.y;
          const cx2 = to.x - offset;
          const cy2 = to.y;

          const isAnimated = animatedConnections.includes(index);

          return (
            <path
              key={index}
              d={`M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeDasharray={isAnimated ? "0" : "1000"}
              strokeDashoffset={isAnimated ? "0" : "1000"}
              style={{
                transition: 'stroke-dashoffset 1s ease-out',
              }}
            />
          );
        })}
      </svg>

      {/* Cards */}
      <div className="relative w-full h-full" style={{ zIndex: 2 }}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`absolute transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {card.prominent ? (
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-cs-g-200 min-w-[120px] text-center">
                {card.icon && (
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br from-cs-accent to-[#00AA6C] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{card.icon}</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-cs-black">{card.label}</p>
              </div>
            ) : (
              <div className="bg-cs-g-200/40 rounded-lg px-3 py-2 border border-cs-g-300/50 min-w-[100px] text-center backdrop-blur-sm">
                <p className="text-xs text-cs-g-400">{card.label}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
