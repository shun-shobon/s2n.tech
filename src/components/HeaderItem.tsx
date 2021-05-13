import { h } from "preact";
import type { FunctionComponent } from "preact";

type Props = {
  link: string;
};

const HeaderItem: FunctionComponent<Props> = ({ children, link }) => {
  return (
    <li>
      <a href={link}>{children}</a>
    </li>
  );
};

export default HeaderItem;
