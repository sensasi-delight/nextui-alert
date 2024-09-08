import pkg from "./package.json" assert { type: "json" };

import typescript from "@rollup/plugin-typescript";

const config = [
	{
		input: "src/index.ts",
		output: [
			{
				file: pkg.module,
				format: "es",
				sourcemap: true,
			},
		],
		external: [...Object.keys(pkg.dependencies || {}), "react/jsx-runtime"],
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
			}),
		],
	},
];

export default config;
