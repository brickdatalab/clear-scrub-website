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
  points?: { x: number; y: number }[];
}

interface NetworkVisualizationProps {
  cards: NetworkCard[];
  connections: Connection[];
}

export function NetworkVisualization({ cards, connections }: NetworkVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [isVisible]);

  const getCardPosition = (cardId: string) => {
    const card = cards.find((c) => c.id === cardId);
    if (!card) return { x: 0, y: 0 };
    
    return {
      x: (card.x / 100) * containerWidth,
      y: (card.y / 100) * containerHeight,
    };
  };

  const createPath = (connection: Connection) => {
    const from = getCardPosition(connection.from);
    const to = getCardPosition(connection.to);

    if (connection.points) {
      const points = connection.points.map(p => ({
        x: (p.x / 100) * containerWidth,
        y: (p.y / 100) * containerHeight,
      }));
      
      let path = `M${from.x},${from.y}`;
      points.forEach(point => {
        path += ` L${point.x},${point.y}`;
      });
      path += ` L${to.x},${to.y}`;
      return path;
    }

    return `M${from.x},${from.y} L${to.x},${to.y}`;
  };

  const getPathLength = (path: string) => {
    const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tempPath.setAttribute('d', path);
    tempSvg.appendChild(tempPath);
    document.body.appendChild(tempSvg);
    const length = tempPath.getTotalLength();
    document.body.removeChild(tempSvg);
    return length;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-cs-g-50 to-cs-g-100 overflow-hidden shadow-inner"
      data-js-controller="Connection"
    >
      {/* Individual SVG elements for each connection */}
      {connections.map((connection, index) => {
        const from = getCardPosition(connection.from);
        const to = getCardPosition(connection.to);
        
        const minX = Math.min(from.x, to.x, ...(connection.points?.map(p => (p.x / 100) * containerWidth) || []));
        const maxX = Math.max(from.x, to.x, ...(connection.points?.map(p => (p.x / 100) * containerWidth) || []));
        const minY = Math.min(from.y, to.y, ...(connection.points?.map(p => (p.y / 100) * containerHeight) || []));
        const maxY = Math.max(from.y, to.y, ...(connection.points?.map(p => (p.y / 100) * containerHeight) || []));
        
        const width = maxX - minX + 4;
        const height = maxY - minY + 4;
        const left = minX - 2;
        const top = minY - 2;

        const pathD = createPath(connection);
        const pathLength = containerWidth > 0 ? getPathLength(pathD) : 100;

        return (
          <svg
            key={index}
            className="connection-line absolute pointer-events-none"
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${width}px`,
              height: `${height}px`,
              zIndex: 1,
            }}
            data-js-target="connection"
          >
            <defs>
              <linearGradient
                id={`gradient-${index}`}
                className="RotatingGradient"
                gradientUnits="userSpaceOnUse"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#006F46" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#00AA6C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#006F46" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d={pathD.replace(/M(\d+\.?\d*),(\d+\.?\d*)/g, (match, x, y) => 
                `M${parseFloat(x) - left},${parseFloat(y) - top}`
              ).replace(/L(\d+\.?\d*),(\d+\.?\d*)/g, (match, x, y) => 
                `L${parseFloat(x) - left},${parseFloat(y) - top}`
              )}
              stroke={`url(#gradient-${index})`}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: isVisible ? 0 : pathLength,
                transition: `stroke-dashoffset 800ms ease-in-out ${index * 100}ms`,
              }}
            />
          </svg>
        );
      })}

      {/* Cards */}
      <div className="relative w-full h-full" style={{ zIndex: 2 }}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="product-icon absolute transition-all duration-700"
            data-product-name={card.label}
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${index * 100}ms`,
              pointerEvents: 'auto',
            }}
          >
            {card.prominent ? (
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-cs-g-200 min-w-[120px] text-center">
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
