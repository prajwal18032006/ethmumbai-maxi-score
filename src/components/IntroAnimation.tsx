import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import EthereumIcon from "./EthereumIcon";
import BusIcon from "./BusIcon";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showBus, setShowBus] = useState(false);

  useEffect(() => {
    // Show bus after 1 second
    const busTimer = setTimeout(() => {
      setShowBus(true);
    }, 800);

    // Complete after 2.5 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(busTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, hsl(0 0% 100%) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Ethereum icon with spin and pulse */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Soft glow behind */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -m-8 rounded-full bg-foreground/10 blur-2xl"
              />
              
              {/* Spinning Ethereum icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <EthereumIcon size={100} color="white" />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 font-display text-lg md:text-xl text-foreground/90 tracking-wide"
            >
              Initializing ETHMumbai Maxi Checker…
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1.5 }}
              className="mt-6 h-1 w-48 bg-foreground/20 rounded-full overflow-hidden origin-left"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.7, duration: 1.5, ease: "easeInOut" }}
                className="h-full w-full bg-foreground rounded-full"
              />
            </motion.div>
          </div>

          {/* Bus sliding in from left */}
          <AnimatePresence>
            {showBus && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2"
              >
                <BusIcon size={120} className="animate-bus-idle" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Road at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-16 bg-foreground/10" />
            <div className="road-divider" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
