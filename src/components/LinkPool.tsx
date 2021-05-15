import { h } from "preact";
import type { FunctionComponent } from "preact";

const LinkPool: FunctionComponent = ({ children }) => {
  return <div class="flex flex-wrap gap-4 justify-center">{children}</div>;
};

export default LinkPool;
