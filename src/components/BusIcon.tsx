import { motion } from "framer-motion";

interface BusIconProps {
  size?: number;
  className?: string;
}

const BusIcon = ({ size = 60, className = "" }: BusIconProps) => {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 100 70"
      className={className}
      fill="none"
    >
      {/* Bus body */}
      <rect x="5" y="15" width="90" height="40" rx="5" fill="hsl(1 100% 44%)" />
      
      {/* Windows row 1 */}
      <rect x="12" y="20" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="28" y="20" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="44" y="20" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="60" y="20" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="76" y="20" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      
      {/* Windows row 2 */}
      <rect x="12" y="36" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="28" y="36" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="44" y="36" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="60" y="36" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      <rect x="76" y="36" width="12" height="12" rx="2" fill="hsl(200 80% 80%)" />
      
      {/* Green stripe */}
      <rect x="5" y="50" width="90" height="5" fill="hsl(140 60% 40%)" />
      
      {/* Yellow stripe */}
      <rect x="5" y="53" width="90" height="2" fill="hsl(48 100% 50%)" />
      
      {/* Wheels */}
      <circle cx="25" cy="58" r="8" fill="hsl(0 0% 20%)" />
      <circle cx="25" cy="58" r="4" fill="hsl(0 0% 40%)" />
      <circle cx="75" cy="58" r="8" fill="hsl(0 0% 20%)" />
      <circle cx="75" cy="58" r="4" fill="hsl(0 0% 40%)" />
      
      {/* Front of bus */}
      <rect x="88" y="35" width="7" height="15" rx="2" fill="hsl(1 100% 35%)" />
      
      {/* ETHMumbai logo area */}
      <rect x="8" y="8" width="25" height="8" rx="3" fill="hsl(0 0% 100%)" />
      <text x="12" y="14" fontSize="5" fontWeight="bold" fill="hsl(1 100% 44%)">ETHMUMBAI</text>
    </svg>
  );
};

export default BusIcon;
