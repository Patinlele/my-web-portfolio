import { experiences } from "@/data/portfolio";

// Emoji penanda per jenis pengalaman
const typeBadge: Record<string, string> = {
  kerja: "💼",
  organisasi: "🤝",
  pendidikan: "🎓",
  freelance: "✨",
};

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="scroll-mt-12 bg-[#f5f5f7] py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-[56px] md:leading-[1.07]">
            Pengalaman.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-[#86868b] md:text-[21px]">
            Perjalanan saya sejauh ini — kerja, organisasi, dan proyek mandiri.
          </p>
        </div>

        {/* Timeline kartu ala Apple */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {experiences.map((exp) => (
            <article
              key={`${exp.role}-${exp.period}`}
              className="rounded-[24px] bg-white p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[20px]">
                    {typeBadge[exp.type] ?? "📌"}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold tracking-tight text-[#1d1d1f]">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-[14px] font-medium text-[#0066cc]">
                      {exp.organization}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[12px] font-medium text-[#86868b]">
                  {exp.period}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-[#86868b]">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
