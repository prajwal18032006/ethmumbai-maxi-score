import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import HeroSection from "@/components/HeroSection";
import CheckingAnimation from "@/components/CheckingAnimation";
import ResultCard from "@/components/ResultCard";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";

type AppState = "intro" | "home" | "checking" | "result";

const ranks = [
  { min: 0, max: 20, rank: "Tourist", badge: "🧳" },
  { min: 21, max: 50, rank: "Builder", badge: "🛠️" },
  { min: 51, max: 75, rank: "OG", badge: "🔥" },
  { min: 76, max: 90, rank: "Ultra Maxi", badge: "🚀" },
  { min: 91, max: 100, rank: "Legend", badge: "👑" },
];

const getRankData = (score: number) => {
  return ranks.find((r) => score >= r.min && score <= r.max) || ranks[0];
};

const Index = () => {
  const [appState, setAppState] = useState<AppState>("intro");
  const [resultData, setResultData] = useState<{
    username: string;
    score: number;
    rank: string;
    badge: string;
    tweetCount: number;
  } | null>(null);

  const handleIntroComplete = useCallback(() => {
    setAppState("home");
  }, []);

  const handleCheck = useCallback((username: string) => {
    setAppState("checking");

    setTimeout(() => {
      const score = Math.floor(Math.random() * 60) + 40;
      const rankData = getRankData(score);
      
      setResultData({
        username,
        score,
        rank: rankData.rank,
        badge: rankData.badge,
        tweetCount: Math.floor(Math.random() * 500) + 50,
      });
      setAppState("result");
    }, 2000);
  }, []);

  const handleReset = useCallback(() => {
    setResultData(null);
    setAppState("home");
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {appState === "intro" && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {appState === "checking" && <CheckingAnimation />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {appState !== "intro" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {appState === "home" && <HeroSection onCheckClick={handleCheck} />}

            {appState === "result" && resultData && (
              <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-eth-red">
                <ResultCard data={resultData} onReset={handleReset} />
              </section>
            )}

            {appState !== "checking" && (
              <>
                <Leaderboard />
                <Footer />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
