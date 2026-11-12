import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust to your paths
    theme: {
        extend: {
            fontFamily: {
                bungee: ["Bungee", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;