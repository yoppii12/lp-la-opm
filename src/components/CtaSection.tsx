import { LINKS } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 bg-[var(--color-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* 見出し */}
        <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-2xl md:text-4xl font-black mb-4">
          まずはお気軽に<br className="sm:hidden" />お問い合わせください
        </h2>
        <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
          無償デモの実施・資料のご請求・ご不明点のご相談など、
          どのようなお問い合わせでも承ります。
        </p>

        {/* CTAボタン群 */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
          {/* メインCTA */}
          <div className="relative inline-flex">
            {/* パルスリングアニメーション */}
            <span className="absolute inset-0 rounded-xl bg-[var(--color-accent)] opacity-30 animate-ping" />
            <a
              href={LINKS.contact} target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-4 bg-[var(--color-accent)] text-white font-black rounded-xl hover:opacity-90 transition-opacity text-lg shadow-xl"
            >
              無償デモを申し込む
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a
            href={LINKS.download} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-white/20 border border-white/40 text-white font-bold rounded-xl hover:bg-white/30 transition-colors text-lg"
          >
            資料のご請求はこちら
          </a>
        </div>

        {/* 会社情報 */}
        <div className="border-t border-white/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* 会社名・担当者 */}
            <div className="text-left">
              <p className="text-white/50 text-xs mb-1">お問い合わせ先</p>
              <p className="text-white font-bold text-base">会社名をここに記入</p>
              <p className="text-white/70 text-sm mt-1">担当者名をここに記入</p>
            </div>

            {/* メール */}
            <div className="text-left">
              <p className="text-white/50 text-xs mb-1">Email</p>
              <a
                href={`mailto:${LINKS.email}`}
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                {LINKS.email}
              </a>
              <p className="text-white/50 text-xs mt-1">平日 9:00〜18:00</p>
            </div>

            {/* QRコードプレースホルダー */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/50 text-xs">QRコード</p>
              <div className="placeholder-image w-24 h-24 rounded-lg text-xs flex-shrink-0">
                QR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
