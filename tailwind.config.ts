import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        header: "#282A36",
        footer: "#282A36",
        body: "#F0F2F5",
        textHeader: "rgb(29, 37, 59",
        button: "#329BFFF",
        textButton: "#FFF",
        textGray: "rgb(128, 128, 128)",
        success: "#1CAA4D",
        danger: "#F33620",
        warning: "#FFCC00",
        info: "rgb(24, 144, 255)",
        darkBody: "#1E1E2F",
        darkBlock: "#27293D",
        main: "#FF883E"
      }
    },
  },
  plugins: [],
}

export default config