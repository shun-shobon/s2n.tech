import { h } from "preact";
import type { FunctionComponent } from "preact";

const Header: FunctionComponent = ({ children }) => {
  return (
    <header class="sticky z-10 top-0 rounded-b-lg shadow-md bg-background">
      <nav class="container mx-auto">
        <ul class="flex flex-wrap justify-around py-3">{children}</ul>
      </nav>
    </header>
  );
};

export default Header;
