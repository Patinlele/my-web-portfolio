import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Bagaimana website ini menangani data dan cookie pengunjung.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Kebijakan Privasi" updated="9 Oktober 2026">
      <LegalSection title="Ringkasan singkat">
        <p>
          Website ini bersifat statis: tidak menjalankan analitik, tidak
          memasang skrip pelacak (tracking), dan tidak memasang cookie iklan
          atau cookie pihak ketiga.
        </p>
      </LegalSection>

      <LegalSection title="Data yang disimpan di browser kamu">
        <p>
          Satu-satunya data yang disimpan adalah pilihan kamu pada banner
          cookie (diterima atau ditolak). Data ini disimpan di{" "}
          <em>localStorage</em> browser kamu sendiri, tidak pernah dikirim ke
          server mana pun, dan bisa dihapus kapan saja lewat pengaturan
          browser (bersihkan data situs untuk domain ini).
        </p>
      </LegalSection>

      <LegalSection title="Formulir kontak">
        <p>
          Pesan yang kamu kirim lewat formulir kontak diteruskan ke email
          pemilik situs ({profile.email}) dan digunakan hanya untuk membalas
          pesan kamu. Data tersebut tidak dijual, tidak dibagikan, dan tidak
          dipakai untuk pemasaran.
        </p>
        <p>
          {/* TODO: kalau form dihubungkan ke layanan pihak ketiga
              (mis. Formspree/Resend), sebutkan layanannya di sini. */}
        </p>
      </LegalSection>

      <LegalSection title="Hak kamu">
        <p>
          Karena situs ini tidak mengumpulkan data pribadi di server, tidak
          ada profil yang bisa dihapus. Untuk data yang pernah kamu kirim
          lewat email, kamu bisa meminta penghapusan dengan menghubungi{" "}
          <a href={`mailto:${profile.email}`} className="text-[#0066cc] hover:underline">
            {profile.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Perubahan kebijakan">
        <p>
          Kebijakan ini bisa diperbarui sewaktu-waktu. Tanggal
          &ldquo;terakhir diperbarui&rdquo; di atas akan diubah setiap ada
          revisi.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
