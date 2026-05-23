import { LINKS } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "商談・ヒアリング",
    description:
      "導入目的・設置環境（回線・電源・通行ルート）を確認します。お客様の課題をヒアリングし、最適なシステム構成をご提案します。",
    imageLabel: "打ち合わせ・ヒアリングシーン",
  },
  {
    number: "02",
    title: "現地調査・設計",
    description:
      "現場にてカメラ設置位置・画角の最適化を測定します。環境に合わせた詳細な設置設計を行います。",
    imageLabel: "現地調査・測定作業シーン",
  },
  {
    number: "03",
    title: "設置工事・動作確認・納品",
    description:
      "ピント・フォーカスの調整後、日中・夜間の動作検証を実施。問題なければ納品・稼働開始となります。",
    imageLabel: "設置工事・調整・テスト稼働シーン",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-20 bg-[var(--color-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">Flow</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
            導入までの流れ
          </h2>
          <p className="text-gray-500 text-base">
            ご相談から稼働開始まで、専任担当がトータルサポートします。
          </p>
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* 矢印コネクター */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 z-10 text-gray-300 text-3xl font-thin">
                  →
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full">
                {/* 画像プレースホルダー */}
                <div className="placeholder-image w-full h-48 text-sm">
                  {step.imageLabel}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-black text-gray-100">{step.number}</span>
                    <h3 className="text-base font-black text-[var(--color-primary)]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 無償デモCTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 text-center">
          <p className="text-lg font-bold mb-2">まずは無償デモをお試しください</p>
          <p className="text-white/70 text-sm mb-6">実際の動作確認・ご要望のヒアリングを無料で行います。</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={LINKS.contact} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              無償デモを申し込む
            </a>
            <a
              href={LINKS.download} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/20 border border-white/40 text-white font-bold rounded-lg hover:bg-white/30 transition-colors"
            >
              資料ダウンロード
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
