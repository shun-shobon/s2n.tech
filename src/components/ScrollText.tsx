import { h } from "preact";
import { ChevronsDown } from "preact-feather";
import type { FunctionComponent } from "preact";

const ScrollText: FunctionComponent = () => {
  return (
    <div class="flex flex-col items-center text-primary2">
      <div>Scroll</div>
      <ChevronsDown class="animate-bounce mt-0.5" />
    </div>
  );
};

export default ScrollText;
