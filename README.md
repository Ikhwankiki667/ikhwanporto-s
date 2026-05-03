# Portfolio Next.js

Website portofolio profesional untuk Muhammad Ikhwan Fitoriqillah - Data Science Student.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Struktur Folder

```
portfolio-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout dengan Navbar & Footer
│   ├── page.tsx             # Homepage (Hero + About)
│   ├── globals.css          # Global styles
│   ├── projects/
│   │   ├── page.tsx         # Projects list page
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic project detail page
│   ├── certificates/
│   │   └── page.tsx         # Certificates page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/              # Reusable components
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── SkillsSection.tsx
│   ├── TechStackSection.tsx
│   ├── JourneySection.tsx
│   ├── LearningSection.tsx
│   ├── FunFactsSection.tsx
│   ├── ProjectsGrid.tsx
│   ├── ProjectDetail.tsx
│   ├── CertificatesSection.tsx
│   └── ContactSection.tsx
├── data/
│   └── projects.ts          # Project data
├── public/
│   ├── images/              # Images & assets
│   └── cv/                  # CV PDF file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🎨 Fitur Utama

### 1. **Homepage dengan Hero Section**
- About me sebagai hero section
- Stats (15+ Projects, 10+ ML Models, Semester 4)
- CTA buttons: Download CV & View Projects
- Social media links
- Foto profil dengan efek glow

### 2. **Smooth Navigation (SPA)**
- No page reload saat navigasi
- Smooth transitions dengan Framer Motion
- Mobile-responsive navbar dengan hamburger menu

### 3. **Download CV**
- Tombol download di navbar
- Tombol download di hero section
- File: `/public/cv/Muhammad_Ikhwan_Fitoriqillah_CV.pdf`

### 4. **Projects Page**
- Card layout modern dengan hover effects
- Tech stack badges
- Status badge (Completed / Coming Soon)
- Filter by category
- Click untuk detail

### 5. **Project Detail Page**
- Dynamic routing: `/projects/[slug]`
- Full project information:
  - Tujuan
  - Dataset
  - Tech stack
  - Key insights & results
- GitHub & Demo links
- Back to projects button

### 6. **Sections**
- Skills dengan progress bars
- Tech stack dengan icons
- Journey timeline (pendidikan)
- Currently learning
- Fun facts dengan interactive elements

### 7. **Animations**
- Framer Motion untuk smooth animations
- Scroll-triggered animations
- Hover effects
- Page transitions

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
cd portfolio-nextjs
npm install
```

### 2. Add Your CV

Letakkan file CV kamu di:
```
public/cv/Muhammad_Ikhwan_Fitoriqillah_CV.pdf
```

### 3. Add Images

Letakkan gambar di folder `public/images/`:
- `profile-placeholder.png` - Foto profil (400x400px recommended)
- `projects/credit-risk.png` - Project images
- `projects/ds-career.png`
- dll.

### 4. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Project Data

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    slug: "your-project-slug",
    title: "Your Project Title",
    description: "Short description",
    image: "/images/projects/your-image.png",
    category: "Machine Learning",
    status: "completed",
    techStack: ["Python", "TensorFlow"],
    objective: "Project objective...",
    dataset: "Dataset description...",
    insights: ["Insight 1", "Insight 2"],
    githubUrl: "https://github.com/...",
  },
];
```

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#0B0F19",  // Dark background
  secondary: "#111827",   // Secondary background
  accent: "#3B82F6",      // Blue accent
}
```

### Update Personal Info

Edit komponen:
- `HeroSection.tsx` - Nama, deskripsi, stats
- `Footer.tsx` - Social media links
- `ContactSection.tsx` - Contact info

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Deploy ke Netlify

```bash
npm run build
```

Upload folder `.next` ke Netlify

## 📱 Responsive Design

Website fully responsive untuk:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎯 Best Practices

1. **Images**: Gunakan Next.js Image component untuk optimasi
2. **SEO**: Metadata sudah diatur di setiap page
3. **Performance**: Lazy loading & code splitting otomatis
4. **Accessibility**: Semantic HTML & ARIA labels

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Support

Jika ada pertanyaan atau butuh bantuan, hubungi:
- Email: ikhwankiki667@gmail.com
- LinkedIn: [Muhammad Ikhwan Fitoriqillah](https://www.linkedin.com/in/muhammad-ikhwan-fitoriqillah/)

---

Made with ❤️ by Muhammad Ikhwan Fitoriqillah
