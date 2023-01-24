const config = {
	mode: "jit",
	content: ["./src/**/*.{html,js,svelte,md,svx,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Heebo", "sans-serif"],
			},
			fontSize: {
				xs: ["0.651rem", "18.235px"],
				sm: ["0.781rem", "21.875px"],
				base: ["1.125rem", "31.5px"],
				xl: ["1.35rem", "37.8px"],
				"2xl": ["1.62rem", "45.36px"],
				"3xl": ["1.944rem", "54.425px"],
				"4xl": ["2.333rem", "65.31px"],
				"5xl": ["2.799rem", "78.382px"],
			},
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
				accent: {
					50: "#fefbe8",
					100: "#fff7c2",
					200: "#ffea89",
					300: "#ffd333",
					400: "#fdc112",
					500: "#eca706",
					600: "#cc8002",
					700: "#a35905",
					800: "#86460d",
					900: "#723a11",
				},
				info: {
					50: "#eff9ff",
					100: "#def1ff",
					200: "#b6e5ff",
					300: "#75d3ff",
					400: "#2cbdff",
					500: "#00aaff",
					600: "#0083d4",
					700: "#0068ab",
					800: "#00588d",
					900: "#064974",
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
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.50"),
						p: {
							fontSize: "1.15rem",
						},
						a: {
							color: theme("colors.primary.500"),
							"&:hover": {
								color: theme("colors.primary.600"),
								transition: "all 0.1s ease-in-out",
							},
						},
						h1: {
							color: theme("colors.accent.300"),
							fontWeight: "500",
						},
						h2: {
							color: theme("colors.accent.300"),
							fontWeight: "500",
						},
						h3: {
							color: theme("colors.accent.300"),
							fontWeight: "500",
						},
						h4: {
							color: theme("colors.accent.300"),
							fontWeight: "500",
						},
					},
				},
				lg: {
					css: {
						li: {
							p: {
								marginTop: 0,
								marginBottom: 0,
							},
						},
					},
				},
			}),
		},
	},

	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}

module.exports = config
