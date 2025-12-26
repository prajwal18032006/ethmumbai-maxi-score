import { motion } from "framer-motion";
import { useState } from "react";
import EthereumIcon from "./EthereumIcon";
import BusIcon from "./BusIcon";

interface HeroSectionProps {
  onCheckClick: (username: string) => void;
}

const HeroSection = ({ onCheckClick }: HeroSectionProps) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onCheckClick(username.trim());
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
      {/* Red gradient top */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* ETH Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <EthereumIcon size={60} className="mx-auto" />
        </motion.div>

        {/* Title - fades in from top */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4"
        >
          <span className="text-primary">ETHMumbai</span>
          <br />
          <span className="text-foreground">Maxi Checker</span>
        </motion.h1>

        {/* Subtitle - fades in slightly after */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-muted-foreground mb-12"
        >
          Find out how big of an ETHMumbai fan you are
        </motion.p>

        {/* Road divider behind card */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute left-0 right-0 top-1/2 translate-y-20 pointer-events-none"
        >
          <div className="h-2 bg-muted/50 mx-auto max-w-3xl" />
          <div className="road-divider max-w-3xl mx-auto mt-1" />
        </motion.div>

        {/* Input Card - slides in from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card-eth p-8 relative z-10"
        >
          {/* Small bus mascot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-8 -left-4 md:-left-16"
          >
            <BusIcon size={80} className="animate-bus-idle" />
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label className="block font-display text-sm font-medium text-muted-foreground mb-2">
                Enter your X username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-body text-lg">
                  @
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className="w-full pl-10 pr-4 py-4 input-eth text-lg"
                />
              </div>
            </div>

            {/* Button - slides in with delay */}
            <motion.button
              type="submit"
              disabled={!username.trim()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-8 btn-eth-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check My Maxi Score
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Road at very bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-8 bg-muted/30" />
        <div className="road-divider" />
      </div>
    </section>
  );
};

export default HeroSection;
