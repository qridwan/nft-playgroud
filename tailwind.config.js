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
      body: ["Mukta", "sans-serif"],
      display: ["Roboto", "sans-serif"],
    },
    extend: {
      boxShadow: {
        xsm: "0px 10px 20px rgba(196, 196, 196, 0.15)",
      },
      colors: {
        indigo: "#45028D",
        lemon: "#66DE7D",
        orange: "#ED5656",
        black: "#14171A",
        dark: "#272D33",
        gray: "#5D6267",
        light: "#E5E5E5",
        warm: "#FAFAFA",
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
        
      },
    },
  },
  plugins: [],
};
