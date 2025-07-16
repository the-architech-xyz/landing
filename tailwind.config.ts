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
				// Architech Rich Color System
				'architech': {
					'primary': 'hsl(var(--architech-primary))',
					'secondary': 'hsl(var(--architech-secondary))',
					'tertiary': 'hsl(var(--architech-tertiary))',
					'electric': 'hsl(var(--architech-electric))',
					'electric-light': 'hsl(var(--architech-electric-light))',
					'electric-dark': 'hsl(var(--architech-electric-dark))',
					'electric-glow': 'hsl(var(--architech-electric-glow))',
					'purple': 'hsl(var(--architech-purple))',
					'cyan': 'hsl(var(--architech-cyan))',
					'emerald': 'hsl(var(--architech-emerald))',
					'gold': 'hsl(var(--architech-gold))',
					'coral': 'hsl(var(--architech-coral))',
					'violet': 'hsl(var(--architech-violet))',
					'success': 'hsl(var(--architech-success))',
					'success-light': 'hsl(var(--architech-success-light))',
					'warning': 'hsl(var(--architech-warning))',
					'warning-light': 'hsl(var(--architech-warning-light))',
					'danger': 'hsl(var(--architech-danger))',
					'danger-light': 'hsl(var(--architech-danger-light))',
					'surface': 'hsl(var(--architech-surface))',
					'surface-elevated': 'hsl(var(--architech-surface-elevated))',
					'surface-hover': 'hsl(var(--architech-surface-hover))',
					'surface-active': 'hsl(var(--architech-surface-active))',
					'border': 'hsl(var(--architech-border))',
					'border-hover': 'hsl(var(--architech-border-hover))',
					'glass': 'hsl(var(--architech-glass))',
					'glass-border': 'hsl(var(--architech-glass-border))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace']
			},
			backgroundImage: {
				'gradient-electric': 'linear-gradient(135deg, hsl(var(--architech-electric)), hsl(var(--architech-electric-dark)))',
				'gradient-architech': 'linear-gradient(135deg, hsl(var(--architech-electric)), hsl(var(--architech-purple)))',
				'gradient-hero': 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))',
				'gradient-surface': 'linear-gradient(135deg, hsl(var(--architech-surface)), hsl(var(--architech-surface-elevated)))',
				'gradient-highlight': 'linear-gradient(135deg, hsl(var(--architech-electric)), hsl(var(--architech-gold)))',
				'gradient-professional': 'linear-gradient(135deg, hsl(var(--architech-primary)), hsl(var(--architech-secondary)))',
				'gradient-creative': 'linear-gradient(135deg, hsl(var(--architech-purple)), hsl(var(--architech-violet)))',
				'gradient-ocean': 'linear-gradient(135deg, hsl(var(--architech-electric)), hsl(var(--architech-cyan)))',
				'gradient-energy': 'linear-gradient(135deg, hsl(var(--architech-coral)), hsl(var(--architech-gold)))',
				'gradient-forest': 'linear-gradient(135deg, hsl(var(--architech-emerald)), hsl(160 85% 45%))',
				'gradient-success': 'linear-gradient(135deg, hsl(var(--architech-success)), hsl(var(--architech-emerald)))',
				'gradient-warning': 'linear-gradient(135deg, hsl(var(--architech-warning)), hsl(var(--architech-gold)))',
				'gradient-danger': 'linear-gradient(135deg, hsl(var(--architech-danger)), hsl(var(--architech-coral)))',
				'gradient-rainbow': 'linear-gradient(135deg, hsl(var(--architech-electric)), hsl(var(--architech-purple)), hsl(var(--architech-cyan)))',
				'gradient-sunset': 'linear-gradient(135deg, hsl(var(--architech-coral)), hsl(var(--architech-gold)), hsl(var(--architech-warning)))',
				'gradient-aurora': 'linear-gradient(135deg, hsl(var(--architech-electric)), hsl(var(--architech-violet)), hsl(var(--architech-emerald)))'
			},
			boxShadow: {
				'electric': '0 10px 30px -10px hsl(var(--architech-electric) / 0.4)',
				'architech': '0 15px 35px -5px hsl(var(--architech-electric) / 0.3)',
				'elevated': '0 8px 24px -4px hsl(var(--foreground) / 0.1)',
				'professional': '0 8px 24px -8px hsl(var(--architech-primary) / 0.2)',
				'glass': '0 8px 32px hsl(var(--foreground) / 0.08), inset 0 1px 0 hsl(var(--background) / 0.5)',
				'glow': '0 0 20px hsl(var(--architech-electric) / 0.3), 0 0 40px hsl(var(--architech-electric) / 0.1)'
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite alternate',
				'float-gentle': 'float-gentle 4s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 3s ease-in-out infinite'
			},
			keyframes: {
				'fade-in-up': {
					'from': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'from': {
						'box-shadow': '0 0 5px hsl(var(--architech-electric) / 0.2)'
					},
					'to': {
						'box-shadow': '0 0 25px hsl(var(--architech-electric) / 0.6)'
					}
				},
				'float-gentle': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-12px)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'gradient-flow': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
