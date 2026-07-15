/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            {
                coffeeShop: {
                    "primary": "#4a3728",     // Rich Espresso
                    "secondary": "#a07855",   // Warm Latte
                    "accent": "#d4a373",      // Caramel Crema
                    "neutral": "#231b15",     // Dark Roasted Bean
                    "base-100": "#faf7f2",    // Milk Foam / Cozy Cream
                    "info": "#38bdf8",
                    "success": "#4ade80",
                    "warning": "#facc15",
                    "error": "#f87171",
                },
            },
            "dark", // Fallback dark mode
        ],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                // Smoother, cooler bouncing motion
                smoothBounce: {
                    '0%, 100%': {
                        transform: 'translateY(-4%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
            animation: {
                // Clean, continuous micro-interaction
                'smooth-bounce': 'smoothBounce 1.5s infinite',
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
