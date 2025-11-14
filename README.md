# VyomGarud Landing Page

A modern, responsive landing page for VyomGarud - Next-Generation UAV Systems powered by hybrid communication technology.


## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Notes](#design-notes)
- [Technologies Used](#technologies-used)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravikhokle/VyomGarud.git
   cd vyomgarud-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
vyomgarud-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── public/
│   ├── images/              # Static images
│   │   ├── contact.webp
│   │   ├── Long Endurance.png
│   │   ├── Military-Grade Build.jpg
│   │   ├── sitelite.jpeg
│   │   └── Surveillance & Recon.jpg
│   └── video/               # Video assets
│       ├── drone.mp4        # Hero section video
│       └── road.mp4         # Capabilities section video
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🎨 Design Notes

### Color Scheme

- **Primary**: Orange (#f97316) - Brand color for CTAs and highlights
- **Background**: Zinc-950/900 - Dark, professional background
- **Text**: White/Zinc-300/400 - High contrast for readability
- **Accents**: Orange-500/600 - Interactive elements and hover states

### Typography

- **Headings**: Bold, large-scale typography (4xl to 8xl)
- **Body**: Zinc-300/400 for optimal readability on dark backgrounds
- **Font Stack**: System fonts for optimal performance

### Layout Sections

#### 1. **Navigation Bar**
- Fixed position with backdrop blur
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- "Get Started" CTA button

#### 2. **Hero Section**
- Full-screen video background (drone.mp4)
- Centered content with gradient effects
- Two prominent CTAs: "Explore Solutions" and "Contact Us"
- Animated entrance effects

#### 3. **About Section**
- Two-column layout (text + stats)
- Gradient text effects on heading
- Four stat cards with hover effects
- Badge label design
- Key stats: 500+ Flight Hours, 15+ Research Projects, 98% Success Rate, 24/7 Support

#### 4. **Capabilities Section**
- Video background (road.mp4) with overlay
- Four capability cards with images and icons
- Features:
  - **Hybrid Communication** - Cellular & LoRa-based systems
  - **Multi-Drone Coordination** - Swarm operations
  - **AI-Driven Telemetry** - Cutting-edge avionics
  - **Cloud Infrastructure** - Real-time situational awareness
- Gradient card backgrounds with backdrop blur
- Image zoom effects on hover

#### 5. **Highlights Section**
- Three-column statistics grid
- Large numbers with descriptive text
- 99.9% Mission Success Rate
- 24/7 Operational Support
- 50+ Active Deployments

#### 6. **Contact Section**
- Two-column layout (image + form)
- Contact image with gradient overlay
- Web3Forms integration
- Form fields: Name, Email, Subject, Message
- Success/Error state handling
- Loading indicators

#### 7. **Footer**
- Brand information
- Social media links (LinkedIn, Twitter, GitHub)
- Copyright information

### Responsive Design

- **Mobile First**: Base styles optimized for mobile
- **Breakpoints**:
  - `md`: 768px (tablets)
  - `lg`: 1024px (desktops)
- **Mobile Menu**: Slide-down navigation with smooth transitions
- **Flexible Grid**: Adapts from 1 to 4 columns based on screen size
- **Touch-Friendly**: Large tap targets for mobile users

### Animation & Interactions

- **Smooth Transitions**: 300-500ms duration for all interactions
- **Hover Effects**:
  - Image zoom (scale-110)
  - Text color changes to orange
  - Border highlights
  - Button scale effects
- **Page Load**: Fade-in and slide-up animations
- **Video Autoplay**: Muted, looping background videos

### Performance Optimizations

- **Video Optimization**: Compressed MP4 files with appropriate codecs
- **Image Formats**: WebP for modern browsers, JPEG/PNG fallbacks
- **Lazy Loading**: Images and videos load on demand
- **CSS Optimization**: Tailwind CSS for minimal bundle size
- **Code Splitting**: Next.js automatic code splitting

## 🔧 Technologies Used

### Core Framework
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.x** - Type safety

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Form Handling
- **Web3Forms** - Contact form submission service
- API Key: Configured in environment variables

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
