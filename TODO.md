# TODO List - Portfolio Next.js

## ✅ Completed

- [x] Setup Next.js project structure
- [x] Configure TypeScript & Tailwind CSS
- [x] Create all components (13 components)
- [x] Create all pages (5 pages)
- [x] Add project data (5 projects)
- [x] Implement animations with Framer Motion
- [x] Add responsive design
- [x] Create documentation (README, GUIDE, QUICKSTART)

## 📋 Your Tasks

### 1. Install Dependencies (5 menit)
```bash
cd portfolio-nextjs
npm install
```

### 2. Add Required Files (10 menit)

#### A. Foto Profil
- [ ] Siapkan foto kamu (400x400px, PNG/JPG)
- [ ] Rename jadi `profile-placeholder.png` atau `profile.png`
- [ ] Taruh di: `public/images/`
- [ ] Update path di `HeroSection.tsx` jika perlu

#### B. CV PDF
- [ ] Siapkan CV dalam format PDF
- [ ] Rename jadi: `Muhammad_Ikhwan_Fitoriqillah_CV.pdf`
- [ ] Taruh di: `public/cv/`

#### C. Project Images (Optional)
- [ ] Credit Risk Classifier: `public/images/projects/credit-risk.png`
- [ ] DS Career Analytics: `public/images/projects/ds-career.png`
- [ ] Marketing Dashboard: `public/images/projects/marketing-dashboard.png`
- [ ] FaultSense: `public/images/projects/faultsense.png`
- [ ] DIGI-SOV: `public/images/projects/digi-sov.png`

### 3. Customize Content (15 menit)

#### A. Personal Info
- [ ] Edit `components/HeroSection.tsx`:
  - [ ] Update nama (line 20)
  - [ ] Update role/title (line 23)
  - [ ] Update deskripsi (line 26-28)
  - [ ] Update stats jika perlu (line 32-44)

#### B. Social Media Links
- [ ] Edit `components/Footer.tsx` (line 7-40)
- [ ] Edit `components/HeroSection.tsx` (line 67-90)
- [ ] Update semua URL social media

#### C. Contact Info
- [ ] Edit `components/ContactSection.tsx` (line 15-35)
- [ ] Update email, LinkedIn, GitHub

#### D. Projects (Optional)
- [ ] Edit `data/projects.ts`
- [ ] Update project details
- [ ] Add new projects jika ada

### 4. Test Locally (10 menit)
```bash
npm run dev
```

- [ ] Buka http://localhost:3000
- [ ] Test semua halaman:
  - [ ] Homepage (/)
  - [ ] Projects (/projects)
  - [ ] Project Detail (/projects/credit-risk-classifier)
  - [ ] Certificates (/certificates)
  - [ ] Contact (/contact)
- [ ] Test Download CV button
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test animations

### 5. Deploy to Vercel (10 menit)

#### A. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Portfolio Next.js"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

#### B. Deploy
- [ ] Buka [vercel.com](https://vercel.com)
- [ ] Sign in dengan GitHub
- [ ] Click "New Project"
- [ ] Import repository kamu
- [ ] Click "Deploy"
- [ ] Wait 2-3 menit
- [ ] Done! 🎉

### 6. Optional Improvements

#### A. SEO
- [ ] Update metadata di `app/layout.tsx`
- [ ] Add Open Graph image
- [ ] Add sitemap.xml
- [ ] Add robots.txt

#### B. Analytics
- [ ] Add Google Analytics
- [ ] Add Vercel Analytics

#### C. Features
- [ ] Add blog section
- [ ] Add dark/light mode toggle
- [ ] Add language switcher (ID/EN)
- [ ] Add search functionality

#### D. Content
- [ ] Add more projects
- [ ] Add blog posts
- [ ] Add testimonials
- [ ] Add resume timeline

## 🎯 Priority Order

1. **High Priority** (Do First)
   - Install dependencies
   - Add foto profil
   - Add CV PDF
   - Update personal info
   - Test locally

2. **Medium Priority** (Do Next)
   - Add project images
   - Update project data
   - Deploy to Vercel
   - Test on real devices

3. **Low Priority** (Do Later)
   - Optional improvements
   - Add more content
   - SEO optimization

## ⏱️ Estimated Time

- Setup & Install: 5 menit
- Add Assets: 10 menit
- Customize: 15 menit
- Test: 10 menit
- Deploy: 10 menit

**Total: ~50 menit**

## 📞 Need Help?

### Documentation
- `README.md` - Overview
- `GUIDE.md` - Detailed guide
- `QUICKSTART.md` - Quick start
- `PROJECT_SUMMARY.md` - Complete summary

### Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Contact
- Email: ikhwankiki667@gmail.com
- LinkedIn: Muhammad Ikhwan Fitoriqillah

---

**Good luck! 🚀**

Last Updated: 2026-05-03
