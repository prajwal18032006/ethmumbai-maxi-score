import { motion } from "framer-motion";
import EthereumIcon from "./EthereumIcon";
import BusIcon from "./BusIcon";

const CheckingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
    >
      {/* Red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Spinning ETH icon - faster */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          {/* Soft glow */}
          <motion.div
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 -m-6 rounded-full bg-primary/20 blur-xl"
          />
          <EthereumIcon size={80} />
        </motion.div>

        {/* Progress text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 font-display text-xl md:text-2xl text-foreground tracking-wide"
        >
          Calculating your ETHMumbai Maxi power…
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mt-6 h-1.5 w-64 bg-muted rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-primary rounded-full"
          />
        </motion.div>

        {/* Bus driving animation */}
        <motion.div
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mt-12"
        >
          <BusIcon size={100} />
        </motion.div>

        {/* Journey text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 font-body text-sm text-muted-foreground"
        >
          Your ETHMumbai Maxi journey is in progress…
        </motion.p>
      </div>

      {/* Road at bottom */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="h-4 bg-muted/50" />
        <div className="road-divider" />
      </div>
    </motion.div>
  );
};

export default CheckingAnimation;
