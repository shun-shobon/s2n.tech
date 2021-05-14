import { h } from "preact";
import type { FunctionComponent } from "preact";

import SectionTitle from "./SectionTitle";

type Props = {
  title: string;
  id: string;
};

const Section: FunctionComponent<Props> = ({ children, title, id }) => {
  return (
    <section class="my-6">
      <SectionTitle id={id}>{title}</SectionTitle>
      <div class="mt-3">{children}</div>
    </section>
  );
};

export default Section;
