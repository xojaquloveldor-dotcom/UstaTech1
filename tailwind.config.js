/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // DESIGN1.md - Kinetic Professional (Light Mode Base)
        "surface": {
          DEFAULT: "#f8f9ff",
          dim: "#d0dbed",
          bright: "#f8f9ff",
          lowest: "#ffffff",
          low: "#eff4ff",
          container: "#e6eeff",
          high: "#dee9fc",
          highest: "#d9e3f6",
        },
        "on-surface": "#121c2a",
        "on-surface-variant": "#424754",
        "outline": "#727785",
        "outline-variant": "#c2c6d6",
        "primary": {
          DEFAULT: "#0058be",
          container: "#2170e4",
        },
        "secondary": {
          DEFAULT: "#855300",
          container: "#fea619",
        },
        "tertiary": {
          DEFAULT: "#924700",
          container: "#b75b00",
        },

        // DESIGN.md - Lumina Prime (Dark Mode Base)
        "dark": {
          "surface": "#0b1326",
          "surface-dim": "#0b1326",
          "surface-bright": "#31394d",
          "surface-lowest": "#060e20",
          "surface-low": "#131b2e",
          "surface-container": "#171f33",
          "surface-high": "#222a3d",
          "surface-highest": "#2d3449",
          "on-surface": "#dae2fd",
          "on-surface-variant": "#c2c6d6",
          "primary": "#adc6ff",
          "primary-container": "#4d8eff",
          "secondary": "#ffb95f",
          "tertiary": "#4edea3",
        },
        "background": "#f8f9ff",
        "on-background": "#121c2a",
      },
      fontFamily: {
        "display": ["Hanken Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["JetBrains Mono", "monospace"],
      },
      spacing: {
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
      }
    },
  },
  plugins: [],
}
