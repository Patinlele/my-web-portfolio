# Portfolio — Nama Kamu

Website portfolio pribadi bergaya Apple/iCloud. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Menjalankan

```bash
npm install     # sekali saja
npm run dev     # http://localhost:3000
```

Perintah penting lainnya:

```bash
npm run build     # build produksi (harus lolos sebelum deploy)
npm run lint      # cek gaya kode (ESLint)
npx tsc --noEmit  # cek tipe TypeScript
```

## Struktur yang perlu kamu kenal

| Lokasi | Isi |
| --- | --- |
| `src/data/portfolio.ts` | **Semua konten** — nama, bio, skill, karya, galeri, pengalaman. Edit file ini saja untuk mengubah isi situs tanpa menyentuh komponen. |
| `src/components/` | Komponen per section (Hero, About, Projects, Gallery, Experience, Contact, Footer, CookieConsent, ProfilePhoto). |
| `src/app/page.tsx` | Urutan section beranda. Ubah urutan di sini. |
| `src/app/privasi/`, `src/app/syarat/` | Halaman Kebijakan Privasi dan Syarat & Ketentuan. |
| `src/app/layout.tsx` | Metadata SEO (title, deskripsi, Open Graph). |
| `public/` | File statis: `profil.jpg` (foto profil), `gallery/` (foto galeri). |

## TODO sebelum dipublikasikan

Semua ditandai komentar `TODO` di kode — cari dengan Ctrl+Shift+F:

1. `src/data/portfolio.ts` — nama, email, sosmed, karya, galeri, pengalaman asli.
2. Foto profil: taruh `public/profil.jpg`, isi `profile.photo = "/profil.jpg"`.
3. Foto galeri: taruh di `public/gallery/`, isi field `image` tiap item.
4. Form kontak: sambungkan ke Formspree/Resend (lihat komentar di `Contact.tsx`).
5. `src/app/layout.tsx` — title/description dengan nama aslimu.
6. Halaman legal (`/privasi`, `/syarat`) — sesuaikan tanggal & isi.

## Keamanan & privasi

- Header keamanan (`nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) di `next.config.ts`.
- Tanpa analitik/pelacak; banner cookie hanya menyimpan pilihan di `localStorage`.
- `.gitignore` sudah melindungi `.env*`, kunci, dan file rahasia — jangan pernah commit kredensial.

## Deploy

Paling mudah: push ke GitHub lalu impor ke [Vercel](https://vercel.com/new) (otomatis HTTPS + build). Alternatif: `npm run build` lalu host folder `.next`/`out` di server sendiri.
