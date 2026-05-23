import { LINKS } from "@/lib/constants";

import Link from "next/link";

const badges = [
  "現場負担ゼロへ",
  "簡単設置",
  "即日 見える化",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクション見出し */}
        <div className="mb-12">
          <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">About</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
            サービス名とは
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* テキスト左 */}
          <div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              サービスの概要を150字前後で記述します。サービス名（略称）を初出時に併記してください。
              何ができるサービスで、誰の課題を解決するのかを簡潔に説明します。
              PCレスで簡単設置ができ、クラウド型なので低コストに導入できます。
            </p>

            {/* バッジ */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-full"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={LINKS.contact} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                お問い合わせ
              </Link>
              <Link
                href={LINKS.download} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                資料ダウンロード
              </Link>
            </div>
          </div>

          {/* 画像右 */}
          <div className="relative">
            <div className="placeholder-image w-full h-72 md:h-96 rounded-2xl shadow-lg text-sm">
              サービス概要図・インフォグラフィック
            </div>
            <p className="text-xs text-gray-400 mt-2 text-right">※イメージです</p>
          </div>
        </div>
      </div>
    </section>
  );
}
