import { h } from "preact";
import type { FunctionComponent } from "preact";

import SectionTitle from "./SectionTitle";

type Props = {
  title: string;
};

const Section: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </section>
  );
};

export default Section;
