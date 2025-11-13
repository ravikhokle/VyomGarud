# 🚀 Quick Deployment Guide

## Running Locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel (Fastest)

### Method 1: Using Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site will be live in ~2 minutes

### Method 2: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd vyomgarud-landing
vercel

# Follow the prompts
# Your site will be deployed automatically
```

---

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

## Production Build

To test the production build locally:

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## Git Commands

### Initial Push to GitHub

```bash
# Create a new repository on GitHub first
# Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/vyomgarud-landing.git
git branch -M main
git push -u origin main
```

### Making Updates

```bash
# After making changes
git add .
git commit -m "Your commit message"
git push
```

---

## Environment Variables

No environment variables needed for this basic setup!

---

## Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- -p 3001
```

### Module not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## Performance Tips

1. **Optimize images**: Add images to `/public` folder
2. **Use Next.js Image component**: For automatic optimization
3. **Enable compression**: Vercel/Netlify handle this automatically
4. **Add analytics**: Google Analytics, Vercel Analytics, etc.

---

## Next Steps

1. ✅ Test locally
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel/Netlify
4. ✅ Share the live URL
5. ✅ Take screenshots for submission

---

## 📸 Taking Screenshots

### Full Page Screenshot (Chrome)
1. Open DevTools (F12)
2. Ctrl+Shift+P (Command Palette)
3. Type "Capture full size screenshot"
4. Press Enter

### Mobile Screenshot
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select device (iPhone 12 Pro)
4. Take screenshot

---

## Support

Need help? Contact: +91 8881444693

---

**Good luck! 🚀**
