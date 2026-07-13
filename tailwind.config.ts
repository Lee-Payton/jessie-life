import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Jessie.life brand — captured from live site
        coral: {
          DEFAULT: '#ff5758',
          600: '#f24344',
          700: '#d93536',
        },
        ink: '#313131',
        cream: '#fafae1',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
        serif: ['var(--font-bellefair)', 'serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
