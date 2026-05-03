# Setup EmailJS untuk Contact Form

## 📧 Cara Setup EmailJS

EmailJS memungkinkan kamu mengirim email langsung dari frontend tanpa perlu backend server.

### Step 1: Daftar di EmailJS

1. Buka [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klik **Sign Up** (gratis)
3. Verifikasi email kamu

### Step 2: Buat Email Service

1. Login ke dashboard EmailJS
2. Klik **Email Services** di sidebar
3. Klik **Add New Service**
4. Pilih email provider (Gmail recommended):
   - Gmail
   - Outlook
   - Yahoo
   - Custom SMTP
5. Connect dengan akun email kamu
6. Copy **Service ID** (contoh: `service_abc123`)

### Step 3: Buat Email Template

1. Klik **Email Templates** di sidebar
2. Klik **Create New Template**
3. Setup template:

```
Subject: New Contact from {{user_name}}

From: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

4. Save template
5. Copy **Template ID** (contoh: `template_xyz789`)

### Step 4: Get Public Key

1. Klik **Account** di sidebar
2. Scroll ke **API Keys**
3. Copy **Public Key** (contoh: `abcXYZ123456`)

### Step 5: Update Code

Edit file `components/ContactSection.tsx` line 18-20:

```typescript
await emailjs.sendForm(
  "service_abc123",        // Ganti dengan Service ID kamu
  "template_xyz789",       // Ganti dengan Template ID kamu
  formRef.current!,
  "abcXYZ123456"          // Ganti dengan Public Key kamu
);
```

### Step 6: Test

1. Restart dev server:
   ```bash
   npm run dev -- -p 8000
   ```

2. Buka http://localhost:8000/contact

3. Isi form dan klik Send

4. Cek email kamu!

---

## 🎯 Template Variables

Pastikan nama field di form sesuai dengan template:

- `user_name` → Nama pengirim
- `user_email` → Email pengirim
- `message` → Pesan

---

## 🔒 Security

EmailJS Public Key aman digunakan di frontend karena:
- Hanya bisa kirim email (tidak bisa baca)
- Rate limited (200 emails/month gratis)
- Bisa set domain whitelist

---

## 💡 Tips

1. **Gmail:** Aktifkan "Less secure app access" atau gunakan App Password
2. **Rate Limit:** Free plan = 200 emails/month
3. **Upgrade:** Paid plan mulai $7/month untuk unlimited emails

---

## 🐛 Troubleshooting

### Error: "Service ID not found"
- Cek Service ID sudah benar
- Pastikan service sudah connected

### Error: "Template ID not found"
- Cek Template ID sudah benar
- Pastikan template sudah published

### Email tidak terkirim
- Cek console browser untuk error
- Cek spam folder
- Cek EmailJS dashboard untuk logs

---

## 📚 Resources

- EmailJS Docs: https://www.emailjs.com/docs/
- React Integration: https://www.emailjs.com/docs/examples/reactjs/

---

**Setup time: ~10 menit**
**Free tier: 200 emails/month**
