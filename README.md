# Portfolio Website

A modern, responsive portfolio website showcasing my work, experience, and expertise as a Full-Stack Developer. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful UI with smooth animations.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth scroll animations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Sections**:
  - Hero section with animated background
  - About section with professional introduction
  - Expertise section showcasing technical skills
  - Experience timeline
  - Projects showcase with links
  - Testimonials section
  - FAQ section
  - Contact footer with social links
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Type-Safe**: Written in TypeScript for better code quality and maintainability
- **Accessible**: Built with accessibility in mind using Radix UI components

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Additional Libraries
- **React Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Framer Motion** (via scroll animations) - Animation library

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   ├── avatar.jpg         # Profile image
│   ├── *.png              # Project screenshots
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ExpertiseSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── StarryBackground.tsx
│   │   └── TestimonialsSection.tsx
│   ├── constants/         # Data constants
│   │   └── data.ts       # Portfolio data (projects, experience, etc.)
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-scroll-animation.tsx
│   │   └── use-theme.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v24.x or higher)
- **Yarn** (package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aamuizz/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

The site will be available at `http://localhost:8080`

## 📜 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn build:dev` - Build in development mode
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode

## 🎨 Customization

### Updating Portfolio Data

Edit `src/constants/data.ts` to update:
- Personal information (name, email, phone, etc.)
- Projects and their links
- Work experience
- Technical skills
- Social media links
- About section content

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles use Tailwind utility classes

### Theme Customization

The theme can be customized in `tailwind.config.ts`. The site supports both light and dark modes using `next-themes`.

## 🚢 Deployment

### Build for Production

```bash
yarn build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

The site can be deployed to any static hosting service:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- Any static hosting service

Simply point the hosting service to the `dist/` directory after running `yarn build`.

## 📱 Sections Overview

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Section**: Personal introduction and professional background
3. **Expertise Section**: Technical skills organized by category
4. **Experience Section**: Timeline of work experience and education
5. **Projects Section**: Showcase of featured projects with links
6. **Testimonials Section**: Client/colleague testimonials
7. **FAQ Section**: Frequently asked questions
8. **Footer**: Contact information and social media links

## 🔧 Development

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Keep components modular and reusable
- Follow the existing code structure and naming conventions

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update navigation if needed in `src/components/Navbar.tsx`

## 👤 Author

**Abdul Muizz**

- GitHub: [@aamuizz](https://github.com/aamuizz)
- LinkedIn: [abdulmuizz](https://www.linkedin.com/in/abdulmuizz)
- Twitter: [@mrabdulmuizz](https://twitter.com/mrabdulmuizz)
- Email: contact@abdulmuizz.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
