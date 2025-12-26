import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import EthereumIcon from "./EthereumIcon";
import ParticleField from "./ParticleField";

interface HeroSectionProps {
  onCheckClick: () => void;
}

const HeroSection = ({ onCheckClick }: HeroSectionProps) => {
  const [username, setUsername] = useState("");
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Transform for floating ETH icons
  const floatX = useTransform(x, [0, window.innerWidth], [-30, 30]);
  const floatY = useTransform(y, [0, window.innerHeight], [-30, 30]);
  
  // Cursor follower position
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onCheckClick();
    }
  };

  // Floating background ETH icons
  const floatingIcons = [
    { x: "10%", y: "20%", size: 40, delay: 0 },
    { x: "85%", y: "15%", size: 30, delay: 0.5 },
    { x: "75%", y: "70%", size: 50, delay: 1 },
    { x: "15%", y: "75%", size: 35, delay: 1.5 },
    { x: "50%", y: "10%", size: 25, delay: 2 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z"
            fill="url(#waveGradient)"
            initial={{ d: "M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z" }}
            animate={{ 
              d: [
                "M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z",
                "M0,150 C150,50 350,200 500,100 C650,0 850,200 1000,100 L1000,300 L0,300 Z",
                "M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(0 72% 57%)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Particle field */}
      <ParticleField />

      {/* Floating ETH icons with parallax */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20 pointer-events-none"
          style={{
            left: icon.x,
            top: icon.y,
            x: floatX,
            y: floatY,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: icon.delay, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <EthereumIcon size={icon.size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full bg-primary/30 backdrop-blur-sm"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          className="mb-8"
        >
          <EthereumIcon size={80} className="mx-auto animate-pulse-glow" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-primary text-glow-intense">ETHMumbai</span>
          <br />
          <span className="text-foreground">Maxi Checker</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground mb-12"
        >
          Find out how big of an ETHMumbai fan you are
        </motion.p>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="card-eth p-8 max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-display text-sm text-muted-foreground mb-2 text-left">
                Enter your X username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-body">
                  @
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className="w-full pl-10 pr-4 py-4 rounded-lg neon-input font-body text-lg"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={!username.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-8 rounded-lg neon-button text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check My Maxi Score
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
