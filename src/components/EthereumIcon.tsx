import { motion } from "framer-motion";

interface EthereumIconProps {
  size?: number;
  className?: string;
  color?: "red" | "white";
}

const EthereumIcon = ({ size = 80, className = "", color = "red" }: EthereumIconProps) => {
  const fillColor = color === "red" ? "hsl(1 100% 44%)" : "hsl(0 0% 100%)";
  const fillColorLight = color === "red" ? "hsl(1 100% 55%)" : "hsl(0 0% 90%)";
  const fillColorDark = color === "red" ? "hsl(1 100% 35%)" : "hsl(0 0% 70%)";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 256 417"
      className={className}
      preserveAspectRatio="xMidYMid"
    >
      {/* Top half */}
      <motion.path
        fill={fillColor}
        d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
      />
      <motion.path
        fill={fillColorLight}
        d="M127.962 0L0 212.32l127.962 75.639V154.158z"
      />
      
      {/* Bottom half */}
      <motion.path
        fill={fillColor}
        d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
      />
      <motion.path
        fill={fillColorLight}
        d="M127.962 416.905v-104.72L0 236.585z"
      />
      
      {/* Middle section */}
      <motion.path
        fill={fillColorDark}
        d="M127.961 287.958l127.96-75.637-127.96-58.162z"
      />
      <motion.path
        fill={fillColor}
        d="M0 212.32l127.96 75.638v-133.8z"
      />
    </motion.svg>
  );
};

export default EthereumIcon;
