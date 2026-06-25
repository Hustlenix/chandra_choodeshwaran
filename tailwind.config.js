/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FDF6F3',
          100: '#FAEEE8',
          200: '#F3D5CA',
          300: '#E8B4A3',
          400: '#D4897A',
          500: '#B85A4C',
          600: '#9A473A',
          700: '#7D372C',
          800: '#5F2920',
          900: '#3D1913',
        },
        blush: {
          50: '#FDF8F3',
          100: '#F9F0E8',
          200: '#F3E3D8',
        },
        text: {
          primary: '#2D1F1A',
          secondary: '#5A4740',
          muted: '#8C776E',
          inverse: '#FFFFFF',
        },
        surface: {
          white: '#FEFCF9',
          blush: '#FDF6F3',
          rose: '#FAEEE8',
          dark: '#2D1F1A',
        },
        border: {
          light: '#F3E3D8',
          medium: '#E8C9BC',
          accent: '#D4897A',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Figtree', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        section: '6rem',
        'section-lg': '10rem',
        'page-top': '8rem',
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(3rem, 7vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'heading-2': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-3': ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-4': ['clamp(1rem, 1.5vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '0' }],
        'body-lg': ['clamp(1.125rem, 1.25vw, 1.5rem)', { lineHeight: '1.6' }],
        'body': ['clamp(0.9375rem, 1vw, 1.125rem)', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'small': ['0.75rem', { lineHeight: '1.4' }],
        'micro': ['0.625rem', { lineHeight: '1.3' }],
        'number-massive': ['clamp(6rem, 15vw, 15rem)', { lineHeight: '0.8', letterSpacing: '-0.04em' }],
        'number-lg': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.85', letterSpacing: '-0.03em' }],
      },
      animation: {
        'gradient-drift': 'gradientDrift 20s ease infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'shimmer-pink': 'shimmerPink 3s ease-in-out infinite',
        'drift-slow': 'driftSlow 15s ease-in-out infinite',
      },
      keyframes: {
        gradientDrift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(224, 123, 140, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(224, 123, 140, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmerPink: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -30px)' },
          '66%': { transform: 'translate(-20px, 20px)' },
        },
      },
    },
  },
  plugins: [],
}
