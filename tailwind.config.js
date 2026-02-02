/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury beige-gold palette
        ivory: '#FFF8ED',
        'soft-cream': '#FAF1E3',
        'warm-beige': '#F2E3C6',
        'soft-gold': '#EAD8A6',
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1eb',
          300: '#ede7dd',
          400: '#e3d9cb',
          500: '#d4c5b3',
          600: '#c2ad96',
        },
        nude: {
          50: '#faf9f7',
          100: '#f5f2ee',
          200: '#ebe4db',
          300: '#ddd1c2',
          400: '#cbb9a4',
          500: '#b59e84',
          600: '#9d8468',
        },
        champagne: {
          50: '#fdfdfb',
          100: '#faf9f4',
          200: '#f4f1e9',
          300: '#ebe5d6',
          400: '#dfd4bb',
          500: '#cebf9e',
          600: '#b8a782',
        },
        gold: {
          50: '#fdfbf7',
          100: '#faf5eb',
          200: '#f3e8d1',
          300: '#e8d5ae',
          400: '#d9bc82',
          500: '#c9a461',
          600: '#b38c48',
          700: '#8f6d35',
          800: '#75592a',
        },
        bronze: {
          50: '#faf7f2',
          100: '#f3ede3',
          200: '#e5d6c1',
          300: '#d4ba97',
          400: '#c19d6d',
          500: '#ab8250',
          600: '#8f6940',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        brand: ['var(--font-brand)', 'serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '300' }],
        'heading-1': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'heading-3': ['2.25rem', { lineHeight: '1.3' }],
        'heading-4': ['1.75rem', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'elegant': '0 4px 24px rgba(201, 164, 97, 0.08)',
        'elegant-lg': '0 12px 48px rgba(201, 164, 97, 0.12)',
        'glow-gold': '0 0 32px rgba(201, 164, 97, 0.25)',
        'inner-glow': 'inset 0 2px 12px rgba(255, 255, 255, 0.5)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.5rem',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
