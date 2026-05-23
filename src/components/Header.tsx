"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // 初期値
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`w-32 h-8 rounded text-xs flex items-center justify-center transition-colors ${
                  transparent
                    ? "bg-white/20 text-white"
                    : "placeholder-image"
                }`}
              >
                LOGO
              </div>
            </Link>
          </div>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {["#about", "#features", "#system", "#flow", "#faq"].map((href, i) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:opacity-70 ${
                  transparent ? "text-white/90" : "text-gray-700"
                }`}
              >
                {["サービスとは", "特長", "システム構成", "導入の流れ", "よくある質問"][i]}
              </Link>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={LINKS.download}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-sm rounded transition-colors font-medium border ${
                transparent
                  ? "border-white/60 text-white hover:bg-white/10"
                  : "border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-blue-50"
              }`}
            >
              資料ダウンロード
            </Link>
            <Link
              href={LINKS.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-[var(--color-accent)] text-white rounded hover:opacity-90 transition-opacity font-medium"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${
              transparent ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {[
            { href: "#about", label: "サービスとは" },
            { href: "#features", label: "特長" },
            { href: "#system", label: "システム構成" },
            { href: "#flow", label: "導入の流れ" },
            { href: "#faq", label: "よくある質問" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-sm text-gray-700 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href={LINKS.download}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 py-2 text-sm border border-[var(--color-primary)] text-[var(--color-primary)] rounded"
            >
              資料ダウンロード
            </Link>
            <Link
              href={LINKS.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 py-2 text-sm bg-[var(--color-accent)] text-white rounded font-medium"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
