/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors:{
                "primary": "#2091F9",
                "secondary-green": "#2DC071",
                "secondary-orange": "#F15B07",
                "text": "#252B42",
                "second-text": "#374754",
                "dark-background": "#252B42",
            }
        },
        fontFamily:{
            "Graphik" : ["Graphik", "sans-serif"],
        }
    },
    plugins: [],
}

