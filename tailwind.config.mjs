/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                olive: {
                    DEFAULT: "#556B2F",
                    dark: "#3d4d1a",
                },
                yellow: {
                    100: "#fffacd",
                    300: "#ffe066",
                    400: "#ffd60a",
                    500: "#ffb700",
                    600: "#ff9500",
                },
                gray: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                },
            },
            backgroundImage: {
                "yellow-gradient": "linear-gradient(90deg, #ffe066 0%, #ffd60a 100%)",
            },
            keyframes: {
                slideIn: {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(0)" },
                },
            },
            animation: {
                "slide-in": "slideIn 0.3s ease-in-out",
            },
        },
    },
    plugins: [],
};
