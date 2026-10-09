import { profile } from "@/data/portfolio";
import { socialIconMap } from "./icons";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="flex min-h-screen items-center bg-white pt-12"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        {/* Foto profil — placeholder inisial sampai kamu isi profile.photo */}
        <ProfilePhoto />

        <p className="mt-8 text-[17px] font-medium text-[#86868b]">
          {profile.location}
        </p>

        <h1 className="mt-2 text-5xl font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] md:text-7xl">
          {profile.name}
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-[#1d1d1f] md:text-3xl">
          {profile.role}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#86868b] md:text-[19px]">
          {profile.tagline}
        </p>

        {/* Tombol aksi — pill button biru khas Apple */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#karya"
            className="rounded-full bg-[#0071e3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
          >
            Lihat Karya
          </a>
          <a
            href="#kontak"
            className="text-[17px] text-[#0066cc] hover:underline"
          >
            Hubungi saya &gt;
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] text-[#0066cc] hover:underline"
            >
              Unduh CV &gt;
            </a>
          )}
        </div>

        {/* Ikon sosial media */}
        <div className="mt-12 flex items-center justify-center gap-8">
          {Object.entries(socialIconMap).map(([key, { label, url, Icon }]) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-[#86868b] transition-colors hover:text-[#1d1d1f]"
              >
                <Icon className="h-6 w-6" />
              </a>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
