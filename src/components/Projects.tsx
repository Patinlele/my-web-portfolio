import Project, { projects } from "@/data/portfolio";

// Warna lembut khas kartu Apple (latar pastel, tanpa gradien mencolok)
const colorMap: Record<Project["color"], string> = {
  indigo: "bg-[#e8f0fe]",
  cyan: "bg-[#e3f6fa]",
  emerald: "bg-[#e6f6ec]",
  rose: "bg-[#fdeef0]",
  amber: "bg-[#fdf3e0]",
  violet: "bg-[#f3ecfd]",
};

export default function Projects() {
  return (
    <section id="karya" className="scroll-mt-12 bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-[56px] md:leading-[1.07]">
            Karya Saya.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-[#86868b] md:text-[21px]">
            Dari aplikasi web sampai karya visual — video, foto, dan udara.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-[28px] bg-white"
            >
              {/* Thumbnail pastel dengan emoji */}
              <div
                className={`flex h-44 items-center justify-center ${colorMap[project.color]}`}
              >
                <span className="text-6xl">{project.emoji}</span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                {/* Kategori karya */}
                <p className="text-[12px] font-medium uppercase tracking-wide text-[#86868b]">
                  {project.category}
                </p>
                <h3 className="mt-1 text-[21px] font-semibold tracking-tight text-[#1d1d1f]">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#86868b]">
                  {project.description}
                </p>

                {/* Tag alat/teknologi */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[12px] font-medium text-[#1d1d1f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link opsional — gaya link Apple "Selengkapnya >" */}
                {(project.githubUrl || project.demoUrl) && (
                  <div className="mt-6 flex items-center gap-6 text-[14px]">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0066cc] hover:underline"
                      >
                        Lihat kode &gt;
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0066cc] hover:underline"
                      >
                        Demo &gt;
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
