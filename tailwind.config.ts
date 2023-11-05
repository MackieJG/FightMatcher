import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "backgroundFloralWhite": "#FFF8F0",
        "textSpaceCadetBlue": "#111D4A",
        "sunset": "#FFCF99",
        "pennRed": "#92140C",
        "raisinBlack": "#1E1E24"
      },
    },
  },
  plugins: [],
}
export default config
