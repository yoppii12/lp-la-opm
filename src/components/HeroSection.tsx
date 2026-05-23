import { LINKS } from "@/lib/constants";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* 背景プレースホルダー */}
      <div className="absolute inset-0 placeholder-image">
        <span className="text-lg">背景画像プレースホルダー（施設・現場写真）</span>
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl text-white">
          {/* サービスカテゴリラベル */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
              AI-App
            </span>
            <span className="text-white/80 text-sm">サービスカテゴリ名</span>
          </div>

          {/* サブキャッチ */}
          <p className="text-lg md:text-xl text-white/90 mb-3 font-medium">
            サブキャッチコピーをここに記述します
          </p>

          {/* メインキャッチ */}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            メインキャッチコピー<br />
            <span className="text-[var(--color-accent)]">強調したいキーワード</span>で<br />
            課題を解決
          </h1>

          <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
            サービスの価値を簡潔に説明する1〜2文のリード文をここに入れます。
            ターゲットの課題と解決策を結びつける文章を記述してください。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={LINKS.contact} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-base shadow-lg"
            >
              お問い合わせ
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={LINKS.download} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 border border-white/50 text-white font-bold rounded-lg hover:bg-white/30 transition-colors text-base backdrop-blur-sm"
            >
              資料ダウンロード
            </Link>
          </div>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-1">
        <span className="text-xs">SCROLL</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
