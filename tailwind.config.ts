import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        cream: "#F7F5F1",
        stone: "#EFEBE4",
        ink: {
          900: "#0B0B0C",
          800: "#1A1B1E",
          700: "#2B2C30",
          600: "#4A4B50",
          500: "#6B6C72",
          400: "#8A8B90",
          200: "#D8D7D2",
        },
        navy: {
          DEFAULT: "#10203D",
          deep: "#0B1730",
          soft: "#1C2E52",
          mist: "#EEF1F6",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-2": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-3": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        content: "1240px",
        prose: "680px",
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "3px",
      },
      letterSpacing: {
        wide2: "0.14em",
        wide3: "0.2em",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};

export default config;
