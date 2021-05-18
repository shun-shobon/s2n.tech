import { h } from "preact";
import { ChevronsDown } from "preact-feather";
import type { FunctionComponent } from "preact";

const ScrollText: FunctionComponent = () => {
  return (
    <div class="flex flex-col items-center text-lg text-headline">
      <div>Scroll</div>
      <ChevronsDown class="animate-bounce mt-0.5 w-8 h-8" />
    </div>
  );
};

export default ScrollText;
