import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      },
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      inter: ["var(--font-inter)", "sans-serif"],
      nacelle: ["var(--font-nacelle)", "sans-serif"],
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5384" }],
      sm: ["0.875rem", { lineHeight: "1.5715" }],
      base: [
        "0.9375rem",
        { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
      ],
      lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
      xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
      "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
      "3xl": [
        "1.75rem",
        { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
      ],
      "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
      "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
    },
    animation: {
      shine: "shine 5s ease-in-out 500ms infinite",
    },
    keyframes: {
      shine: {
        "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
        "10%": { opacity: ".8" },
        "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
        "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
      },
      gradient: {
        to: { "background-position": "200% center" },
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
  darkMode: 'class'
};
export default config;
