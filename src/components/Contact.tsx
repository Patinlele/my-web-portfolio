"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: hubungkan ke layanan form seperti Formspree/Resend kalau mau
    //       email benar-benar terkirim. Contoh:
    //       fetch("https://formspree.io/f/IDKAMU", { method: "POST", body: new FormData(e.currentTarget) })
    setSent(true);
  }

  return (
    <section id="kontak" className="scroll-mt-12 bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-[56px] md:leading-[1.07]">
          Mari Bekerja Sama.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[17px] text-[#86868b] md:text-[21px]">
          Punya project menarik, lowongan kerja, atau sekadar ingin
          berdiskusi? Kirim pesan dan saya akan segera membalas.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Kolom kiri: email langsung */}
          <div className="flex flex-col justify-center rounded-[28px] bg-white p-10">
            <p className="text-[21px] font-semibold text-[#1d1d1f]">
              Email langsung
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#86868b]">
              Lebih suka email? Klik alamat di bawah, saya balas secepatnya.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block text-[17px] text-[#0066cc] hover:underline"
            >
              {profile.email}
            </a>
          </div>

          {/* Kolom kanan: form kontak */}
          <div className="rounded-[28px] bg-white p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f]">
                  Pesan Terkirim
                </h3>
                <p className="text-[14px] text-[#86868b]">
                  Terima kasih sudah menghubungi saya. Saya akan membalas
                  secepatnya.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-[14px] text-[#0066cc] hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-medium text-[#1d1d1f]">
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nama kamu"
                    className="mt-2 w-full rounded-[14px] bg-[#f5f5f7] px-4 py-3 text-[16px] text-[#1d1d1f] placeholder-[#86868b] outline-none transition-shadow focus:ring-2 focus:ring-[#0071e3]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-[#1d1d1f]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="kamu@example.com"
                    className="mt-2 w-full rounded-[14px] bg-[#f5f5f7] px-4 py-3 text-[16px] text-[#1d1d1f] placeholder-[#86868b] outline-none transition-shadow focus:ring-2 focus:ring-[#0071e3]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[14px] font-medium text-[#1d1d1f]">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Ceritakan tentang project atau ide kamu..."
                    className="mt-2 w-full resize-none rounded-[14px] bg-[#f5f5f7] px-4 py-3 text-[16px] text-[#1d1d1f] placeholder-[#86868b] outline-none transition-shadow focus:ring-2 focus:ring-[#0071e3]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0071e3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
                >
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
