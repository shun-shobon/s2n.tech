import { component$ } from "@builder.io/qwik";
import { SiGithub, SiX } from "@qwikest/icons/simpleicons";

import * as styles from "./Links.css";

const Links = component$(() => {
	return (
		<ul class={styles.links}>
			<li>
				<a href="https://github.com/shun-shobon" target="_blank">
					<SiGithub aria-label="GitHub" />
				</a>
			</li>
			<li>
				<a href="https://x.com/shun_shobon" target="_blank">
					<SiX aria-label="X" />
				</a>
			</li>
		</ul>
	);
});

export default Links;
