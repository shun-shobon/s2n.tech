import { h } from "preact";
import type { FunctionComponent } from "preact";

type Props = {
  href: string;
};

const Link: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" class="text-xl">
      {children}
    </a>
  );
};

export default Link;
