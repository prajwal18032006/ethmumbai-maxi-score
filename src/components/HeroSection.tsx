import { motion } from "framer-motion";
import { useState } from "react";
import BusIcon from "./BusIcon";

interface HeroSectionProps {
  onCheckClick: (username: string) => void;
}

const rankCheckpoints = [
  { name: "Tourist", position: 5 },
  { name: "Builder", position: 25 },
  { name: "OG", position: 50 },
  { name: "Ultra Maxi", position: 75 },
  { name: "Legend", position: 95 },
];

const HeroSection = ({ onCheckClick }: HeroSectionProps) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onCheckClick(username.trim());
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-eth-red overflow-hidden">
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-12 pb-32">
        <div className="text-center max-w-2xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight mb-4"
          >
            ETHMumbai
            <br />
            Maxi Checker
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-body text-lg md:text-xl text-foreground/90 mb-10"
          >
            Find out how big of an ETHMumbai fan you are
          </motion.p>

          {/* Input Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card-eth shadow-eth p-6 md:p-8 max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-left">
                <label className="block font-display text-sm font-semibold text-muted-foreground mb-2">
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
                    className="w-full pl-10 pr-4 py-4 input-eth text-lg font-body"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={!username.trim()}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 btn-eth-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check My Maxi Score
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Road Section with Journey */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Road */}
        <div className="road h-24 relative">
          {/* Yellow center line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 road-line" />
          
          {/* Rank checkpoints */}
          {rankCheckpoints.map((checkpoint) => (
            <div
              key={checkpoint.name}
              className="absolute top-1 transform -translate-x-1/2"
              style={{ left: `${checkpoint.position}%` }}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs font-display font-bold text-foreground/60 whitespace-nowrap">
                  {checkpoint.name}
                </span>
                <div className="w-0.5 h-3 bg-foreground/30 mt-1" />
              </div>
            </div>
          ))}

          {/* Bus at start */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-1 left-4"
          >
            <BusIcon size={80} className="animate-bus-idle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
