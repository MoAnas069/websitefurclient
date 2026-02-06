/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-ivory': '#FAF9F6', // Warmer off-white
                'brand-cream': '#F2EFE9', // Sandy cream
                'brand-beige': '#DCCZB3', // (Typo? No, wait. Let's use valid hex) '#E6E0D2',
                'brand-beige': '#E6E0D2', // Warm Taupe/Beige
                'brand-charcoal': '#2C2A26', // Warm Black/Espresso
                'brand-wood': '#4A3B32', // Rich Walnut brown
                'brand-gray': '#8A847C', // Warm Taupe Gray
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
        },
    },
    plugins: [],
}
