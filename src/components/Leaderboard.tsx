import { motion } from "framer-motion";

interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  badge: string;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, username: "eth_maxi_king", score: 98, badge: "👑" },
  { rank: 2, username: "mumbai_builder", score: 95, badge: "🚀" },
  { rank: 3, username: "defi_queen", score: 92, badge: "🔥" },
  { rank: 4, username: "crypto_dev_101", score: 88, badge: "🔥" },
  { rank: 5, username: "web3_warrior", score: 85, badge: "🛠️" },
  { rank: 6, username: "nft_collector", score: 82, badge: "🛠️" },
  { rank: 7, username: "solidity_ninja", score: 79, badge: "🛠️" },
  { rank: 8, username: "chain_surfer", score: 75, badge: "🛠️" },
];

const Leaderboard = () => {
  return (
    <section className="py-20 px-4 relative bg-background">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
            <span className="text-primary">Maxi</span> Leaderboard
          </h2>
          <p className="text-muted-foreground font-body">
            Top ETHMumbai enthusiasts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-eth overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-border bg-muted/30">
            <div className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rank</div>
            <div className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider">Username</div>
            <div className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">Score</div>
            <div className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">Badge</div>
          </div>

          {/* Entries */}
          {leaderboardData.map((entry, i) => (
            <motion.div
              key={entry.username}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-4 gap-4 p-4 border-b border-border/50 transition-colors hover:bg-muted/20 ${
                entry.rank <= 3 ? "bg-primary/5" : ""
              }`}
            >
              {/* Rank */}
              <div className="flex items-center gap-2">
                <span
                  className={`font-display text-lg font-bold ${
                    entry.rank === 1
                      ? "text-yellow-500"
                      : entry.rank === 2
                      ? "text-gray-400"
                      : entry.rank === 3
                      ? "text-amber-600"
                      : "text-foreground"
                  }`}
                >
                  #{entry.rank}
                </span>
              </div>

              {/* Username */}
              <div className="font-body text-foreground flex items-center">
                @{entry.username}
              </div>

              {/* Score */}
              <div className="font-display text-lg font-bold text-primary text-center flex items-center justify-center">
                {entry.score}
              </div>

              {/* Badge */}
              <div className="text-center text-2xl flex items-center justify-center">
                {entry.badge}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leaderboard;
