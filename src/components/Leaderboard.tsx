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
    <section className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-2">
            <span className="text-primary">Maxi</span> Leaderboard
          </h2>
          <p className="text-muted-foreground font-body text-sm">
            Top ETHMumbai enthusiasts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-eth shadow-eth overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-3 p-3 border-b border-border bg-muted/30">
            <div className="font-display text-xs font-bold text-muted-foreground uppercase">Rank</div>
            <div className="font-display text-xs font-bold text-muted-foreground uppercase">Username</div>
            <div className="font-display text-xs font-bold text-muted-foreground uppercase text-center">Score</div>
            <div className="font-display text-xs font-bold text-muted-foreground uppercase text-center">Badge</div>
          </div>

          {/* Entries */}
          {leaderboardData.map((entry, i) => (
            <motion.div
              key={entry.username}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`grid grid-cols-4 gap-3 p-3 border-b border-border/50 ${
                entry.rank <= 3 ? "bg-primary/5" : ""
              }`}
            >
              <div className="flex items-center">
                <span
                  className={`font-display text-base font-bold ${
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
              <div className="font-body text-sm text-foreground flex items-center">
                @{entry.username}
              </div>
              <div className="font-display text-base font-bold text-primary text-center flex items-center justify-center">
                {entry.score}
              </div>
              <div className="text-xl flex items-center justify-center">
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
