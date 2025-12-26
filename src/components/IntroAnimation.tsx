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
    const busTimer = setTimeout(() => setShowBus(true), 600);
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 2200);

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
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-eth-red overflow-hidden"
        >
          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning Ethereum icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <EthereumIcon size={90} color="white" />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 font-display text-lg md:text-xl text-foreground font-semibold tracking-wide"
            >
              Initializing ETHMumbai Maxi Checker…
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 h-1.5 w-56 bg-foreground/20 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-foreground rounded-full"
              />
            </motion.div>
          </div>

          {/* Road and Bus at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Road */}
            <div className="road h-20 relative">
              {/* Yellow center line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 road-line" />
              
              {/* Bus */}
              <AnimatePresence>
                {showBus && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "calc(50vw - 60px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-2 left-0"
                  >
                    <BusIcon size={120} className="animate-bus-idle" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
