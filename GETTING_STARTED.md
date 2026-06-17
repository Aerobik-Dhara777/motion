# Getting Started - LUXE Travel Agency Website

Welcome! This guide will walk you through downloading, setting up, and deploying your luxury travel website.

## 📥 Step 1: Download the Project

You have the file: **`luxe-travel-agency.tar.gz`** (67 KB)

### Extract the Archive
```bash
tar -xzf luxe-travel-agency.tar.gz
cd v0-project
```

You should now see:
```
v0-project/
├── app/
├── components/
├── public/
├── package.json
├── tsconfig.json
├── README.md
├── PROJECT_SUMMARY.md
├── ANIMATIONS.md
└── GETTING_STARTED.md
```

## 🔧 Step 2: Install Dependencies

You'll need **Node.js 18+** and **pnpm** (or npm/yarn).

### Install pnpm (if not already installed)
```bash
npm install -g pnpm
```

### Install Project Dependencies
```bash
pnpm install
```

This installs:
- next@16.2.6
- react@19
- tailwindcss@4.2.0
- typescript@5.7.3
- And their dependencies

**Total install time**: ~2-3 minutes
**Disk space**: ~400MB (node_modules)

## 🚀 Step 3: Run Locally

### Start Development Server
```bash
pnpm dev
```

Output should show:
```
> next dev
  ▲ Next.js 16.2.6
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1.2s
```

### Open in Browser
Visit: **http://localhost:3000**

You'll see:
1. 3-second animated preloader
2. Hero section with animated text
3. Full website with smooth scrolling

### Stop the Server
Press `Ctrl+C` in terminal

## 🎨 Step 4: Customize

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #0f172a;      /* Change these colors */
  --accent: #d4af37;
  --teal: #14b8a6;
  /* ... etc */
}
```

### Update Content

**Change destination**:
Edit `components/destinations.tsx`:
```javascript
const destinations = [
  {
    id: 1,
    name: 'Your Destination',  // Change this
    image: '🏖️',               // Change emoji
    description: 'Your description',
    price: 'From $X,XXX',
  },
  // ... more destinations
];
```

**Change feature titles**:
Edit `components/why-choose-us.tsx`:
```javascript
const features = [
  {
    title: 'Your Feature',        // Change this
    description: 'Your description',
    // ...
  },
];
```

**Change footer links**:
Edit `components/footer.tsx` - look for link sections

**Change metadata**:
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title Here',
  description: 'Your description',
  // ...
};
```

## 🏗️ Step 5: Build for Production

### Create Optimized Build
```bash
pnpm build
```

Output shows:
```
✓ Compiled successfully
✓ Linting and checking validity
✓ Collecting page data
✓ Generating static pages (5/5)
```

Creates a `.next` folder with optimized production code.

### Run Production Build Locally
```bash
pnpm start
```

Opens at `http://localhost:3000` with optimized code.

## 🌐 Step 6: Deploy

### Option A: Vercel (Recommended - 1 click)

1. **Create Vercel Account**
   - Go to https://vercel.com/signup
   - Sign up with GitHub/GitLab/Bitbucket

2. **Deploy Project**
   ```bash
   npm install -g vercel
   vercel
   ```
   
   Follow prompts:
   - Link to your Git repository
   - Select project folder
   - Click Deploy

3. **Get Live URL**
   - Your site is live! (vercel.app domain)
   - Custom domain available in settings

**Time to deploy**: < 2 minutes
**Cost**: Free tier available

### Option B: Other Platforms

**Netlify**:
```bash
# Install CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Railway** (Node.js):
```bash
# Connect GitHub repo in dashboard
# Auto-deploys on git push
```

**AWS Amplify**:
```bash
# Follow console for setup
amplify hosting add
amplify publish
```

**Your Own Server**:
```bash
pnpm build
pnpm start        # Runs on port 3000
```

## 📋 Project Structure

```
v0-project/
├── app/
│   ├── layout.tsx          ← Root layout (metadata, fonts)
│   ├── page.tsx            ← Home page (imports all components)
│   ├── globals.css         ← All animations + color variables
│   └── favicon.ico
│
├── components/
│   ├── preloader.tsx       ← 3s animated loader
│   ├── navigation.tsx      ← Header + mobile menu
│   ├── hero.tsx            ← Hero section
│   ├── destinations.tsx    ← 6 destination cards
│   ├── why-choose-us.tsx   ← 6 features + stats
│   ├── services.tsx        ← 4 services + CTA
│   └── footer.tsx          ← Complete footer
│
├── public/                 ← Static files (images, icons)
├── package.json            ← Dependencies
├── tsconfig.json           ← TypeScript config
├── next.config.mjs         ← Next.js config
├── tailwind.config.ts      ← Tailwind config
└── README.md               ← Full documentation
```

## 🎓 Key Files to Edit

| File | Purpose | Edit For |
|------|---------|----------|
| `app/globals.css` | Colors & animations | Change theme, animation speeds |
| `app/layout.tsx` | Metadata | SEO, title, description |
| `components/destinations.tsx` | Destinations | Add/edit destinations |
| `components/why-choose-us.tsx` | Features | Edit feature list |
| `components/services.tsx` | Services | Edit service offerings |
| `components/footer.tsx` | Footer | Update links, contact |

## 🧪 Testing Locally

### Check Mobile View
```bash
# In DevTools: Ctrl+Shift+M (Chrome/Firefox)
# Or Device Toolbar
```

Responsive breakpoints:
- **Mobile**: 375px (iPhone)
- **Tablet**: 768px (iPad)
- **Desktop**: 1440px (full screen)

### Test Animations
1. Open DevTools (F12)
2. Go to Console
3. Animations should run smoothly
4. No lag on scroll or interactions

### Check Performance
```bash
# In DevTools → Lighthouse
1. Click "Analyze page load"
2. Aim for 90+ score
```

## ⚡ Performance Tips

**Optimize images** (if adding):
```bash
# Install Sharp
pnpm add sharp

# Next.js handles image optimization automatically
```

**Check bundle size**:
```bash
pnpm add -D @next/bundle-analyzer

# Add to next.config.mjs
# Run: ANALYZE=true pnpm build
```

**Monitor Core Web Vitals**:
- LCP (Largest Contentful Paint): < 2.5s ✅
- INP (Interaction to Next Paint): < 200ms ✅
- CLS (Cumulative Layout Shift): < 0.1 ✅

## 🐛 Troubleshooting

### "pnpm: command not found"
```bash
npm install -g pnpm
```

### Port 3000 already in use
```bash
pnpm dev -p 3001    # Use different port
```

### Build fails
```bash
# Clear cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### Animations not smooth
- Check DevTools for JavaScript errors
- Ensure CSS is loading (Network tab)
- Browser supports CSS animations (all modern browsers)

### Responsive layout broken
- Clear browser cache (Ctrl+Shift+Delete)
- Check viewport meta tag in `layout.tsx`
- Verify Tailwind CSS loaded

## 📚 Learning Resources

**Next.js**: https://nextjs.org/docs
**React 19**: https://react.dev
**TypeScript**: https://www.typescriptlang.org/docs
**Tailwind CSS**: https://tailwindcss.com
**CSS Animations**: https://developer.mozilla.org/docs/Web/CSS/CSS_Animations

## 📖 Documentation Files

- **README.md** - Complete feature guide
- **PROJECT_SUMMARY.md** - Project overview
- **ANIMATIONS.md** - All 12 animations detailed
- **GETTING_STARTED.md** - This file

## ✅ Deployment Checklist

Before going live, ensure:

- [ ] Updated metadata in `layout.tsx`
- [ ] Changed destination information
- [ ] Updated feature titles and descriptions
- [ ] Changed footer links and contact info
- [ ] Tested responsive design on mobile
- [ ] Checked all links work
- [ ] Tested animations are smooth
- [ ] Ran Lighthouse (aim for 90+)
- [ ] Set up custom domain (if desired)
- [ ] Added Google Analytics (optional)

## 🎯 Next Steps

1. ✅ Extract & install
2. ✅ Run locally (`pnpm dev`)
3. ✅ Customize content
4. ✅ Test thoroughly
5. ✅ Deploy to Vercel/Netlify
6. ✅ Setup custom domain
7. ✅ Monitor performance

## 💬 Getting Help

**Common Issues**:
- Check the troubleshooting section above
- Review component comments in files
- Check GitHub discussions for Next.js/React issues

**Want to extend?**
- Add new sections: Copy a component structure
- Change animations: Edit `app/globals.css`
- Add pages: Create `app/[page]/page.tsx`

## 🎊 You're All Set!

Your luxury travel agency website is ready to impress. The codebase is clean, well-documented, and production-ready.

**Quick Summary**:
```bash
# 1. Extract
tar -xzf luxe-travel-agency.tar.gz
cd v0-project

# 2. Install
pnpm install

# 3. Run
pnpm dev

# 4. Deploy
vercel
```

That's it! Your site goes live in minutes. 🚀

---

**Questions?** Check README.md for more details.
**Want to customize?** Every file has clear sections for editing.
**Ready to deploy?** Vercel makes it one command!

Enjoy your stunning travel agency website! ✨
