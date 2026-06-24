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
          50: '#FFF5F7',
          100: '#FFE8ED',
          200: '#FFCED9',
          300: '#FCA5B5',
          400: '#E07B8C',
          500: '#D63F6D',
          600: '#C4536A',
          700: '#9B3A4E',
          800: '#78283B',
          900: '#4A1523',
        },
        blush: {
          50: '#FFF9FA',
          100: '#FFF2F4',
          200: '#FFE5EA',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#8B7B7B',
          inverse: '#FFFFFF',
        },
        surface: {
          white: '#FFFFFF',
          blush: '#FFF5F7',
          rose: '#FFE8ED',
          dark: '#2D1B20',
        },
        border: {
          light: '#FFE5EA',
          medium: '#FFCED9',
          accent: '#E07B8C',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Figtree', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
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
