//Main nya

export const profile = {
  name: "Muhammad Faathin Naufal",
  role: "Multimedia & Developer",
  tagline:
    "Perkenalkan saya Faathin, seorang mahasiswa jurusan Informatika di Universitas Multimedia Nusantara yang suka menggabungkan teknologi dan kreativitas",
  location: "Indonesia",
  email: "mfaathinn@gmail.com",
  photo: "/profilePic.jpg",
  socials: {
    github: "https://github.com/Patinlele",
    linkedin: "https://www.linkedin.com/in/muhammad-faathin-naufal-0b0924316",
    instagram: "https://instagram.com/_fvthn",
    twitter: "",
  },
  resumeUrl: "", //todo belom ada cv
};

export const about = {
  paragraphs: [
    "Halo! Saya seorang kreator multidisiplin yang senang mengubah ide menjadi karya nyata — baik dalam bentuk produk digital maupun karya visual.",
    "Di sisi teknologi, saya fokus pada pengembangan web modern dengan React/Next.js dan Node.js. Di sisi kreatif, saya menekuni videografi, fotografi, dan menerbangkan drone untuk menangkap sudut pandang yang tidak biasa.",
  ],

  skillGroups: [
    {
      category: "Teknologi",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "HTML & CSS",
        "Git & GitHub",
        "REST API",
        "SQL",
        "Python",
      ],
    },
    {
      category: "Kreatif",
      items: [
        "Videography",
        "Photography",
        "Drone Pilot",
        "Video Editing",
        "Color Grading",
        "Figma",
        "Adobe Premiere Pro",
        "DaVinci Resolve",
        "Lightroom",
      ],
    },
  ],
};

type Project = {
  title: string;
  description: string;
  category: string; // mis. "Web", "Video", "Foto", "Drone", "Desain"
  tags: string[];
  githubUrl: "";
  demoUrl: string; // isi "" kalau tidak ada
  // Warna latar kartu — pilih: indigo, cyan, emerald, rose, amber, violet
  color: "indigo" | "cyan" | "emerald" | "rose" | "amber" | "violet";
  emoji: string;
};
export default Project


export const projects: Project[] = [
  {
    title: "Website Portfolio",
    description:
      "Website portfolio pribadi yang dibangun dengan Next.js dan Tailwind CSS — cepat, responsif, dan ramah SEO.",
    category: "Web",
    tags: ["Next.js", "Tailwind CSS"],
    githubUrl: "",
    demoUrl: "",
    color: "indigo",
    emoji: "💻",
  },
  {
    title: "Video Dokumentasi Event",
    description:
      "Dokumentasi video sebuah event — mulai dari pengambilan gambar, penyuntingan, hingga color grading.",
    category: "Video",
    tags: ["Videography", "Premiere Pro"],
    githubUrl: "",
    demoUrl: "",
    color: "rose",
    emoji: "🎬",
  },
  {
    title: "Aerial Photography",
    description:
      "Kumpulan foto udara dengan drone yang menangkap lanskap dan sudut pandang dari ketinggian.",
    category: "Drone",
    tags: ["Drone", "Photography"],
    githubUrl: "",
    demoUrl: "",
    color: "cyan",
    emoji: "🚁",
  },
  {
    title: "Seri Foto Perjalanan",
    description:
      "Proyek fotografi personal yang mendokumentasikan perjalanan — momen, budaya, dan pemandangan.",
    category: "Foto",
    tags: ["Photography", "Lightroom"],
    githubUrl: "",
    demoUrl: "",
    color: "amber",
    emoji: "📷",
  },
];

export type GalleryItem = {
  title: string;
  caption: string; // deskripsi singkat di bawah judul
  category: string; // mis. "Foto", "Video", "Dokumentasi"
  // Letakkan file gambar di folder public/gallery/ lalu isi path-nya di sini,
  // mis. "/gallery/foto1.jpg". Kosongkan ("") untuk menampilkan placeholder emoji.
  image: string;
  emoji: string;
  color: "indigo" | "cyan" | "emerald" | "rose" | "amber" | "violet";
  // Tautan opsional (YouTube/Vimeo/Drive) — kosongkan kalau tidak ada
  linkUrl: string;
};

// TODO: ganti dengan karya/dokumentasi aslimu.
export const gallery: GalleryItem[] = [
  {
    title: "Golden Hour",
    caption: "Momen matahari terbenam dari ketinggian.",
    category: "Foto",
    image: "",
    emoji: "🌅",
    color: "amber",
    linkUrl: "",
  },
  {
    title: "City from Above",
    caption: "Pemandangan kota di malam hari lewat drone.",
    category: "Drone",
    image: "",
    emoji: "🌃",
    color: "indigo",
    linkUrl: "",
  },
  {
    title: "Behind the Scene",
    caption: "Dokumentasi proses produksi sebuah video.",
    category: "Dokumentasi",
    image: "",
    emoji: "🎥",
    color: "rose",
    linkUrl: "",
  },
  {
    title: "Nature Walk",
    caption: "Seri foto alam dan lingkungan sekitar.",
    category: "Foto",
    image: "",
    emoji: "🌿",
    color: "emerald",
    linkUrl: "",
  },
  {
    title: "Short Film",
    caption: "Film pendek eksperimental hasil kolaborasi.",
    category: "Video",
    image: "",
    emoji: "🎞️",
    color: "violet",
    linkUrl: "",
  },
  {
    title: "Product Shot",
    caption: "Foto produk untuk kebutuhan branding.",
    category: "Foto",
    image: "",
    emoji: "📦",
    color: "cyan",
    linkUrl: "",
  },
];

export type Experience = {
  role: string; // jabatan / peran
  organization: string; // nama perusahaan / organisasi / kampus
  period: string; // mis. "2024 — Sekarang"
  description: string;
  type: "kerja" | "organisasi" | "pendidikan" | "freelance";
};

// TODO: ganti dengan pengalaman aslimu
export const experiences: Experience[] = [
  {
    role: "Freelance Creative",
    organization: "Proyek Mandiri",
    period: "2023 — Sekarang",
    description:
      "Mengerjakan proyek videografi, fotografi, dan pengembangan web untuk berbagai klien.",
    type: "freelance",
  },
  {
    role: "Web Developer",
    organization: "Nama Perusahaan",
    period: "2022 — 2023",
    description:
      "Membangun dan memelihara aplikasi web menggunakan React dan Node.js bersama tim kecil.",
    type: "kerja",
  },
  {
    role: "Anggota Divisi Media",
    organization: "Nama Organisasi",
    period: "2021 — 2022",
    description:
      "Bertanggung jawab atas dokumentasi foto dan video kegiatan organisasi.",
    type: "organisasi",
  },
];

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Karya", href: "#karya" },
  { label: "Galeri", href: "#galeri" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
];
