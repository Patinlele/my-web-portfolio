import Image from "next/image";
import { profile } from "@/data/portfolio";

// Lingkaran foto profil. Kalau profile.photo masih kosong, tampil
// placeholder berupa inisial nama di atas latar abu lembut.
export default function ProfilePhoto() {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-[#f5f5f7] ring-1 ring-black/5 md:h-40 md:w-40">
      {profile.photo ? (
        <Image
          src={profile.photo}
          alt={`Foto profil ${profile.name}`}
          fill
          sizes="160px"
          className="object-cover"
          priority
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center text-4xl font-semibold text-[#86868b] md:text-5xl"
        >
          {initials}
        </span>
      )}
    </div>
  );
}
