# Quick Start Guide

## 🚀 Setup (5 menit)

### 1. Install Dependencies
```bash
cd portfolio-nextjs
npm install
```

### 2. Add Your Files

**CV (Required):**
```
public/cv/Muhammad_Ikhwan_Fitoriqillah_CV.pdf
```

**Foto Profil (Required):**
```
public/images/profile-placeholder.png
```
Ukuran: 400x400px, format PNG/JPG

**Project Images (Optional):**
```
public/images/projects/credit-risk.png
public/images/projects/ds-career.png
```
Ukuran: 800x600px

### 3. Run Development Server
```bash
npm run dev
```

Buka: http://localhost:3000

## ✅ Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Add CV PDF ke `public/cv/`
- [ ] Add foto profil ke `public/images/`
- [ ] Update nama & info di `HeroSection.tsx`
- [ ] Update social media links di `Footer.tsx`
- [ ] Add project images (optional)
- [ ] Test di browser
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Deploy ke Vercel

## 🎨 Quick Customization

### Ganti Nama & Role
Edit `components/HeroSection.tsx` line 20-25

### Ganti Warna
Edit `tailwind.config.ts` line 9-13

### Tambah Project
Edit `data/projects.ts` - copy paste project object

### Update Social Media
Edit `components/Footer.tsx` line 7-40

## 🚀 Deploy

```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Deploy di Vercel
# - Buka vercel.com
# - Import GitHub repo
# - Click Deploy
```

## 📞 Need Help?

Baca `GUIDE.md` untuk dokumentasi lengkap.

---

**Selamat mencoba! 🎉**
