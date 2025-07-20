/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular"],
        nunito: ["Nunito-Regular"],
      },
      colors: {
        primary: "#7F875E",
        secondary: "#F5F1ED",
        accent: "#252323",
        super: "#E3B025",
      },
    },
  },
  plugins: [],
};
