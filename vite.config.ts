/// <reference types="histoire" />
import { sveltekit } from "@sveltejs/kit/vite"
import type { UserConfig } from "vite"
import { HstSvelte } from "@histoire/plugin-svelte"
import { defaultColors } from "histoire"

import path from "path"

const config: UserConfig = {
	plugins: [sveltekit()],
	histoire: {
		plugins: [HstSvelte()],
		setupFile: "/histoire-setup.ts",
		tree: {
			groups: [
				{
					id: "top",
					title: "",
				},
			],
		},
		theme: {
			title: "ByteUI",
			colors: {
				gray: {
					50: "#f5f7f8",
					100: "#dde4ea",
					200: "#bbc8d4",
					300: "#91a4b7",
					400: "#6a7f97",
					500: "#50647c",
					600: "#3f4e62",
					700: "#354050",
					800: "#2d3642",
					900: "#0d0f12",
					950: "#060709",
				},
				primary: {
					50: "#edfff8",
					100: "#d5fff2",
					200: "#aeffe4",
					300: "#70ffd1",
					400: "#2bfdb7",
					500: "#00e599",
					600: "#00c07c",
					700: "#009664",
					800: "#067551",
					900: "#076045",
				},
			},
		},
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
			$components: path.resolve("./src/lib"),
		},
	},
}

export default config
