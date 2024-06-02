/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    colors: {
      'black': '#0B090A',
      'almost-black': "#161A1D",
      'white': '#FFFFFF',
      'light-red': "#E5383B",
      'deep-red': "#BA181B",
      'almost-white': "#F5F3F4"
    },
    fontFamil: {
      Raleway:['Raleway', 'sans-serif'],
    },

    extend: {
      backgroundImage: {
        'hero-cover': "url('public/Celluloid-herobg.png')",
      }
    },
  },
  plugins: [],
}

