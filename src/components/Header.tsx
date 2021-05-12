import { h } from "preact";
import type { FunctionComponent } from "preact";

const Header: FunctionComponent = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
