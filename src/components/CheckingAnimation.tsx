import { motion } from "framer-motion";
import EthereumIcon from "./EthereumIcon";
import BusIcon from "./BusIcon";

const CheckingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-eth-red"
    >
      <div className="flex flex-col items-center">
        {/* Spinning ETH icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <EthereumIcon size={70} color="white" />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-display text-xl md:text-2xl text-foreground font-semibold text-center"
        >
          Calculating your ETHMumbai Maxi power…
        </motion.p>

        {/* Progress bar */}
        <motion.div className="mt-6 h-1.5 w-64 bg-foreground/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-foreground rounded-full"
          />
        </motion.div>

        {/* Journey text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 font-body text-sm text-foreground/80"
        >
          Your ETHMumbai Maxi journey is in progress…
        </motion.p>
      </div>

      {/* Road with moving bus */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="road h-20 relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 road-line" />
          
          <motion.div
            initial={{ x: "-20%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1"
          >
            <BusIcon size={100} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckingAnimation;
