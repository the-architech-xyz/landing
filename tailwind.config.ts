import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'electric-blue': 'hsl(var(--electric-blue))',
				'surface-elevated': 'hsl(var(--surface-elevated))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
			},
			backgroundImage: {
				'gradient-electric': 'linear-gradient(135deg, hsl(217 91% 60%), hsl(217 91% 55%))',
				'gradient-hero': 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))'
			},
			boxShadow: {
				'electric': '0 10px 30px -10px hsl(217 91% 60% / 0.3)',
				'elevated': '0 4px 12px -2px hsl(var(--foreground) / 0.1)'
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate'
			},
			keyframes: {
				'fade-in-up': {
					'from': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'from': {
						'box-shadow': '0 0 5px hsl(217 91% 60% / 0.2)'
					},
					'to': {
						'box-shadow': '0 0 15px hsl(217 91% 60% / 0.4)'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
