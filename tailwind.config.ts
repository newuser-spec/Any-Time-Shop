import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // New vibrant color palette
        'fresh-green': {
          DEFAULT: '#2ecc71',
          50: '#e8f8f0',
          100: '#d1f2e0',
          200: '#a3e4c1',
          300: '#75d7a2',
          400: '#47c983',
          500: '#2ecc71',
          600: '#25a35a',
          700: '#1c7a44',
          800: '#13512d',
          900: '#0a2917',
        },
        'vibrant-orange': {
          DEFAULT: '#f39c12',
          50: '#fef5e7',
          100: '#fdebd0',
          200: '#fad7a0',
          300: '#f8c471',
          400: '#f5b041',
          500: '#f39c12',
          600: '#d68910',
          700: '#b9770e',
          800: '#9c640c',
          900: '#7e5109',
        },
        'deep-blue': {
          DEFAULT: '#3498db',
          50: '#ebf5fb',
          100: '#d6eaf8',
          200: '#aed6f1',
          300: '#85c1e9',
          400: '#5dade2',
          500: '#3498db',
          600: '#2e86c1',
          700: '#2874a6',
          800: '#21618c',
          900: '#1b4f75',
        },
        'rich-purple': {
          DEFAULT: '#9b59b6',
          50: '#f5eef8',
          100: '#ebdcf1',
          200: '#d7b9e3',
          300: '#c39bd5',
          400: '#af7cc7',
          500: '#9b59b6',
          600: '#884ea0',
          700: '#76448a',
          800: '#5d2e7a',
          900: '#4a2352',
        },
        'warm-red': {
          DEFAULT: '#e74c3c',
          50: '#fdedec',
          100: '#fadbd8',
          200: '#f5b7b1',
          300: '#f1948a',
          400: '#ec7063',
          500: '#e74c3c',
          600: '#d63031',
          700: '#b03a2e',
          800: '#943126',
          900: '#7b241c',
        },
        // Default theme colors with better contrast
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(160, 84%, 39%)', // Fresh green as primary
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(210, 40%, 96.1%)',
          foreground: 'hsl(222.2, 47.4%, 11.2%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
        muted: {
          DEFAULT: 'hsl(210, 40%, 96.1%)',
          foreground: 'hsl(215.4, 16.3%, 46.9%)',
        },
        accent: {
          DEFAULT: 'hsl(210, 40%, 96.1%)',
          foreground: 'hsl(222.2, 47.4%, 11.2%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(224, 71.4%, 4.1%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(224, 71.4%, 4.1%)',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      // Add gradient utilities
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #2ecc71 0%, #3498db 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)',
        'accent-gradient': 'linear-gradient(135deg, #9b59b6 0%, #3498db 100%)',
      },
      // Add subtle shadows
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
