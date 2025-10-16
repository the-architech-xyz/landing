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
				// ================================================================
				// THE ARCHITECH - "TECHNICAL ELEGANCE" COLOR SYSTEM
				// ================================================================
				'text': {
					'title': 'hsl(var(--text-title))',
					'body': 'hsl(var(--text-body))',
					'subtle': 'hsl(var(--text-subtle))',
					'muted': 'hsl(var(--text-muted))'
				},
				'cyan': {
					'electric': 'hsl(var(--cyan-electric))',
					'light': 'hsl(var(--cyan-light))',
					'dark': 'hsl(var(--cyan-dark))',
					'glow': 'hsl(var(--cyan-glow))'
				},
				'gold': {
					'accent': 'hsl(var(--gold-accent))',
					'light': 'hsl(var(--gold-light))',
					'dark': 'hsl(var(--gold-dark))'
				},
				'surface': {
					'base': 'hsl(var(--surface-base))',
					'elevated': 'hsl(var(--surface-elevated))',
					'higher': 'hsl(var(--surface-higher))',
					'highest': 'hsl(var(--surface-highest))'
				},
				'state': {
					'success': 'hsl(var(--state-success))',
					'warning': 'hsl(var(--state-warning))',
					'error': 'hsl(var(--state-error))',
					'info': 'hsl(var(--state-info))'
				}
			},
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
			fontFamily: {
				// Geist for headings - architectural boldness
				'geist': ['Geist', 'Inter', 'system-ui', 'sans-serif'],
				// Inter for body - professional clarity
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				// Geist Mono for code - technical precision
				'geist-mono': ['Geist Mono', 'Consolas', 'Monaco', 'monospace'],
				'mono': ['Geist Mono', 'Consolas', 'Monaco', 'monospace']
			},
			fontSize: {
				// Refined type scale for technical elegance
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }]
			},
			backgroundImage: {
				// Core brand gradients - refined and professional
				'gradient-cyan': 'linear-gradient(135deg, hsl(var(--cyan-electric)), hsl(var(--cyan-dark)))',
				'gradient-gold': 'linear-gradient(135deg, hsl(var(--gold-accent)), hsl(var(--gold-dark)))',
				'gradient-cyan-gold': 'linear-gradient(135deg, hsl(var(--cyan-electric)), hsl(var(--gold-accent)))',
				'gradient-surface': 'linear-gradient(135deg, hsl(var(--surface-elevated)), hsl(var(--surface-higher)))',
			},
			boxShadow: {
				// Refined shadow system
				'subtle': '0 1px 3px 0 hsl(0 0% 0% / 0.1)',
				'medium': '0 4px 6px -1px hsl(0 0% 0% / 0.2)',
				'large': '0 10px 15px -3px hsl(0 0% 0% / 0.3)',
				'cyan': '0 10px 30px -10px hsl(var(--cyan-electric) / 0.4)',
				'cyan-glow': '0 0 20px hsl(var(--cyan-electric) / 0.3), 0 0 40px hsl(var(--cyan-electric) / 0.1)',
				'gold': '0 10px 30px -10px hsl(var(--gold-accent) / 0.4)'
			},
			animation: {
				// Fast, subtle, purposeful animations
				'fade-in': 'fade-in 0.4s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
				'float-gentle': 'float-gentle 4s ease-in-out infinite'
			},
			keyframes: {
				'fade-in': {
					'from': {
						opacity: '0'
					},
					'to': {
						opacity: '1'
					}
				},
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
						'box-shadow': '0 0 5px hsl(var(--cyan-electric) / 0.2)'
					},
					'to': {
						'box-shadow': '0 0 20px hsl(var(--cyan-electric) / 0.5)'
					}
				},
				'float-gentle': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			spacing: {
				// Additional spacing utilities for precise layouts
				'18': '4.5rem',
				'88': '22rem',
				'100': '25rem',
				'112': '28rem',
				'128': '32rem'
			},
			transitionDuration: {
				// Standard 200ms for "Technical Elegance"
				'architech': '200ms'
			},
			transitionTimingFunction: {
				'architech': 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
} satisfies Config;
