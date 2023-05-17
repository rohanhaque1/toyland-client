/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4eb3d8",

          secondary: "#ffc9fb",

          accent: "#01c688",

          neutral: "#17191C",

          "base-100": "#FCFCFD",

          info: "#6B96E6",

          success: "#2BCA72",

          warning: "#F5AD61",

          error: "#F46264",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

