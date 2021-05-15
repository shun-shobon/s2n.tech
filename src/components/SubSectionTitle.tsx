import { h } from "preact";
import type { FunctionComponent } from "preact";

const SubSectionTitle: FunctionComponent = ({ children }) => {
  return <h2 class="text-2xl text-primary5">{children}</h2>;
};

export default SubSectionTitle;
