import { h } from "preact";
import type { FunctionComponent } from "preact";

import SectionTitle from "./SectionTitle";

type Props = {
  title: string;
  id: string;
};

const Section: FunctionComponent<Props> = ({ children, title, id }) => {
  return (
    <section>
      <SectionTitle id={id}>{title}</SectionTitle>
      <div>{children}</div>
    </section>
  );
};

export default Section;
