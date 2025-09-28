import { $ } from "execa";
import { rimraf as r } from "rimraf";

// TODO: promote this as a script to @alienfast/ci once it is stable

export default {};
console.log("Cleaning...");

await $`yarn tsc -b --clean`;

// dist node_modules/.cache *.log test-report.xml
await Promise.all([
	r("dist", { glob: true }),
	r("node_modules/.cache"),
	r("*.log", { glob: true }),
	r("test-report.xml"),
]);
