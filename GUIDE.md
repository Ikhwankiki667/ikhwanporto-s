# Panduan Lengkap - Portfolio Next.js

## 📖 Penjelasan Struktur Project

### 1. **App Router (app/)**

Next.js 14 menggunakan App Router yang lebih modern. Setiap folder di `app/` menjadi route otomatis.

#### `app/layout.tsx`
- Root layout yang wrap semua halaman
- Berisi Navbar, Footer, dan AnimatedBackground
- Font Poppins diload di sini
- Metadata SEO global

#### `app/page.tsx` (Homepage)
- Import semua section components
- Urutan: Hero → Skills → TechStack → Journey → Learning → FunFacts
- Smooth scroll antar section

#### `app/projects/page.tsx`
- Halaman list semua projects
- Menggunakan ProjectsGrid component

#### `app/projects/[slug]/page.tsx`
- Dynamic route untuk detail project
- `[slug]` = parameter dinamis (contoh: `/projects/credit-risk-classifier`)
- `generateStaticParams()` = pre-render semua project pages saat build
- `generateMetadata()` = SEO per project

### 2. **Components (components/)**

Semua komponen reusable ada di sini.

#### **Navbar.tsx**
```typescript
- Fixed position di top
- Mobile responsive dengan hamburger menu
- Download CV button
- Smooth navigation tanpa reload
```

**Fitur:**
- Desktop: Horizontal menu
- Mobile: Hamburger menu dengan slide animation
- Active state untuk current page

#### **HeroSection.tsx**
```typescript
- About me sebagai hero
- Stats (15+ Projects, 10+ ML Models, 4 Semester)
- 2 CTA buttons: Download CV & View Projects
- Social media icons
- Profile image dengan glow effect
```

**Animasi:**
- Fade in dari kiri (text)
- Fade in dari kanan (image)
- Hover effects pada buttons

#### **SkillsSection.tsx**
```typescript
- Bento grid layout (responsive)
- Progress bars dengan animasi
- 6 skills utama
```

**Layout:**
- Large card (2x2): Data Analysis & Visualization
- Regular cards: ML, Digital Marketing, dll
- Wide card (2x1): UI/UX Design

#### **ProjectsGrid.tsx**
```typescript
- Card layout untuk projects
- Tech stack badges
- Status badge (Completed/Coming Soon)
- Hover effects
```

**Fitur:**
- Image dengan fallback icon
- Tech stack (max 3 visible, +N untuk sisanya)
- Link ke detail page (jika completed)

#### **ProjectDetail.tsx**
```typescript
- Full project information
- Back button
- Tech stack badges
- Objective, Dataset, Insights
- GitHub & Demo links
```

### 3. **Data (data/)**

#### **projects.ts**
```typescript
export interface Project {
  id: number;
  slug: string;              // URL-friendly (kebab-case)
  title: string;
  description: string;
  image: string;             // Path ke image
  category: string;          // Machine Learning, Data Analysis, dll
  status: "completed" | "coming-soon";
  techStack: string[];       // Array tech stack
  objective?: string;        // Tujuan project
  dataset?: string;          // Dataset yang dipakai
  insights?: string[];       // Key findings
  githubUrl?: string;        // Link GitHub
  demoUrl?: string;          // Link demo
}
```

**Cara menambah project baru:**
```typescript
{
  id: 6,
  slug: "new-project-slug",
  title: "New Project Title",
  description: "Short description for card",
  image: "/images/projects/new-project.png",
  category: "Machine Learning",
  status: "completed",
  techStack: ["Python", "TensorFlow", "Pandas"],
  objective: "Detailed objective...",
  dataset: "Dataset description...",
  insights: [
    "Insight 1",
    "Insight 2",
  ],
  githubUrl: "https://github.com/username/repo",
}
```

### 4. **Styling (Tailwind CSS)**

#### **globals.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom utilities */
.gradient-text - Gradient text effect
.animated-bg - Background animations
.grid-pattern - Grid pattern overlay
```

#### **tailwind.config.ts**
```typescript
colors: {
  background: "#0B0F19",  // Main dark bg
  secondary: "#111827",   // Card bg
  accent: "#3B82F6",      // Blue accent
}
```

**Cara ganti warna:**
1. Edit `tailwind.config.ts`
2. Ganti hex color
3. Restart dev server

### 5. **Animations (Framer Motion)**

#### **Scroll Animations**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Penjelasan:**
- `initial`: State awal (invisible, 20px ke bawah)
- `whileInView`: State saat terlihat (visible, posisi normal)
- `viewport={{ once: true }}`: Animasi cuma sekali
- `transition`: Durasi animasi

#### **Hover Animations**
```typescript
whileHover={{ scale: 1.05, y: -5 }}
```

**Penjelasan:**
- Scale 1.05 = zoom 5%
- y: -5 = naik 5px

#### **Progress Bar Animation**
```typescript
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${percentage}%` }}
  transition={{ duration: 1, delay: 0.5 }}
/>
```

## 🎨 Customization Guide

### Ganti Foto Profil

1. Siapkan foto (400x400px, format PNG/JPG)
2. Rename jadi `profile.png`
3. Taruh di `public/images/profile.png`
4. Edit `HeroSection.tsx`:
```typescript
<Image
  src="/images/profile.png"  // Ganti path
  alt="Muhammad Ikhwan Fitoriqillah"
  width={400}
  height={400}
/>
```

### Tambah Project Baru

1. Siapkan gambar project (800x600px)
2. Taruh di `public/images/projects/nama-project.png`
3. Edit `data/projects.ts`:
```typescript
{
  id: 6,
  slug: "nama-project",
  title: "Nama Project",
  // ... isi data lengkap
}
```

### Ganti Warna Theme

Edit `tailwind.config.ts`:
```typescript
colors: {
  background: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
}
```

**Rekomendasi kombinasi:**
- Dark Blue: `#0B0F19` + `#3B82F6`
- Dark Purple: `#0F0B19` + `#8B5CF6`
- Dark Green: `#0B190F` + `#10B981`

### Update Personal Info

#### Nama & Deskripsi
Edit `HeroSection.tsx`:
```typescript
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Your Role | Your Title</p>
<p>Your description...</p>
```

#### Social Media
Edit `Footer.tsx` dan `HeroSection.tsx`:
```typescript
const socialLinks = [
  { name: "Instagram", url: "YOUR_URL" },
  // ...
];
```

#### Contact Info
Edit `ContactSection.tsx`:
```typescript
const contactInfo = [
  { title: "Email", value: "your@email.com" },
  // ...
];
```

## 🚀 Deployment Guide

### Deploy ke Vercel (Recommended)

1. **Push ke GitHub:**
```bash
cd portfolio-nextjs
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. **Deploy di Vercel:**
- Buka [vercel.com](https://vercel.com)
- Sign in dengan GitHub
- Click "New Project"
- Import repository kamu
- Click "Deploy"
- Done! 🎉

**Custom Domain:**
- Settings → Domains
- Add domain kamu
- Update DNS records

### Deploy ke Netlify

1. **Build project:**
```bash
npm run build
```

2. **Deploy:**
- Buka [netlify.com](https://netlify.com)
- Drag & drop folder `.next`
- Done!

## 📱 Testing

### Test Responsive

1. **Chrome DevTools:**
- F12 → Toggle device toolbar
- Test di berbagai ukuran:
  - Mobile: 375px
  - Tablet: 768px
  - Desktop: 1440px

2. **Real Device:**
- Jalankan `npm run dev`
- Buka di HP: `http://YOUR_IP:3000`

### Test Performance

1. **Lighthouse:**
- F12 → Lighthouse tab
- Generate report
- Target: 90+ score

2. **Check:**
- ✅ Images optimized
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Fast page load

## 🐛 Troubleshooting

### Error: Module not found

```bash
npm install
```

### Error: Port 3000 already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Images tidak muncul

1. Check path: `/images/nama-file.png`
2. Check file exists di `public/images/`
3. Restart dev server

### Animations tidak smooth

1. Check Framer Motion installed:
```bash
npm install framer-motion
```

2. Restart dev server

## 📚 Next Steps

1. **Add CV:**
   - Taruh CV PDF di `public/cv/`
   - Rename: `Muhammad_Ikhwan_Fitoriqillah_CV.pdf`

2. **Add Images:**
   - Foto profil: `public/images/profile.png`
   - Project images: `public/images/projects/`

3. **Update Content:**
   - Edit `data/projects.ts`
   - Update personal info di components

4. **Test:**
   - Run `npm run dev`
   - Test semua halaman
   - Test responsive

5. **Deploy:**
   - Push ke GitHub
   - Deploy ke Vercel

## 🎓 Learning Resources

- **Next.js:** [nextjs.org/learn](https://nextjs.org/learn)
- **Tailwind:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)
- **TypeScript:** [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)

---

**Good luck dengan portfolio kamu! 🚀**
