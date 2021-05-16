import { h } from "preact";
import type { FunctionComponent } from "preact";
import SubSectionTitle from "./SubSectionTitle";

type Props = {
  title: string;
};

const SubSection: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <section class="my-3">
      <SubSectionTitle>{title}</SubSectionTitle>
      <div class="text-text">{children}</div>
    </section>
  );
};

export default SubSection;
