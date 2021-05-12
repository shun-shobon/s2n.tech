import { h } from "preact";
import type { FunctionComponent } from "preact";

const Layout: FunctionComponent = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
