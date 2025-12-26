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
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary text-glow">Maxi</span> Leaderboard
          </h2>
          <p className="text-muted-foreground font-body">
            Top ETHMumbai enthusiasts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-eth overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-primary/20 bg-primary/5">
            <div className="font-display text-sm text-muted-foreground">🔺 Rank</div>
            <div className="font-display text-sm text-muted-foreground">👤 Username</div>
            <div className="font-display text-sm text-muted-foreground text-center">💥 Score</div>
            <div className="font-display text-sm text-muted-foreground text-center">🏅 Badge</div>
          </div>

          {/* Entries */}
          {leaderboardData.map((entry, i) => (
            <motion.div
              key={entry.username}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid grid-cols-4 gap-4 p-4 border-b border-primary/10 transition-colors hover:bg-primary/5 ${
                entry.rank <= 3 ? "relative" : ""
              }`}
            >
              {/* Glow for top 3 */}
              {entry.rank <= 3 && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />
              )}

              {/* Rank */}
              <div className="flex items-center gap-2 relative z-10">
                <span
                  className={`font-display text-lg ${
                    entry.rank === 1
                      ? "text-yellow-400"
                      : entry.rank === 2
                      ? "text-gray-300"
                      : entry.rank === 3
                      ? "text-amber-600"
                      : "text-foreground"
                  }`}
                >
                  #{entry.rank}
                </span>
                {entry.rank <= 3 && (
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 10px hsl(0 72% 57% / 0.3)",
                        "0 0 20px hsl(0 72% 57% / 0.5)",
                        "0 0 10px hsl(0 72% 57% / 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </div>

              {/* Username */}
              <div className="font-body text-foreground relative z-10">
                @{entry.username}
              </div>

              {/* Score */}
              <div className="font-display text-lg text-primary text-center relative z-10">
                {entry.score}
              </div>

              {/* Badge */}
              <div className="text-center text-2xl relative z-10">
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
