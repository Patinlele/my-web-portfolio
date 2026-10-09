import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-12 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-[56px] md:leading-[1.07]">
          Tentang Saya.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Kolom kiri: kartu info */}
          <div className="space-y-4">
            {[
              { label: "Nama", value: profile.name },
              { label: "Role", value: profile.role },
              { label: "Lokasi", value: profile.location },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] bg-[#f5f5f7] p-6"
              >
                <p className="text-[12px] font-medium uppercase tracking-wide text-[#86868b]">
                  {item.label}
                </p>
                <p className="mt-1 text-[17px] font-semibold text-[#1d1d1f]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Kolom kanan: cerita + skill */}
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-[#1d1d1f] md:text-[19px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skillset dikelompokkan per kategori */}
            {about.skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="mt-10 text-[12px] font-medium uppercase tracking-wide text-[#86868b]">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#f5f5f7] px-4 py-1.5 text-[14px] font-medium text-[#1d1d1f]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
