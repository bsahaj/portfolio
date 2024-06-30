import { motion } from "framer-motion";

const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 75, // y translate
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
