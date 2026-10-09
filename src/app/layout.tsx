import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter sangat mirip SF Pro (font khas Apple). Di macOS, fallback
// -apple-system otomatis memakai SF Pro asli.
const sfLike = Inter({
  variable: "--font-sf",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Faathin Naufal - Multimedia & Creative",
  description:
    "Portfolio Nama Kamu — pengembang web serta kreator video, foto, dan drone. Lihat karya, pengalaman, dan cara menghubungi saya.",
  keywords: ["portfolio", "web developer", "videografi", "fotografi", "drone"],
  openGraph: {
    title: "Muhammad Faathin Naufal - Multimedia & Creative",
    description:
      "Pengembang web serta kreator video, foto, dan drone. Lihat karya dan pengalaman saya.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${sfLike.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
