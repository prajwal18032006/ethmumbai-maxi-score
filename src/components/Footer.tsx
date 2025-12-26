import { motion } from "framer-motion";
import EthereumIcon from "./EthereumIcon";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="flex justify-center mb-3">
          <EthereumIcon size={24} className="opacity-50" />
        </div>
        <p className="font-body text-muted-foreground text-sm">
          Built for the{" "}
          <span className="text-primary font-semibold">ETHMumbai</span>{" "}
          community ❤️
        </p>
        <p className="font-body text-muted-foreground/50 text-xs mt-2">
          © 2024 ETHMumbai Maxi Checker
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
