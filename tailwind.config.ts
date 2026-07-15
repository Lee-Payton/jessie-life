import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Jessie.life brand — sampled from Jessie's design direction (July 2026)
        cream: {
          DEFAULT: '#f6f3ec', // page background / bone
          light: '#fbf9f4',
          dark: '#ece7db',
        },
        terracotta: {
          DEFAULT: '#d3553e', // primary accent / buttons / ".life"
          600: '#c34c38',
          700: '#a93f2e',
        },
        forest: {
          DEFAULT: '#3d4935', // deep green — secondary buttons, eyebrows, ink accents
          600: '#334029',
          700: '#2a3423',
        },
        ink: '#2b2620', // warm near-black for headings/body
        sand: '#d8d4c6', // muted band / borders
      },
      fontFamily: {
        display: ['var(--font-cormorant-garamond)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '75rem',
      },
    },
  },
  plugins: [],
};

export default config;
