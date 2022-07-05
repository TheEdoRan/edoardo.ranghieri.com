const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: ["./public/**/*.html"],
	theme: {
		extend: {
			animation: {
				"hello-world": "helloWorld 10s linear infinite",
			},
			keyframes: {
				helloWorld: {
					"0%, 100%": { content: 'console.log("Hello, world!")' },
					"20%": { content: 'printf("%s");' },
					"40%": { content: 'std::cout << "%s";' },
					"60%": { content: 'fmt.Println("%s")' },
					"80%": { content: 'print("%s")' },
				},
			},
		},
		screens: {
			xs: "300px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
