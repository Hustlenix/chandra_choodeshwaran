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
        accent: {
          50: '#FDF6F3',
          100: '#FAEEE8',
          200: '#F3D5CA',
          300: '#E8B4A3',
          400: '#B85A4C',
          500: '#A14A3C',
          600: '#8A3D30',
          700: '#7D372C',
          800: '#5F2920',
          900: '#3D1913',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#8C776E',
          inverse: '#FFFFFF',
        },
        surface: {
          white: '#FEFCF9',
          warm: '#FDF8F3',
          dark: '#2D1F1A',
        },
        border: {
          light: '#F0E6DF',
          medium: '#E0CEC4',
          accent: '#B85A4C',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Figtree', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-2': ['clamp(1.5rem, 2.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-3': ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-4': ['clamp(1rem, 1.5vw, 1.5rem)', { lineHeight: '1.3' }],
        'body-lg': ['clamp(1.125rem, 1.25vw, 1.375rem)', { lineHeight: '1.65' }],
        'body': ['clamp(0.9375rem, 1vw, 1.125rem)', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'small': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        section: '5rem',
        'section-lg': '8rem',
        'page-top': '7rem',
      },
      maxWidth: {
        reading: '65ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
