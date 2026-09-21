import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        paper: "#F4F1EA",
        mute: "#8A877F",
        signal: "#C8F542",
        line: "#1F1F1F",
        // Das Haarstudio preview — warm editorial palette, kept separate
        // from the agency tokens above so the client site never inherits
        // the dark/neon agency look.
        salonInk: "#211B17",
        salonCream: "#FBF6EF",
        salonCard: "#F3EADD",
        salonClay: "#A34B2A",
        salonMute: "#8A7C6E",
        salonLine: "#E7DCC9",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        salonDisplay: ["var(--font-salon-display)", "Georgia", "serif"],
        salonSans: ["var(--font-salon-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
