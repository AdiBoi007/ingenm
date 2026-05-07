import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FDF8F4",
        surface: "#FFFFFF",
        ink: "#111111",
        orange: "#FF6B2B",
        green: "#1DB87A",
        border: "#EDE8E3",
        muted: "#888888",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        clash: ["Clash Display", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        "mono-dm": ["DM Mono", "monospace"],
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-med": "floatMed 6s ease-in-out infinite",
        "float-fast": "floatFast 4.5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        scan: "scan 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        floatMed: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-25px, -15px) scale(1.08)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(15px, -10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        scan: {
          "0%": { width: "0%", opacity: "1" },
          "70%": { width: "100%", opacity: "1" },
          "85%": { width: "100%", opacity: "1" },
          "100%": { width: "0%", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
