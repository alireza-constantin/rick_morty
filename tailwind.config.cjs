/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgColor: "var(--theme-bg)",
                textColor: "var(--theme-text)",
                accent: "var(--theme-accent)",
                "accent-2": "var(--theme-accent-2)",
            },
            fontFamily: {
                nav: ['Creepster','cursive']
            }
        },
    },
    plugins: [],
}
