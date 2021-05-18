import { h } from "preact";
import type { FunctionComponent } from "preact";

import ScrollText from "./ScrollText";

const Hero: FunctionComponent = ({ children }) => {
  return (
    <div class="relative w-full h-screen flex justify-center items-center">
      <div class="text-8xl text-primary">{children}</div>
      <div class="absolute bottom-4">
        <ScrollText />
      </div>
    </div>
  );
};

export default Hero;
