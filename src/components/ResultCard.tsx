import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Twitter } from "lucide-react";

interface ResultData {
  username: string;
  score: number;
  rank: string;
  badge: string;
  tweetCount: number;
}

interface ResultCardProps {
  data: ResultData;
  onReset: () => void;
}

const ResultCard = ({ data, onReset }: ResultCardProps) => {
  useEffect(() => {
    // Fire confetti on mount
    const end = Date.now() + 2000;

    const colors = ["#E33F3F", "#FF6B6B", "#FFFFFF"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const shareText = `I'm an ETHMumbai ${data.rank} ${data.badge}\n\nMy Maxi Score: ${data.score}/100 🔥\n\nCheck your Maxi score! 👇\n\n#ETHMumbai #Ethereum`;
  const shareUrl = encodeURIComponent(window.location.href);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${shareUrl}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="relative"
    >
      {/* Glow effect behind card */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 -m-4 bg-primary/20 blur-3xl rounded-3xl"
      />

      <div className="card-eth p-8 md:p-12 relative overflow-hidden max-w-lg mx-auto">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/50 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-xl" />

        {/* Username */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="text-muted-foreground font-body text-sm mb-1">Results for</p>
          <p className="font-display text-2xl text-foreground">@{data.username}</p>
        </motion.div>

        {/* Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <motion.span
              className="font-display text-7xl md:text-8xl font-bold text-primary text-glow-intense"
              animate={{ 
                textShadow: [
                  "0 0 20px hsl(0 72% 57% / 0.8)",
                  "0 0 40px hsl(0 72% 57% / 1)",
                  "0 0 20px hsl(0 72% 57% / 0.8)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {data.score}
            </motion.span>
            <span className="font-display text-2xl text-muted-foreground ml-2">/100</span>
          </div>
        </motion.div>

        {/* Rank Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/20 border border-primary/40"
          >
            <span className="text-3xl">{data.badge}</span>
            <span className="font-display text-xl text-primary">{data.rank}</span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-8 mb-8 text-center"
        >
          <div>
            <p className="font-display text-2xl text-foreground">{data.tweetCount}</p>
            <p className="text-sm text-muted-foreground">Tweets</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="font-display text-2xl text-foreground">🔥</p>
            <p className="text-sm text-muted-foreground">On Fire</p>
          </div>
        </motion.div>

        {/* Share buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="space-y-3"
        >
          <motion.a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-lg neon-button"
          >
            <Twitter size={20} />
            <span>Share on X</span>
          </motion.a>

          <motion.button
            onClick={onReset}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-secondary border border-primary/30 text-foreground font-display transition-all hover:bg-secondary/80"
          >
            Check Another
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
