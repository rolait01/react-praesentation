/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                hsblue: "#003366", // falls du eigene Farben brauchst
            },
        },
    },
    plugins: [],
};
