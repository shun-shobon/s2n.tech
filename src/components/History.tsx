import { h } from "preact";
import type { FunctionComponent } from "preact";

import HistoryLink from "./HistoryLink";
import type { Link } from "./HistoryLink";

type History = {
  title: string;
  date: string;
  links?: Array<Link> | null;
};

type Props = {
  history: History;
};

const History: FunctionComponent<Props> = ({ history }) => {
  return (
    <div class="my-3">
      <h4 class="text-text">{history.date}</h4>
      <h3 class="text-xl text-headline">{history.title}</h3>
      {history.links != null ? <HistoryLink links={history.links} /> : null}
    </div>
  );
};

export default History;
