/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nature: {
                    50: '#f2f9f5',
                    100: '#e1f3e7',
                    200: '#c3e8cd',
                    300: '#96d6a8',
                    400: '#63bd7d',
                    500: '#3fa15e',
                    600: '#2e8248',
                    700: '#26673b',
                    800: '#225232',
                    900: '#1d432b',
                    950: '#0d2415',
                },
                tech: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                // New Vibrant Accents for Black Backgrounds
                neon: {
                    purple: '#d946ef', // Fuchsia 500
                    pink: '#f43f5e',   // Rose 500
                    yellow: '#eab308', // Yellow 500
                    cyan: '#06b6d4',   // Cyan 500
                    lime: '#84cc16',   // Lime 500
                },
                // Deep rich blacks/grays for background depth
                void: {
                    800: '#18181b', // Zinc 900
                    900: '#09090b', // Zinc 950
                    950: '#000000', // Pure Black
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
        },
    },
    plugins: [],
}
