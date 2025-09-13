# The Architech

The first no-code (dev) tool built for developers. Stop writing boilerplate, start architecting. Assemble battle-tested modules and go from idea to scalable app in minutes—with full control over your code.

## 🚀 Features

- **AI-Powered Development Platform** - Eliminates setup hell and automates infrastructure configuration
- **No-Code for Developers** - Visual interface designed specifically for developers who want control
- **Battle-Tested Modules** - Pre-built, tested components ready for production
- **Full Code Control** - Access and modify generated code as needed
- **Rapid Prototyping** - Go from idea to scalable app in minutes

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion + GSAP
- **Internationalization**: React i18next
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Email**: Nodemailer
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- PostgreSQL database (for API)

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd architech-code-forge
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install
   
   # API dependencies
   cd api
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp .env.example .env
   cp api/.env.example api/.env
   ```

4. **Start development servers**
   ```bash
   # Frontend (from root directory)
   npm run dev
   
   # API (from api directory)
   cd api
   npm run dev
   ```

## 📁 Project Structure

```
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # Internationalization
│   └── lib/               # Utility functions
├── api/                   # Backend API server
│   ├── routes/            # API route handlers
│   ├── lib/               # Database and email utilities
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── dist/                  # Built application
```

## 🌐 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

- **Frontend**: Automatically deployed from main branch
- **API**: Deployed as Vercel serverless functions
- **Database**: PostgreSQL hosted on Vercel Postgres

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

- **Website**: [thearchitech.dev](https://thearchitech.dev)
- **Twitter**: [@thearchitech](https://twitter.com/thearchitech)
- **Email**: Contact through the website

---

Built with ❤️ for developers who want to focus on what matters most.