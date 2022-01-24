import { AnimatePresence, motion } from 'framer-motion';
import { Link, Outlet, useLocation } from "remix";

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
}

export default function Foo() {
  const location = useLocation();

  return (
    <div>
      <h1>Foo</h1>

      <nav>
        <Link to="/foo">Home</Link>{' '}
        <Link to="/foo/one">Nested One</Link>{' '}
        <Link to="/foo/two">Nested Two</Link>{' '}
        <Link to="/foo/three">Nested Three</Link>
      </nav>

      <div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            key={location.pathname} /* added a key because otherwise no route transition is */
            variants={pageVariants}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}