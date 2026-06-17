# LUXE Travel Agency - Premium Travel Website

An **award-level, luxury travel agency website** built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **pure CSS animations**. Zero animation libraries, no UI frameworks—just beautiful HTML, CSS, and TypeScript.

## ✨ Features

### Stunning Visual Design
- **Luxury Color Palette**: Deep navy (#0f172a), gold accents (#d4af37), and teal highlights (#14b8a6)
- **Smooth Animations**: 100% pure CSS animations with staggering effects
- **Responsive Design**: Mobile-first approach with fluid typography
- **Glassmorphism Effects**: Modern backdrop filters and transparency effects

### Pages & Sections
1. **Preloader** - 3-second animated loading screen with rotating circles and progress bar
2. **Navigation** - Fixed header with smooth transitions and hamburger menu
3. **Hero Section** - Eye-catching entry with animated title and CTA buttons
4. **Destinations** - Card-based grid with 6 featured travel destinations
5. **Why Choose Us** - 6 feature highlights with statistics
6. **Services** - Premium travel services with dynamic number display
7. **Footer** - Comprehensive footer with newsletter subscription

### Pure CSS Animations
- `fadeInUp`, `fadeInDown`, `fadeIn` - Entrance animations
- `slideInLeft`, `slideInRight` - Directional entrances
- `scaleIn` - Zoom effects
- `float` - Subtle floating animations
- `pulse-glow` - Glowing effects on gold accents
- `spin-slow` - Slow rotation for decorative elements
- `shimmer` - Shimmer transitions on hover

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (latest)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Pure CSS
- **Animations**: 100% CSS (no GSAP, Framer Motion, or libraries)
- **Font**: Geist font family (native Next.js)
- **Build Tool**: Turbopack (Next.js 16 default)

## 📦 Project Structure

```
luxe-travel-agency/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page combining all sections
│   ├── globals.css         # Global styles and keyframes
│   └── favicon.ico
├── components/
│   ├── preloader.tsx       # Loading animation (3s)
│   ├── navigation.tsx      # Fixed header with mobile menu
│   ├── hero.tsx            # Hero section with animated title
│   ├── destinations.tsx    # 6 destination cards
│   ├── why-choose-us.tsx   # 6 features + 3 statistics
│   ├── services.tsx        # 4 premium services + CTA
│   └── footer.tsx          # Newsletter + quick links
├── public/                 # Static assets
├── package.json            # Dependencies (minimal)
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
└── tailwind.config.ts      # Tailwind configuration
```

## 🚀 Quick Start

### Installation

#### Option 1: Using Git Clone
```bash
git clone <repository-url>
cd luxe-travel-agency
pnpm install
pnpm dev
```

#### Option 2: Using Extracted Archive
```bash
tar -xzf luxe-travel-agency.tar.gz
cd v0-project
pnpm install
pnpm dev
```

#### Option 3: Using shadcn CLI (Recommended)
```bash
npx shadcn-ui@latest init -d
# Select the project files
pnpm install
pnpm dev
```

### Running the Development Server
```bash
pnpm dev
# Open http://localhost:3000
```

The site includes a **3-second animated preloader** before showing the main page.

### Building for Production
```bash
pnpm build
pnpm start
```

## 📄 File Guide

### `app/layout.tsx`
- Root layout configuration
- Metadata for SEO
- Viewport settings for dark theme
- Analytics setup

### `app/globals.css`
- CSS custom properties (color palette)
- All keyframe animations defined here
- Staggering delay utilities (.stagger-1 through .stagger-5)
- Base styles and Tailwind imports

### `app/page.tsx`
- Orchestrates all components in correct order
- Simple, clean structure

### `components/preloader.tsx`
- 3-second loading animation
- Rotating circles with staggered delays
- Progress bar filling
- Smooth fade-out transition

### `components/navigation.tsx`
- Fixed header with backdrop blur
- Logo with gradient
- Navigation links with underline hover effect
- Mobile hamburger menu (state-managed)
- "Book Now" CTA button

### `components/hero.tsx`
- Full-screen hero with background shapes
- Animated gradient title
- Hero statistics (150+ destinations, 10k+ travelers, 25 years)
- Scroll indicator with bouncing arrow
- Dual CTA buttons

### `components/destinations.tsx`
- 6 destination cards in responsive grid
- Staggered entrance animations
- Hover effects with shimmer
- Pricing and "View" buttons

### `components/why-choose-us.tsx`
- 6 feature items with icons
- Each feature has hover scale effects
- 3 statistics at bottom
- All with staggered animations

### `components/services.tsx`
- 4 premium services
- CSS variables for dynamic accent colors
- "Ready to Plan?" CTA section
- Service links with arrow animation

### `components/footer.tsx`
- Multi-column layout
- Social icons
- Newsletter input (read-only, no validation)
- Quick links and services
- Copyright section

## 🎨 Color System

```css
--primary: #0f172a        /* Deep Navy */
--secondary: #1e293b      /* Darker Navy */
--accent: #d4af37         /* Gold */
--accent-light: #ffd700   /* Light Gold */
--teal: #14b8a6           /* Teal */
--text-primary: #0f172a
--text-secondary: #64748b /* Slate */
```

## 💻 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Preloader**: 3 seconds total
- **Hero animations**: Staggered 0.1s - 0.6s delays
- **Smooth scrolling**: Native browser scroll-behavior
- **CSS animations**: GPU-accelerated (transform, opacity)
- **No JavaScript bundles** for animations

## 📱 Responsive Breakpoints

- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✅ Best Practices Implemented

1. **Semantic HTML**: Proper use of `<section>`, `<nav>`, `<footer>`, `<main>`
2. **Accessibility**: ARIA labels, semantic landmarks
3. **Performance**: GPU-accelerated CSS animations only
4. **Mobile First**: Responsive design from smallest screens
5. **Type Safety**: 100% TypeScript coverage
6. **Code Organization**: Components split logically, no monolithic files
7. **CSS Architecture**: Minimal, organized, no naming conflicts

## 🎯 Customization

### Change Colors
Edit `app/globals.css` `:root` section:
```css
:root {
  --accent: #your-color;
  --primary: #your-color;
  /* etc */
}
```

### Adjust Animation Speeds
Modify keyframe durations:
```css
@keyframes fadeInUp {
  /* Change from 0.8s to your preferred duration */
}
```

### Update Content
Edit text in component files:
- Destination names and descriptions
- Feature titles and descriptions
- Service offerings
- Footer links

## 📋 Checklist Before Production

- [ ] Update metadata in `app/layout.tsx`
- [ ] Replace destination descriptions with real data
- [ ] Update favicon in `public/`
- [ ] Change social media links in footer
- [ ] Add real contact information
- [ ] Set up analytics (Google Analytics recommended)
- [ ] Test on mobile devices
- [ ] Verify all external links work
- [ ] Test preloader on slow networks

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
# Follow prompts, auto-detects Next.js
```

### Other Platforms
```bash
pnpm build      # Creates optimized build
pnpm start      # Runs production server
```

The app uses standard Next.js, so it deploys to any Node.js-compatible platform.

## 📝 License

This project is ready for commercial use. Built with modern web standards.

## 🎬 Animation Library

**100% Pure CSS** - No animation libraries used:
- ✅ No GSAP
- ✅ No Framer Motion
- ✅ No Animate.css
- ✅ No AOS (Animate on Scroll)

All animations are hand-crafted CSS keyframes with optimal performance.

---

**Built with ❤️ using Next.js 16, TypeScript, and CSS**

Questions or customizations needed? The codebase is fully documented and easy to extend.
# motion
