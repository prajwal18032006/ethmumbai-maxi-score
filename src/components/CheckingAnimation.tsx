import { motion } from "framer-motion";
import EthereumIcon from "./EthereumIcon";

const CheckingAnimation = () => {
  const phrases = [
    "Scanning blockchain vibes...",
    "Calculating MAXI power...",
    "Analyzing ETHMumbai energy...",
    "Measuring community love...",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg"
    >
      {/* Scanner container */}
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 -m-16 rounded-full bg-primary/20 blur-2xl"
        />

        {/* Spinning ETH icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <EthereumIcon size={100} />
        </motion.div>

        {/* Scan line overlay */}
        <div className="absolute inset-0 -m-4 overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-x-0 h-full scan-line"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-8"
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="hsl(0 72% 57%)"
              strokeWidth="2"
              strokeDasharray="20 10"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div className="mt-12 text-center">
        <motion.p
          key={phrases[0]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl md:text-2xl text-primary text-glow"
        >
          {phrases.map((phrase, i) => (
            <motion.span
              key={phrase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.5, duration: 0.3 }}
              className={i > 0 ? "hidden" : ""}
              style={{ display: i === Math.floor((Date.now() / 500) % phrases.length) ? "inline" : "none" }}
            >
              {phrase}
            </motion.span>
          ))}
        </motion.p>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CheckingAnimation;
