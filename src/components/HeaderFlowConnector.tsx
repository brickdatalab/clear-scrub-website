/**
 * BACKGROUND FLOW NETWORK - HEADER IMPLEMENTATION
 * Animated SVG connector for header background
 */

// ============ CUSTOMIZATION SETTINGS ============
const CONFIG = {
  // Opacity (0.2 = very subtle, 0.6 = more visible)
  opacity: 0.4,
  
  // Your brand green color
  primaryColor: '#049F66',
  
  // Animation speed (seconds) - higher = slower
  animationSpeed: 3,
  
  // Height of connector area
  height: '600px',
};

// ============ THE CONNECTOR COMPONENT ============
export function HeaderFlowConnector() {
  return (
    <div 
      className="absolute inset-0 w-full overflow-hidden pointer-events-none"
      style={{ 
        height: CONFIG.height,
        opacity: CONFIG.opacity,
        zIndex: 0 
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1400 600" 
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Main flowing curves */}
        <path 
          d="M 100 300 Q 350 150, 600 300 T 1100 300 Q 1250 350, 1300 300" 
          stroke={CONFIG.primaryColor}
          strokeWidth="2.5" 
          fill="none"
          opacity="0.4"
          strokeDasharray="8,6"
        />
        
        <path 
          d="M 100 320 Q 400 450, 700 320 T 1200 320" 
          stroke={CONFIG.primaryColor}
          strokeWidth="2" 
          fill="none"
          opacity="0.25"
          strokeDasharray="5,5"
        />
        
        <path 
          d="M 150 280 Q 450 200, 750 280 T 1250 280" 
          stroke={CONFIG.primaryColor}
          strokeWidth="1.5" 
          fill="none"
          opacity="0.2"
        />

        {/* Animated nodes - Large */}
        <circle cx="300" cy="250" r="10" fill={CONFIG.primaryColor} opacity="0.5">
          <animate 
            attributeName="r" 
            values="10;16;10" 
            dur={`${CONFIG.animationSpeed}s`}
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity" 
            values="0.3;0.6;0.3" 
            dur={`${CONFIG.animationSpeed}s`}
            repeatCount="indefinite"
          />
        </circle>
        
        <circle cx="600" cy="300" r="12" fill={CONFIG.primaryColor} opacity="0.6">
          <animate 
            attributeName="r" 
            values="12;18;12" 
            dur={`${CONFIG.animationSpeed}s`}
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        
        <circle cx="900" cy="270" r="10" fill={CONFIG.primaryColor} opacity="0.5">
          <animate 
            attributeName="r" 
            values="10;16;10" 
            dur={`${CONFIG.animationSpeed}s`}
            begin="2s"
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity" 
            values="0.3;0.6;0.3" 
            dur={`${CONFIG.animationSpeed}s`}
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Small accent dots */}
        <circle cx="450" cy="200" r="4" fill={CONFIG.primaryColor} opacity="0.35"/>
        <circle cx="750" cy="380" r="4" fill={CONFIG.primaryColor} opacity="0.35"/>
        <circle cx="1050" cy="310" r="4" fill={CONFIG.primaryColor} opacity="0.35"/>
        <circle cx="250" cy="340" r="3" fill={CONFIG.primaryColor} opacity="0.3"/>
        <circle cx="550" cy="240" r="3" fill={CONFIG.primaryColor} opacity="0.3"/>
        <circle cx="850" cy="350" r="3" fill={CONFIG.primaryColor} opacity="0.3"/>
        <circle cx="1150" cy="290" r="4" fill={CONFIG.primaryColor} opacity="0.35"/>
        
        {/* Subtle glow circles */}
        <circle cx="600" cy="300" r="40" fill="none" stroke={CONFIG.primaryColor} strokeWidth="1" opacity="0.15">
          <animate 
            attributeName="r" 
            values="40;60;40" 
            dur={`${CONFIG.animationSpeed * 1.5}s`}
            repeatCount="indefinite"
          />
        </circle>
        
        <circle cx="300" cy="250" r="35" fill="none" stroke={CONFIG.primaryColor} strokeWidth="1" opacity="0.12">
          <animate 
            attributeName="r" 
            values="35;55;35" 
            dur={`${CONFIG.animationSpeed * 1.5}s`}
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
