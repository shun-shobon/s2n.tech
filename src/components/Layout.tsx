import { h } from "preact";
import type { FunctionComponent } from "preact";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <main>
      <article class="container mx-auto px-6">{children}</article>
    </main>
  );
};

export default Layout;
