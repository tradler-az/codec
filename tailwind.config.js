/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Green Palette (maintained from original)
                primary: {
                    50: '#e6f7f0',
                    100: '#b3e8d4',
                    200: '#80d9b8',
                    300: '#4dca9c',
                    400: '#1abb80',
                    500: '#00A659', // Main brand green
                    600: '#008547',
                    700: '#006435',
                    800: '#004323',
                    900: '#002211',
                },
                // Teal Accent (for gradients)
                teal: {
                    50: '#e6f5f4',
                    100: '#b3e2df',
                    200: '#80cfca',
                    300: '#4dbcb5',
                    400: '#1aa9a0',
                    500: '#00837B', // Brand teal
                    600: '#006962',
                    700: '#004f4a',
                    800: '#003531',
                    900: '#001a19',
                },
                // Red Palette (for alerts, errors, and eye-catching elements)
                red: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444', // Main alert red
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                },
                // Enhanced Black/Gray Palette
                dark: {
                    50: '#f8f9fa',
                    100: '#e9ecef',
                    200: '#dee2e6',
                    300: '#ced4da',
                    400: '#adb5bd',
                    500: '#6c757d',
                    600: '#495057',
                    700: '#343a40',
                    800: '#2E2E2E', // Main dark color
                    900: '#1a1a1a',
                    950: '#0a0a0a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'SF Pro Display', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Inter', 'SF Pro Display', 'Segoe UI', 'system-ui', 'sans-serif'],
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
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            boxShadow: {
                'green-sm': '0 1px 2px 0 rgba(0, 166, 89, 0.05)',
                'green-md': '0 4px 6px -1px rgba(0, 166, 89, 0.1), 0 2px 4px -1px rgba(0, 166, 89, 0.06)',
                'green-lg': '0 10px 15px -3px rgba(0, 166, 89, 0.1), 0 4px 6px -2px rgba(0, 166, 89, 0.05)',
                'green-xl': '0 20px 25px -5px rgba(0, 166, 89, 0.1), 0 10px 10px -5px rgba(0, 166, 89, 0.04)',
                'red-sm': '0 1px 2px 0 rgba(239, 68, 68, 0.05)',
                'red-md': '0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)',
                'red-lg': '0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(239, 68, 68, 0.05)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};