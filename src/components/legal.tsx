import Link from "next/link";
import type { ReactNode } from "react";

// Kerangka halaman legal (Privasi, ToS) — satu sumber supaya gaya konsisten.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-white pt-12">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-[12px] font-medium uppercase tracking-wide text-[#86868b]">
          Legal
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-[13px] text-[#86868b]">
          Terakhir diperbarui: {updated}
        </p>

        {/* TODO: sesuaikan isi dengan data pribadimu sebelum dipublikasikan */}
        <div className="mt-10 space-y-8">{children}</div>

        <p className="mt-14 border-t border-black/10 pt-6 text-[14px]">
          <Link href="/" className="text-[#0066cc] hover:underline">
            &larr; Kembali ke beranda
          </Link>
        </p>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[21px] font-semibold tracking-tight text-[#1d1d1f]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#1d1d1f]/80">
        {children}
      </div>
    </section>
  );
}
