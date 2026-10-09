"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
const STORAGE_KEY = "***";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("consent-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("consent-change", callback);
  };
}

function getSnapshot() {
  try {
    return !window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return false; // localStorage diblokir — jangan tampilkan banner
  }
}

function getServerSnapshot() {
  return false; // di server belum tahu pilihan pengunjung
}

export default function CookieConsent() {
  const visible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function decide(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, `${choice}:${Date.now()}`);
      // Paksa React membaca ulang snapshot localStorage
      window.dispatchEvent(new Event("consent-change"));
    } catch {
      // abaikan
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Persetujuan cookie"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[20px] bg-white/90 p-5 shadow-lg ring-1 ring-black/5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-[#1d1d1f]">
          Situs ini hanya menyimpan pilihan cookie kamu di browser ini —
          tidak ada pelacak atau cookie pihak ketiga. Selengkapnya di{" "}
          <Link href="/privasi" className="text-[#0066cc] hover:underline">
            Kebijakan Privasi
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="text-[13px] text-[#0066cc] hover:underline"
          >
            Tolak
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-[#0071e3] px-5 py-2 text-[13px] text-white transition-colors hover:bg-[#0077ed]"
          >
            Terima
          </button>
        </div>
      </div>
    </div>
  );
}
