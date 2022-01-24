import { AnimatePresence } from 'framer-motion';
import { Link, Outlet } from "remix";

export default function Foo() {
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
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
}