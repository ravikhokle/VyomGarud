# VyomGarud - UAV Systems Landing Page

A modern, responsive landing page for VyomGarud - a military-grade UAV/drone systems company. Built with Next.js and Tailwind CSS.

![VyomGarud](https://img.shields.io/badge/VyomGarud-UAV%20Systems-orange)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)

## 🚀 Overview

VyomGarud's landing page showcases precision engineering and advanced autonomy in drone technology with a clean, military-grade professional identity. The design emphasizes reliability, confidence, and cutting-edge innovation.

## ✨ Features

### Design Elements
- **Dark, Military-Futuristic Aesthetic**: Charcoal, white, and orange (#ff7b00) color scheme
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Subtle Animations**: CSS-based fade-in and slide-up effects
- **Modern Typography**: Poppins font family for clean readability

### Sections Implemented

1. **Hero Section**
   - Company name with bold branding
   - Compelling tagline
   - Dual CTA buttons (Explore Solutions, Contact Us)
   - Animated gradient background with blur effects

2. **About Section**
   - Mission statement highlighting VyomGarud's vision
   - Clean layout with centered content
   - Orange accent divider

3. **Capabilities Section**
   - 4 product/service cards:
     - Autonomous Navigation
     - Surveillance & Reconnaissance
     - Long Endurance
     - Military-Grade Build
   - Hover effects with scale transformations
   - Icon-based visual representation

4. **Highlights Section**
   - 3 key statistics:
     - 99.9% Mission Success Rate
     - 24/7 Operational Support
     - 50+ Active Deployments
   - Bold orange numbers with descriptive text

5. **Contact Section**
   - Clean contact form with fields for:
     - Name and Email
     - Subject
     - Message textarea
   - Styled with consistent dark theme
   - Focus states with orange borders

6. **Footer**
   - Company branding
   - Social media links (LinkedIn, Twitter, GitHub)
   - Copyright information
   - Consistent color scheme

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Font**: Poppins (Google Fonts)
- **Animations**: CSS Keyframes

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vyomgarud-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Notes

### Color Palette
- **Background**: `#0a0a0a` (Rich Black)
- **Secondary Background**: `#18181b` (Zinc-900)
- **Accent**: `#ff7b00` (Orange)
- **Text Primary**: `#ededed` (Off-white)
- **Text Secondary**: `#a1a1aa` (Zinc-400)

### Typography
- **Primary Font**: Poppins
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extra Bold)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Animations
- **fade-in**: 1s ease-out
- **slide-up**: 0.8s ease-out with 30px transform
- **Staggered delays**: 0.2s and 0.4s for sequential elements

## 📁 Project Structure

```
vyomgarud-landing/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main landing page component
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🎯 Key Implementation Highlights

### Clean Code Practices
- Single-file component structure for simplicity
- Semantic HTML5 elements
- Consistent spacing and indentation
- TypeScript for type safety
- Tailwind utility classes for rapid styling

### Performance Optimizations
- Next.js App Router for server-side rendering
- Optimized Google Fonts loading
- CSS-only animations (no heavy JS libraries)
- Minimal dependencies

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Focus states on interactive elements
- Color contrast compliant with WCAG guidelines

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Next.js and deploy

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 🎓 Development Notes

### What I Focused On
1. **Clean Design**: Minimalistic approach with focus on content
2. **Brand Identity**: Military-grade professional aesthetic
3. **User Experience**: Clear CTAs and intuitive navigation
4. **Code Quality**: Simple, maintainable, well-structured code
5. **Responsiveness**: Mobile-first approach

### Challenges Overcome
- Balancing military aesthetic with modern web design
- Creating engaging animations without overwhelming the user
- Maintaining readability with dark color scheme

## 🤝 Contact

For questions or feedback about this project:
- **Phone**: +91 8881444693
- **Project**: VyomGarud Web Developer Intern Assessment

## 📝 License

This project is created as part of the VyomGarud Web Developer Internship Assessment.

---

**Built with ❤️ for VyomGarud**

