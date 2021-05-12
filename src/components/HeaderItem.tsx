import { h } from "preact";
import type { FunctionComponent } from "preact";

const HeaderItem: FunctionComponent = ({ children }) => {
  return <span>{children}</span>;
};

export default HeaderItem;
