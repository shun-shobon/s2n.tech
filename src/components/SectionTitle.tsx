import { h } from "preact";
import type { FunctionComponent } from "preact";

type Props = {
  id: string;
};

const SectionTitle: FunctionComponent<Props> = ({ children, id }) => {
  return <h1 id={id}>{children}</h1>;
};

export default SectionTitle;
