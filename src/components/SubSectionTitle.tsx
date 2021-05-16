import { h } from "preact";
import type { FunctionComponent } from "preact";

const SubSectionTitle: FunctionComponent = ({ children }) => {
  return <h2 class="text-2xl text-accent">{children}</h2>;
};

export default SubSectionTitle;
