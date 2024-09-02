/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#415962',
                'secondary': {
                    100: "#e6f2e6",
                    200: "#cce6cc",
                    300: "#b3d9b3",
                    400: "#99cc99",
                    500: "#81c683",
                    600: "#73b973",
                    700: "#66ac66",
                    800: "#589e58",
                    900: "#4b914b"
                },
                'accent': '#ffa51e'
            },
            keyframes: {
                slidein: {
                    from: {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                slidein: "slidein 1s ease 300ms",
            },
        },
    },
    plugins: [],
};