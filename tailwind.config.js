/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    900: '#191919', // Deep charcoal black from Ink Bureau
                    800: '#222222',
                    700: '#333333',
                }
            },
            fontFamily: {
                sans: ['"Manrope"', 'sans-serif'], // Geometric, clean, modern (acting as our Gilroy)
                heading: ['"Montserrat"', 'sans-serif'], // Or Playfair Display for a serif option
            },
            letterSpacing: {
                tighter: '-0.04em',
                tight: '-0.02em',
                widestG: '.15em',
            }
        },
    },
    plugins: [],
}
