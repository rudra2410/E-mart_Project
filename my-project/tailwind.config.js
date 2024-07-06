const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 5px 10px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        vsm: "420px",
        lmd: "600px",
        slg: "900px",
        mlg: "1130px",
        lg: "1270px",
      },
    },
  },
  plugins: [nextui()],
};
