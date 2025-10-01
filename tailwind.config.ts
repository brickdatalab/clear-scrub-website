import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'cs-black': '#080808',
        'cs-white': '#FFFFFF',
        'cs-g-900': '#0D0D0D',
        'cs-g-800': '#1A1A1A',
        'cs-g-700': '#333333',
        'cs-g-500': '#666666',
        'cs-g-400': '#999999',
        'cs-g-300': '#CCCCCC',
        'cs-g-200': '#E0E0E0',
        'cs-g-100': '#F5F5F5',
        'cs-accent': '#006F46',
      },
      fontFamily: {
        sans: ['KH Teka', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'subhead': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
        'heading': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'display': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
