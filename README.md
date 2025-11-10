# 🎨 Falikh Rifqi Nail - Portfolio

A modern, responsive, and feature-rich portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- 🌟 **Modern Design** - Eye-catching hero section with gradient effects
- 📱 **Fully Responsive** - Mobile-first approach with adaptive layouts
- 🌓 **Dark Mode** - Seamless light/dark theme switching
- 🎯 **Interactive Testimonials** - Manual slider with arrow navigation
- 💼 **Projects Showcase** - Live demo and GitHub links
- 🎨 **Skills Display** - Categorized with progress bars and icons
- 🤝 **Partners Section** - Professional partner showcase
- 📧 **Working Contact Form** - Functional form with validation
- ⚡ **Performance Optimized** - Fast loading and smooth animations
- 🔧 **TypeScript** - Type-safe development
- 🎨 **shadcn/ui** - Modern component library

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Theme**: next-themes
- **Animations**: Framer Motion
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📁 Project Structure

```
src/
├── app/
│   ├── api/          # API routes (contact, projects, testimonials)
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout with theme provider
│   └── page.tsx     # Main portfolio page
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── db.ts        # Database connection (if needed)
```

## 🎨 Customization

### Personal Information
Edit `src/app/page.tsx` to update:
- Name and title
- Contact information
- Skills and experience
- Projects and testimonials
- Partners information

### Styling
- Colors: Modify Tailwind config or CSS variables
- Fonts: Update in `layout.tsx`
- Components: Customize shadcn/ui components

### Images
- Profile photo: `/public/profile.jpg`
- Project images: `/public/projects/`
- Partner logos: `/public/partners/`

## 📱 Deployment

This portfolio is **deployment-ready** for:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

📖 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide**

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run deploy:vercel # Deploy to Vercel
npm run deploy:netlify # Deploy to Netlify
```

## 📧 Contact Form Setup

The contact form is fully functional. To receive emails:

1. Update email in `src/app/api/contact/route.ts`:
   ```typescript
   console.log(`Email notification sent to your-email@example.com`)
   ```

2. For production, integrate with:
   - Nodemailer (SMTP)
   - SendGrid
   - Resend
   - AWS SES

## 🎯 Features Breakdown

### Hero Section
- Animated gradient background
- Professional profile photo
- Call-to-action buttons
- Statistics display

### Skills Section
- 6 categorized skills
- Progress bars with animations
- Icon-based visual representation
- Percentage proficiency display

### Testimonials
- Auto-slider (5 seconds interval)
- Manual navigation with arrow buttons
- Star ratings
- Client information display

### Projects
- Card-based layout
- Technology badges
- Live demo and GitHub links
- Hover effects

### Contact Form
- Real-time validation
- Loading states
- Success/error messages
- API integration

## 🌟 Highlights

- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Meta tags, structured data, sitemap ready
- **Responsive**: Mobile-first, touch-friendly, adaptive layouts
- **Modern**: ES6+, TypeScript, latest React features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Built with ❤️ by [Falikh Rifqi Nail](https://your-portfolio-url.vercel.app)**