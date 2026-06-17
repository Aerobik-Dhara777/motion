# CSS Animations Guide - LUXE Travel Agency

This document details all 12 pure CSS animations used throughout the website. **No animation libraries—pure CSS keyframes only.**

## 🎬 Animation Library Reference

### 1. **fadeInUp** ⬆️
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Duration**: 0.8s | **Used in**: Hero, Destinations, Services, Footer
**Effect**: Slides element up while fading in

### 2. **fadeInDown** ⬇️
```css
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Duration**: 0.8s | **Used in**: Hero subtitle
**Effect**: Slides element down while fading in

### 3. **fadeIn** 🔆
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
**Duration**: 1s | **Used in**: General fade effects
**Effect**: Pure opacity transition

### 4. **slideInLeft** ➡️
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
**Duration**: 0.8s | **Used in**: Content sections
**Effect**: Slides from left while fading in

### 5. **slideInRight** ⬅️
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
**Duration**: 0.8s | **Used in**: Content sections
**Effect**: Slides from right while fading in

### 6. **scaleIn** 📈
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```
**Duration**: 0.6s | **Used in**: Statistics, CTA sections
**Effect**: Zooms in element from 95% to 100%

### 7. **pulseGlow** ✨
```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(212, 175, 55, 0.6);
  }
}
```
**Duration**: 3s (infinite) | **Used in**: Gold accent elements
**Effect**: Pulsing glow on gold color

### 8. **float** 🎈
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```
**Duration**: 4s (infinite) | **Used in**: Destination icons, Feature icons
**Effect**: Subtle up-and-down floating motion

### 9. **spinSlow** 🔄
```css
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
**Duration**: 20s (infinite) | **Used in**: Background decorative shapes
**Effect**: Slow continuous rotation

### 10. **shimmer** ⚡
```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```
**Duration**: 3s (infinite) | **Used in**: Card hover effects
**Effect**: Light shimmer sweep across element

### 11. **glowPulse** 💫
```css
@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
  }
  50% {
    text-shadow: 0 0 25px rgba(20, 184, 166, 0.8);
  }
}
```
**Duration**: 2s (infinite) | **Used in**: Text highlights
**Effect**: Pulsing glow on text

### 12. **rotate360** 🌀
```css
@keyframes rotate-360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```
**Duration**: 1.5s (infinite) | **Used in**: Preloader circles
**Effect**: Full rotation

## 🎯 Staggering System

Elements appear in sequence using CSS `animation-delay`:

```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
```

Example: 6 destination cards animate in sequence:
- Card 1: 0.1s
- Card 2: 0.2s
- Card 3: 0.3s
- Card 4: 0.4s
- Card 5: 0.5s
- Card 6: 0.6s

## 🔍 Where Each Animation Is Used

### Preloader Section
- **fadeOut** (custom) - 3s → 2.7s
- **rotate-360** - 1.5s infinite (circles)
- **pulse** - 1.2s infinite (center dot)
- **fillProgress** (custom) - 2.5s

### Navigation
- **slideDown** (custom) - 0.6s

### Hero Section
- **fadeInDown** - 0.8s (subtitle)
- **slideInUp** (custom) - 0.9s (title, staggered)
- **shimmerText** (custom) - 3s (gradient title)
- **fadeInUp** - 0.9s (description, buttons, stats)
- **scaleIn** - 0.6s (statistics)
- **scrollBounce** (custom) - 2s infinite (arrow)

### Destinations Section
- **fadeInUp** - 0.8s (cards, staggered 0.1s-0.6s)
- **float** - 3s infinite (icons)
- **shimmer** - 3s infinite (hover effect)

### Why Choose Us Section
- **fadeInUp** - 0.8s (header, staggered)
- **scaleIn** - 0.6s (features, staggered)
- **float** - 3s infinite (feature icons)
- **scaleIn** - 0.6s (statistics)

### Services Section
- **fadeInUp** - 0.8s (service cards, staggered)
- **scaleIn** - 0.8s (CTA section)

### Footer Section
- **fadeInUp** - 0.8s (footer sections, staggered)
- **slideInRight** - 0.8s (divider)
- **fadeIn** - 1s (copyright)

## ⚡ Performance Tips

### GPU Acceleration
Only these properties are GPU-accelerated:
- `transform` (translate, scale, rotate)
- `opacity`
- `box-shadow`
- `text-shadow`

**Never animate**:
- ❌ width/height
- ❌ margin/padding
- ❌ background-color
- ❌ border

### Timing
- **Short animations**: 0.3s - 0.6s (interactive, hover)
- **Medium animations**: 0.8s - 1s (entrance)
- **Long animations**: 2s - 4s (continuous, floating)
- **Infinite**: Looping effects (float, spin, pulse)

### Smoothing
Use `ease-out` for entrances (elements settle smoothly)
Use `ease-in-out` for continuous motion (smooth loops)
Use `linear` for rotations (consistent speed)

## 🎨 Animation Combinations

### Hero Title (Complex)
1. **fadeInDown** (0.8s) - Subtitle slides in
2. **slideInUp** (0.9s) - Title slides up with 0.2s delay
3. **shimmerText** (3s) - Title gradient shimmers
4. **fadeInUp** (0.9s) - Description fades in with 0.4s delay

### Destination Card (Hover)
1. **fadeInUp** (0.8s) - Initial entrance
2. **shimmer** (3s infinite) - Hover effect starts
3. **transform** (0.4s) - Card lifts on hover
4. **float** (1.5s) - Icon speeds up on hover

### Feature Item (Interactive)
1. **fadeInUp** (0.8s) - Entrance from bottom
2. **scale** (0.02) - Subtle grow on hover
3. **float** (1.5s) - Icon floats faster on hover
4. **border-color** (0.3s) - Border animates to gold

## 🔧 Customization

### Speed Up All Animations
Edit `app/globals.css`:
```css
/* Replace all 0.8s with 0.5s */
@keyframes fadeInUp {
  /* animation: fadeInUp 0.5s ease-out; */
}
```

### Change Animation Color
```css
@keyframes pulse-glow {
  box-shadow: 0 0 20px rgba(YOUR_COLOR, 0.3);
}
```

### Add New Animation
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}
```

## 📊 Animation Statistics

| Metric | Value |
|--------|-------|
| Total Unique Animations | 12 |
| Total Animation Variations | 20+ |
| Shortest Duration | 0.3s (transitions) |
| Longest Duration | 20s (spin-slow) |
| Infinite Loops | 5 (float, spin, shimmer, glow, pulse) |
| Stagger Levels | 5 (0.1s - 0.5s) |
| GPU-Accelerated Properties | 4 (transform, opacity, shadows) |
| Total CSS Size | ~8KB (uncompressed) |

## ✅ Best Practices Used

✅ **GPU Acceleration** - Only animate transform/opacity
✅ **Staggering** - Wave effect on multiple elements
✅ **Smooth Easing** - ease-out for entrances
✅ **Meaningful Timing** - Not too fast, not too slow
✅ **Performance** - No layout thrashing
✅ **Accessibility** - Respects prefers-reduced-motion (can add)
✅ **Consistency** - Unified animation language

## 🚀 Advanced Usage

### Conditional Animations
You can add media queries:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
```

### Animation Events with JavaScript
```javascript
element.addEventListener('animationend', () => {
  console.log('Animation completed');
});
```

### CSS Variables in Animations
```css
:root {
  --duration: 0.8s;
}

@keyframes fadeInUp {
  animation: fadeInUp var(--duration) ease-out;
}
```

---

**All animations are production-ready, performant, and beautiful.**

No animation libraries. Just pure CSS magic. ✨
