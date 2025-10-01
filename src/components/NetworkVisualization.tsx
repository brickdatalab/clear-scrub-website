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
            // Animate connections one by one with stagger
            connections.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedConnections((prev) => new Set([...prev, index]));
              }, index * 300);
            });
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
  
  // Continuous subtle pulse animation for connections
  useEffect(() => {
    if (!isVisible || animatedConnections.size === 0) return;
    
    const interval = setInterval(() => {
      const paths = svgRef.current?.querySelectorAll('path');
      paths?.forEach((path, index) => {
        if (animatedConnections.has(index)) {
          path.style.strokeWidth = '3';
          setTimeout(() => {
            path.style.strokeWidth = '2';
          }, 500);
        }
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isVisible, animatedConnections]);

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
            <stop offset="0%" stopColor="#006F46" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00AA6C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#006F46" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {connections.map((connection, index) => {
          const from = getCardPosition(connection.from);
          const to = getCardPosition(connection.to);
          
          // Calculate control points for smooth bezier curve
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const offset = Math.min(distance * 0.3, 15);
          
          const cx1 = from.x + offset;
          const cy1 = from.y + (dy * 0.2);
          const cx2 = to.x - offset;
          const cy2 = to.y - (dy * 0.2);

          const isAnimated = animatedConnections.has(index);
          const pathLength = distance * 1.5;

          return (
            <path
              key={index}
              d={`M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glow)"
              strokeDasharray={`${pathLength} ${pathLength}`}
              strokeDashoffset={isAnimated ? 0 : pathLength}
              style={{
                transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1), stroke-width 0.5s ease',
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
              <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-cs-g-200 min-w-[120px] text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {card.icon && (
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-cs-accent to-[#00AA6C] flex items-center justify-center shadow-md">
                    <span className="text-white text-base">{card.icon}</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-cs-black">{card.label}</p>
              </div>
            ) : (
              <div className="bg-cs-g-200/50 rounded-lg px-3 py-2 border border-cs-g-300/60 min-w-[90px] text-center backdrop-blur-sm">
                <p className="text-xs text-cs-g-500">{card.label}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
