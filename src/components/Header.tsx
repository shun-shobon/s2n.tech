import { h } from "preact";
import type { FunctionComponent } from "preact";

const Header: FunctionComponent = ({ children }) => {
  return (
    <header class="sticky top-0 bg-white rounded-b-lg shadow-md">
      <nav class="container mx-auto">
        <ul class="flex flex-wrap justify-around py-3">{children}</ul>
      </nav>
    </header>
  );
};

export default Header;
