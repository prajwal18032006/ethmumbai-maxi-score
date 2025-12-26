import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import EthereumIcon from "./EthereumIcon";
import ParticleField from "./ParticleField";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-hero overflow-hidden"
        >
          {/* Particle background */}
          <ParticleField />

          {/* Radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_72%_57%/0.15)_0%,transparent_60%)]" />

          {/* Main ETH icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -m-8 rounded-full bg-primary/20 blur-xl"
            />
            
            {/* ETH Icon container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative animate-pulse-glow"
            >
              <EthereumIcon size={120} />
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="font-display text-xl md:text-2xl text-foreground tracking-wider">
              Initializing{" "}
              <span className="text-primary text-glow">ETHMumbai</span>{" "}
              Maxi Checker...
            </h2>
            
            {/* Loading bar */}
            <motion.div
              className="mt-6 h-1 w-64 mx-auto bg-secondary rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
