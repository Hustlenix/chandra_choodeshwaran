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
        navy: {
          900: '#0A0F1E',
          800: '#0D1325',
          700: '#111A2E',
          600: '#1A2540',
        },
        gold: {
          400: '#E8C54A',
          500: '#D4AF37',
          600: '#B8962E',
        },
        'off-white': '#F5F5F0',
        muted: '#8B8FA3',
        tertiary: {
          teal: '#5BC0BE',
          coral: '#FF6B6B',
          indigo: '#6C5CE7',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Figtree', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        section: '8rem',
        'section-lg': '12rem',
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
        'shimmer-gold': 'shimmerGold 3s ease-in-out infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmerGold: {
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
