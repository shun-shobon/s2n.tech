import { h } from "preact";
import type { FunctionComponent } from "preact";

const SectionTitle: FunctionComponent = ({ children }) => {
  return <h1>{children}</h1>;
};

export default SectionTitle;
