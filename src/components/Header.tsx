import { h } from "preact";
import type { FunctionComponent } from "preact";

const Header: FunctionComponent = ({ children }) => {
  return (
    <header>
      <nav>
        <ul>{children}</ul>
      </nav>
    </header>
  );
};

export default Header;
