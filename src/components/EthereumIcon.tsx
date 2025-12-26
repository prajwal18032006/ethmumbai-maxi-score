import { motion } from "framer-motion";

interface EthereumIconProps {
  size?: number;
  className?: string;
}

const EthereumIcon = ({ size = 80, className = "" }: EthereumIconProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 256 417"
      className={className}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient id="ethGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(0 72% 65%)" />
          <stop offset="50%" stopColor="hsl(0 72% 57%)" />
          <stop offset="100%" stopColor="hsl(0 72% 45%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Top half */}
      <motion.path
        fill="url(#ethGradient)"
        filter="url(#glow)"
        d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        fill="hsl(0 72% 70%)"
        filter="url(#glow)"
        d="M127.962 0L0 212.32l127.962 75.639V154.158z"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      />
      
      {/* Bottom half */}
      <motion.path
        fill="url(#ethGradient)"
        filter="url(#glow)"
        d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      <motion.path
        fill="hsl(0 72% 70%)"
        filter="url(#glow)"
        d="M127.962 416.905v-104.72L0 236.585z"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
      
      {/* Middle section */}
      <motion.path
        fill="hsl(0 72% 40%)"
        d="M127.961 287.958l127.96-75.637-127.96-58.162z"
      />
      <motion.path
        fill="hsl(0 72% 50%)"
        d="M0 212.32l127.96 75.638v-133.8z"
      />
    </motion.svg>
  );
};

export default EthereumIcon;
