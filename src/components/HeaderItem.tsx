import { h } from "preact";
import type { FunctionComponent } from "preact";

type Props = {
  link: string;
};

const HeaderItem: FunctionComponent<Props> = ({ children, link }) => {
  return (
    <li>
      <a href={link} class="text-2xl text-primary5 hover:opacity-75">
        {children}
      </a>
    </li>
  );
};

export default HeaderItem;
