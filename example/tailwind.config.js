/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/drawy/src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				"slide-in-right": {
					from: { transform: "translate3d(100%,0,0)" },
					to: { transform: "translate3d(0,0,0)" },
				},
				"slide-out-right": {
					from: { transform: "translate3d(0,0,0)" },
					to: { transform: "translate3d(100%,0,0)" },
				},
			},
			animation: {
				"slide-out-right":
					"slide-out-right 150ms cubic-bezier(0.22, 1, 0.36, 1)",
				"slide-in-right": "slide-in-right 150ms cubic-bezier(0.22, 1, 0.36, 1)",
			},
		},
	},
	plugins: [],
};
