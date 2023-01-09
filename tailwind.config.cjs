const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
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
				},
			},
		},
	},

	plugins: [],
};

module.exports = config;
