import { h } from "preact";
import type { FunctionComponent } from "preact";

import ScrollText from "./ScrollText";

const Hero: FunctionComponent = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <ScrollText />
    </div>
  );
};

export default Hero;
