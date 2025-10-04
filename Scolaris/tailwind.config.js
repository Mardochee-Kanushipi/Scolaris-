module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Educational authority with digital confidence
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Secondary Colors - Growth and positive transformation
        secondary: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        // Accent Colors - Urgent clarity without alarm
        accent: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Background and Surface
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#111827", // gray-900
          secondary: "#6B7280", // gray-500
        },
        // Status Colors
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}