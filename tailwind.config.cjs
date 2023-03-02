/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral
        neutral50: '#F8FAFC',
        neutral100: '#F1F5F9',
        neutral200: '#E2E8F0',
        neutral300: '#CBD5E1',
        neutral400: '#94A3B8',
        neutral500: '#64748B',
        neutral600: '#475569',
        neutral700: '#334155',
        neutral800: '#1E293B',
        nautral900: '#0F172A',

        // Primary
        primary50: '#D6EBF2',
        primary100: '#AED7E6',
        primary200: '#85C3D9',
        primary300: '#5CAFCC',
        primary400: '#3A98B9',
        primary500: '#2E7A94',
        primary600: '#235B6F',
        primary700: '#173D4A',
        primary800: '#0C1E25',

        // Secondary
        secondary50: '#FFE3D2',
        secondary100: '#FECEA5',
        secondary200: '#FFAB77',
        secondary300: '#FF8F4A',
        secondary400: '#FF731D',
        secondary500: '#E35600',
        secondary600: '#AA4100',
        secondary700: '#722B00',
        secondary800: '#391600',
      }
    },
    fontFamily: {
      inter: 'Inter'
    }
  },
  plugins: [],
}