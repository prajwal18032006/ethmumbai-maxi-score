import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Twitter } from "lucide-react";
import BusIcon from "./BusIcon";

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

const rankCheckpoints = [
  { name: "Tourist", position: 5, minScore: 0 },
  { name: "Builder", position: 25, minScore: 21 },
  { name: "OG", position: 50, minScore: 51 },
  { name: "Ultra Maxi", position: 75, minScore: 76 },
  { name: "Legend", position: 95, minScore: 91 },
];

const ResultCard = ({ data, onReset }: ResultCardProps) => {
  // Calculate bus position based on score
  const busPosition = Math.min(95, Math.max(5, data.score));

  useEffect(() => {
    const colors = ["#E10600", "#FFFFFF", "#FFC400"];
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
    });
  }, []);

  const shareText = `I'm an ETHMumbai ${data.rank} ${data.badge}\n\nMy Maxi Score: ${data.score}/100 🔥\n\nCheck your Maxi score! 👇\n\n#ETHMumbai #Ethereum`;
  const shareUrl = encodeURIComponent(window.location.href);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${shareUrl}`;

  return (
    <div className="w-full">
      {/* Result Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="card-eth shadow-eth p-6 md:p-8 max-w-md mx-auto mb-8"
      >
        {/* Username */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground font-body text-sm mb-1">Results for</p>
          <p className="font-display text-xl font-bold text-foreground">@{data.username}</p>
        </div>

        {/* Score */}
        <div className="text-center mb-4">
          <span className="font-display text-6xl md:text-7xl font-black text-primary">{data.score}</span>
          <span className="font-display text-xl text-muted-foreground ml-2">/100</span>
        </div>

        {/* Rank Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-2xl">{data.badge}</span>
            <span className="font-display text-lg font-bold text-primary">{data.rank}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-6 text-center">
          <div>
            <p className="font-display text-xl font-bold text-foreground">{data.tweetCount}</p>
            <p className="text-xs text-muted-foreground">Tweets</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-xl">🔥</p>
            <p className="text-xs text-muted-foreground">On Fire</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 btn-eth-primary"
          >
            <Twitter size={18} />
            <span>Share on X</span>
          </a>

          <button
            onClick={onReset}
            className="w-full py-3 rounded-full bg-muted text-foreground font-semibold transition-colors hover:bg-muted/80"
          >
            Check Another
          </button>
        </div>
      </motion.div>

      {/* Journey Road with Bus Position */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto px-4"
      >
        <p className="text-center text-sm text-muted-foreground mb-3 font-display">Your Journey Position</p>
        
        <div className="road h-20 relative rounded-lg overflow-hidden">
          {/* Yellow center line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 road-line" />
          
          {/* Rank checkpoints */}
          {rankCheckpoints.map((checkpoint) => (
            <div
              key={checkpoint.name}
              className="absolute top-2 transform -translate-x-1/2"
              style={{ left: `${checkpoint.position}%` }}
            >
              <div className="flex flex-col items-center">
                <span className={`text-xs font-display font-bold whitespace-nowrap ${
                  data.score >= checkpoint.minScore ? 'text-foreground' : 'text-foreground/40'
                }`}>
                  {checkpoint.name}
                </span>
                <div className={`w-0.5 h-2 mt-1 ${
                  data.score >= checkpoint.minScore ? 'bg-eth-yellow' : 'bg-foreground/20'
                }`} />
              </div>
            </div>
          ))}

          {/* Bus at score position */}
          <motion.div
            initial={{ left: "5%" }}
            animate={{ left: `${busPosition}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-1 transform -translate-x-1/2"
          >
            <BusIcon size={70} className="animate-bus-idle" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultCard;
