import type { LocalImageService } from "astro";
import { baseService } from "astro/assets";

// https://github.com/withastro/astro/issues/4109#issuecomment-1653149464
const service: LocalImageService = {
	...baseService,

	async transform(inputBuffer, transform, serviceConfig) {
		// Purposefully obfuscate the import to prevent bundling => will only work at build time!
		// eslint-disable-next-line typescript/no-unsafe-assignment, typescript/no-unsafe-call, typescript/no-implied-eval, no-new-func
		const imageService: LocalImageService = await new Function(
			'return import("astro/assets/services/squoosh")',
			// eslint-disable-next-line typescript/no-unsafe-return, typescript/no-unsafe-member-access, typescript/no-explicit-any
		)().then((m: any) => m.default);

		return await imageService.transform(inputBuffer, transform, serviceConfig);
	},
};

export default service;
