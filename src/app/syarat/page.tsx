import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Ketentuan penggunaan website portfolio ini.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Syarat & Ketentuan" updated="9 Oktober 2026">
      <LegalSection title="Penggunaan situs">
        <p>
          Dengan mengakses website ini kamu setuju untuk menggunakan isi situs
          hanya untuk keperluan yang sah — misalnya melihat karya, menghubungi
          pemilik situs, atau menilai portofolio secara profesional.
        </p>
      </LegalSection>

      <LegalSection title="Hak cipta karya">
        <p>
          Seluruh karya yang ditampilkan (foto, video, tulisan, kode) adalah
          milik pemilik situs kecuali dinyatakan lain. Kamu tidak boleh
          menggunakan, menyebarluaskan, atau mengklaim karya tersebut sebagai
          milikmu tanpa izin tertulis.
        </p>
      </LegalSection>

      <LegalSection title="Tautan pihak ketiga">
        <p>
          Situs ini memuat tautan ke layanan pihak ketiga (misalnya GitHub,
          Instagram, atau platform video). Kami tidak bertanggung jawab atas
          isi dan kebijakan privasi situs-situs tersebut.
        </p>
      </LegalSection>

      <LegalSection title="Tanpa jaminan">
        <p>
          Website ini disediakan &ldquo;sebagaimana adanya&rdquo;. Informasi
          di dalamnya diperbarui sewaktu-waktu dan mungkin tidak selalu lengkap
          atau terkini.
        </p>
      </LegalSection>

      <LegalSection title="Kontak">
        <p>
          Pertanyaan tentang ketentuan ini bisa dikirim ke{" "}
          <a href={`mailto:${profile.email}`} className="text-[#0066cc] hover:underline">
            {profile.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
