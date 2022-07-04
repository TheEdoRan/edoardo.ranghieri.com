const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: ["./*.html"],
	theme: {
		screens: {
			xs: "300px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
