interface BusIconProps {
  size?: number;
  className?: string;
}

const BusIcon = ({ size = 100, className = "" }: BusIconProps) => {
  const scale = size / 100;
  
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 100 65"
      className={className}
      fill="none"
    >
      {/* Bus body - main */}
      <rect x="5" y="10" width="90" height="42" rx="4" fill="#E10600" />
      
      {/* Top deck windows */}
      <rect x="10" y="14" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="23" y="14" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="36" y="14" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="49" y="14" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="62" y="14" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="75" y="14" width="10" height="10" rx="1" fill="#87CEEB" />
      
      {/* Bottom deck windows */}
      <rect x="10" y="30" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="23" y="30" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="36" y="30" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="49" y="30" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="62" y="30" width="10" height="10" rx="1" fill="#87CEEB" />
      <rect x="75" y="30" width="10" height="10" rx="1" fill="#87CEEB" />
      
      {/* Green stripe */}
      <rect x="5" y="44" width="90" height="4" fill="#228B22" />
      
      {/* Yellow stripe */}
      <rect x="5" y="48" width="90" height="2" fill="#FFC400" />
      
      {/* Roof */}
      <rect x="5" y="7" width="90" height="4" rx="2" fill="#C70000" />
      
      {/* Wheels */}
      <circle cx="22" cy="54" r="8" fill="#1A1A1A" />
      <circle cx="22" cy="54" r="4" fill="#404040" />
      <circle cx="78" cy="54" r="8" fill="#1A1A1A" />
      <circle cx="78" cy="54" r="4" fill="#404040" />
      
      {/* Front of bus */}
      <rect x="88" y="25" width="7" height="20" rx="2" fill="#C70000" />
      <rect x="90" y="28" width="4" height="6" rx="1" fill="#87CEEB" />
      
      {/* ETHMumbai logo area */}
      <rect x="8" y="2" width="30" height="6" rx="2" fill="#FFFFFF" />
      <text x="11" y="6.5" fontSize="4" fontWeight="bold" fill="#E10600">ETHMUMBAI</text>
      
      {/* Headlights */}
      <circle cx="93" cy="40" r="2" fill="#FFC400" />
    </svg>
  );
};

export default BusIcon;
