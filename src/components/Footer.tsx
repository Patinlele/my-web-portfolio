"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/portfolio";
import { socialIconMap } from "./icons";
const noSubscribe = () => () => {};

export default function Footer() {
  const year = useSyncExternalStore(
    noSubscribe,
    () => String(new Date().getFullYear()),
    () => ""
  );

  return (
    <footer className="bg-[#f5f5f7] py-6">
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-black/10" />
        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-[12px] text-[#86868b]">
            Copyright © {year ? year + " " : ""}
            {profile.name}.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/privasi"
              className="text-[12px] text-[#86868b] transition-colors hover:text-[#1d1d1f]"
            >
              Kebijakan Privasi
            </a>
            <a
              href="/syarat"
              className="text-[12px] text-[#86868b] transition-colors hover:text-[#1d1d1f]"
            >
              Syarat &amp; Ketentuan
            </a>
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
                  <Icon className="h-5 w-5" />
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
