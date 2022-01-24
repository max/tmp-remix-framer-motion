import { motion } from "framer-motion";
import { useLocation } from "remix";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function AnimateRoute({ children }) {
  const location = useLocation();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      key={location.pathname}
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
