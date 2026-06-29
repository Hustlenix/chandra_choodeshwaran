/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          900: '#78350f',
        },
        glow: {
          warm: '#f5e6d3',
          amber: '#f0c040',
          peach: '#f0d0c0',
        },
        text: {
          primary: '#000000',
          secondary: '#777169',
          muted: '#a59f97',
          inverse: '#ffffff',
        },
        surface: {
          white: '#fdfcfc',
          warm: '#f5f3f1',
          dark: '#000000',
        },
        border: {
          light: '#e5e5e5',
          medium: '#d0cecc',
          accent: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'EB Garamond', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'EB Garamond', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.04em', fontWeight: '400' }],
        'heading-1': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '400' }],
        'heading-2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '400' }],
        'heading-3': ['1.25rem', { lineHeight: '1.3', fontWeight: '500' }],
        'heading-4': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'small': ['0.75rem', { lineHeight: '1.5' }],
        'caption': ['0.625rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        card: '20px',
        badge: '18px',
        tag: '14px',
        pill: '9999px',
        input: '4px',
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px',
        'control': 'rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px',
        'inset': 'rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset',
        'elevated': 'rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px',
        'glow': '0 8px 32px rgba(240, 192, 64, 0.15)',
        'warm': '0 4px 24px rgba(240, 206, 192, 0.2)',
      },
      spacing: {
        section: '6rem',
        'section-lg': '10rem',
        'page-top': '7rem',
      },
      maxWidth: {
        reading: '65ch',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'rise': 'rise 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'reveal': 'reveal 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) scale(1.05)', opacity: '0.5' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.2' },
          '50%': { transform: 'translateY(-12px) scale(1.02)', opacity: '0.35' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.15' },
          '50%': { transform: 'translateY(-8px)', opacity: '0.25' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
