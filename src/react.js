/**
 * React-specific Biome configuration.
 * Extends base configuration with React domain rules.
 */
import base from "./base.js";

export default {
	...base,
	linter: {
		...(base.linter || {}),
		domains: {
			...(base.linter?.domains || {}),
			react: "all",
		},
	},
};
