import { motion } from "framer-motion";
import EthereumIcon from "./EthereumIcon";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-4">
          <EthereumIcon size={32} className="opacity-50" />
        </div>
        <p className="font-body text-muted-foreground">
          Built for the{" "}
          <span className="text-primary">ETHMumbai</span>{" "}
          community ❤️
        </p>
        <p className="font-body text-muted-foreground/50 text-sm mt-2">
          © 2024 ETHMumbai Maxi Checker
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
