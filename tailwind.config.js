/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          400: '#0447ff',
          500: '#0338cc',
          600: '#022999',
          700: '#011b66',
          900: '#000a33',
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
          accent: '#0447ff',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Figtree', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Figtree', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.04em', fontWeight: '300' }],
        'heading-1': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '300' }],
        'heading-2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '300' }],
        'heading-3': ['1.25rem', { lineHeight: '1.2', fontWeight: '500' }],
        'heading-4': ['1rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
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
      },
      spacing: {
        section: '5rem',
        'section-lg': '8rem',
        'page-top': '6rem',
      },
      maxWidth: {
        reading: '65ch',
      },
    },
  },
  plugins: [],
}
