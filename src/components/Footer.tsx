import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-body text-muted-foreground text-sm">
          Built for the{" "}
          <span className="text-primary font-semibold">ETHMumbai</span>{" "}
          community ❤️
        </p>
        <p className="font-body text-muted-foreground/50 text-xs mt-1">
          © 2024 ETHMumbai Maxi Checker
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
