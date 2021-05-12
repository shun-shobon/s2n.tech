import { h } from "preact";
import type { FunctionComponent } from "preact";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
};

export default Layout;
