import { h } from "preact";
import { ExternalLink } from "preact-feather";
import type { FunctionComponent } from "preact";

export type Link = {
  name: string;
  url: string;
};

type Props = {
  links: Array<Link>;
};

const HistoryLink: FunctionComponent<Props> = ({ links }) => {
  return (
    <ul class="flex flex-wrap gap-x-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-accent"
          >
            <ExternalLink class="inline-block w-4 h-4 -mt-1 mr-0.5" />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HistoryLink;
