# 🚀 Deployment Guide

Portfolio ini bisa di-deploy secara **GRATIS** ke berbagai platform. Berikut adalah panduan lengkapnya:

## 🌟 Opsi 1: Vercel (Recommended)

### ✅ Keuntungan:
- 100% Gratis untuk personal projects
- Automatic HTTPS & CDN global
- Serverless Functions (API routes work out-of-the-box)
- Custom domain gratis
- Preview deployments untuk setiap PR
- Analytics gratis

### 📋 Cara Deploy:

#### **Cara 1: GitHub Integration (Easiest)**
1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Sign up dengan GitHub
4. Click "New Project"
5. Import repository GitHub Anda
6. Vercel akan auto-detect Next.js
7. Click "Deploy"

#### **Cara 2: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy dari project directory
vercel

# Deploy ke production
vercel --prod
```

### ⚙️ Environment Variables (Optional):
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

---

## 🌟 Opsi 2: Netlify

### ✅ Keuntungan:
- 100% Gratis untuk personal sites
- Form handling gratis
- Serverless Functions
- Custom domain gratis

### 📋 Cara Deploy:
1. Push code ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. Sign up dan connect GitHub
4. Pilih repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

---

## 🌟 Opsi 3: GitHub Pages

### ⚠️ Limitations:
- **TIDAK support API routes** (contact form tidak akan work)
- Hanya untuk static sites

### 📋 Cara Deploy (Jika mau tanpa API):
1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. Build dan deploy:
```bash
npm run build
npm run export
# Deploy folder /out ke GitHub Pages
```

---

## 🔧 Pre-Deployment Checklist

### ✅ Sebelum Deploy:

1. **Update Environment Variables:**
   ```bash
   # Di file .env.local
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

2. **Update Contact Email:**
   - Edit `src/app/api/contact/route.ts`
   - Ganti `falikh.rifqi@example.com` ke email Anda

3. **Test Build:**
   ```bash
   npm run build
   npm run start
   ```

4. **Optimize Images:**
   - Pastikan semua images di `/public` folder
   - Images sudah optimized untuk web

---

## 📱 Custom Domain Setup

### Vercel:
1. Buka project dashboard Vercel
2. Go ke "Settings" → "Domains"
3. Add custom domain
4. Update DNS records

### Netlify:
1. Go ke "Site settings" → "Domain management"
2. Add custom domain
3. Update DNS records

---

## 🔄 Auto-Deployment Setup

### GitHub Actions (Optional):
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📊 Performance Tips

### ⚡ Optimizations:
1. **Image Optimization:**
   - Gunakan Next.js Image component
   - Compress images sebelum upload

2. **Bundle Size:**
   - Dynamic imports untuk large components
   - Tree shaking otomatis

3. **CDN:**
   - Vercel/Netlify auto-provide CDN
   - Static files otomatis di-cache

---

## 🐛 Common Issues & Solutions

### ❌ **Build Errors:**
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### ❌ **API Routes Not Working:**
- Gunakan Vercel/Netlify (bukan GitHub Pages)
- Pastikan `vercel.json` atau `netlify.toml` ada

### ❌ **Images Not Loading:**
- Add domain ke `next.config.ts`:
```typescript
images: {
  domains: ['your-domain.com', 'images.unsplash.com']
}
```

---

## 🎉 Deployment Success!

Setelah deploy:
1. ✅ Test semua functionality
2. ✅ Check mobile responsiveness
3. ✅ Test contact form
4. ✅ Setup analytics (Vercel Analytics)
5. ✅ Submit ke Google Search Console

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [netlify.com/docs](https://netlify.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

**Happy Deploying! 🚀**