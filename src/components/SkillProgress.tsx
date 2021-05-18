import { h } from "preact";
import type { FunctionComponent } from "preact";

import Progress from "./Progress";

type Props = {
  name: string;
  completed: number;
};

const SkillProgress: FunctionComponent<Props> = ({ name, completed }) => {
  return (
    <div class="my-2 flex flex-col sm:flex-row sm:items-center">
      <span style="min-width:15rem">{name}</span>
      <Progress completed={completed} />
    </div>
  );
};

export default SkillProgress;
