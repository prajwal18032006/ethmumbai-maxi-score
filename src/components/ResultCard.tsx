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
    const end = Date.now() + 1500;
    const colors = ["#E10600", "#FFFFFF", "#FFD700"];

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
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative"
    >
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 -m-6 bg-primary/20 blur-3xl rounded-3xl"
      />

      <div className="card-eth p-8 md:p-10 relative overflow-hidden max-w-md mx-auto glow-red">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-2xl" />

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center mb-6">
          <p className="text-muted-foreground font-body text-sm mb-1">Results for</p>
          <p className="font-display text-2xl font-bold text-foreground">@{data.username}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring" }} className="text-center mb-6">
          <span className="font-display text-7xl md:text-8xl font-black text-primary">{data.score}</span>
          <span className="font-display text-2xl text-muted-foreground ml-2">/100</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-3xl">{data.badge}</span>
            <span className="font-display text-xl font-bold text-primary">{data.rank}</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center gap-8 mb-8 text-center">
          <div>
            <p className="font-display text-2xl font-bold text-foreground">{data.tweetCount}</p>
            <p className="text-sm text-muted-foreground">Tweets</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-2xl">🔥</p>
            <p className="text-sm text-muted-foreground">On Fire</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="space-y-3">
          <motion.a href={twitterUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 w-full py-4 btn-eth-primary">
            <Twitter size={20} />
            <span>Share on X</span>
          </motion.a>

          <motion.button onClick={onReset} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 rounded-full bg-muted text-foreground font-semibold transition-colors hover:bg-muted/80">
            Check Another
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
