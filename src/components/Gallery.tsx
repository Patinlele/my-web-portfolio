import Image from "next/image";
import { gallery, type GalleryItem } from "@/data/portfolio";

// Warna lembut khas kartu Apple untuk placeholder (saat belum ada foto)
const colorMap: Record<GalleryItem["color"], string> = {
  indigo: "bg-[#e8f0fe]",
  cyan: "bg-[#e3f6fa]",
  emerald: "bg-[#e6f6ec]",
  rose: "bg-[#fdeef0]",
  amber: "bg-[#fdf3e0]",
  violet: "bg-[#f3ecfd]",
};

export default function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-12 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-[56px] md:leading-[1.07]">
            Galeri.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-[#86868b] md:text-[21px]">
            Momen dan karya visual yang pernah saya dokumentasikan.
          </p>
        </div>

        {/* Grid galeri ala iCloud Photos — kartu bulat lembut */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => {
            const card = (
              <>
                {/* Foto asli (kalau ada) atau placeholder emoji */}
                {item.image ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex h-48 items-center justify-center ${colorMap[item.color]}`}
                  >
                    <span className="text-5xl">{item.emoji}</span>
                  </div>
                )}
                <div className="p-5">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#86868b]">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-[17px] font-semibold text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#86868b]">
                    {item.caption}
                  </p>
                </div>
              </>
            );

            return item.linkUrl ? (
              <a
                key={item.title}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-[24px] bg-[#f5f5f7] transition-opacity hover:opacity-90"
              >
                {card}
              </a>
            ) : (
              <div
                key={item.title}
                className="overflow-hidden rounded-[24px] bg-[#f5f5f7]"
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
