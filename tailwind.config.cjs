const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
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
					1000: "#060709",
				},
				primary: {
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
				secondary: {
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

	plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
