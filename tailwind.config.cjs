const config = {
	mode: "jit",
	content: ["./src/**/*.{html,js,svelte,md,svx,ts}"],

	theme: {
		extend: {
			colors: {
				gray: {
					50: "#FAFAFB",
					100: "#E8EBED",
					200: "#CFD2D3",
					300: "#9197A1",
					400: "#8E8E8F",
					500: "#353739",
					600: "#272A30",
					700: "#212326",
					800: "#1C1E21",
					900: "#151719",
				},
				secondary: {
					50: "#FFF8F5",
					100: "#FFEEE5",
					200: "#FFD9C7",
					300: "#FFC0A3",
					400: "#FFA47A",
					500: "#FF7E44",
					600: "#FF5B0F",
					700: "#E64900",
					800: "#C23D00",
					900: "#8A2C00",
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
				error: {
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					600: "#dc2626",
					700: "#b91c1c",
					800: "#991b1b",
					900: "#7f1d1d",
				},
			},
		},
	},

	plugins: [require("@tailwindcss/forms")],
}

module.exports = config
