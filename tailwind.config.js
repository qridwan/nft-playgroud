module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },

    fontFamily: {
      body: ["DM Sans", "sans-serif"],
      display: ["DM Sans", "sans-serif"],
      caps: ["Archivo Black", "sans-serif"],
    },
    extend: {
      boxShadow: {
        xsm: "0px 10px 20px rgba(196, 196, 196, 0.15)",
      },
      colors: {
        indigo: "#3D00B7",
        gray: "#757575",
        dark: "#272D33",
        lemon: "#14C8B0",
        red: "#FF002E",
        blue: "#2639ED",
        light_blue: "#1E93FF",
        light: "#C4C4C4",
        white: "#FFFFFF",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        p: "1.125rem",
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.8rem",
        h4: "1.4rem",
      },
    },
  },
  plugins: [],
};
