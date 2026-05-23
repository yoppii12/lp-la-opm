const features = [
  {
    number: "01",
    category: "簡単設置",
    title: "PCレス・簡易工事でどこでもすぐに利用開始できる",
    description:
      "電源とネットワーク環境があれば、複雑な工事なしでご利用を開始いただけます。専任のエンジニアなしでも設置でき、現場担当者の負担を最小限に抑えます。",
    imageLabel: "設置イメージ・実機写真",
    reverse: false,
  },
  {
    number: "02",
    category: "低コスト",
    title: "クラウド利用だから初期費用を抑えて手軽に始められる",
    description:
      "月額クラウドサービスとして提供するため、高額な初期投資は不要です。小規模な現場から始めて、必要に応じて拡張できる柔軟な料金体系を採用しています。",
    imageLabel: "コスト比較グラフ・料金説明図",
    reverse: true,
  },
  {
    number: "03",
    category: "高精度",
    title: "業界トップクラスの認識エンジンで高精度を実現",
    description:
      "導入実績多数を誇る認識エンジンを採用。悪天候・夜間など厳しい環境下でも安定した認識精度を発揮します。",
    imageLabel: "認識精度グラフ・パートナーロゴ",
    reverse: false,
    badge: "認識率 99.5%",
  },
  {
    number: "04",
    category: "標準アプリ",
    title: "すぐ使える管理アプリで現場データをリアルタイム確認",
    description:
      "追加費用なしで利用できる専用管理アプリが付属しています。リアルタイムでのデータ確認・CSV出力・統計処理が可能で、レポート作成の工数を大幅に削減します。",
    imageLabel: "管理画面ダッシュボードのスクリーンショット",
    reverse: true,
  },
  {
    number: "05",
    category: "拡張性",
    title: "既存システムとの連携もご相談ください",
    description:
      "APIを通じた既存システムとの連携はカスタマイズ対応が可能です。バース予約システムや各種ERPとの連携についても、まずはお気軽にご相談ください。",
    imageLabel: "連携システムロゴ群・連携構成図",
    reverse: false,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクション見出し */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">Features</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">特長</h2>
        </div>

        <div className="space-y-20">
          {features.map((feature) => (
            <div
              key={feature.number}
              className={`grid md:grid-cols-2 gap-10 items-center ${feature.reverse ? "md:[&>*:first-child]:order-last" : ""}`}
            >
              {/* テキスト */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-black text-gray-100 leading-none">{feature.number}</span>
                  <span className="text-[var(--color-accent)] text-xs font-bold bg-orange-50 px-3 py-1 rounded-full">
                    {feature.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                {feature.badge && (
                  <span className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>

              {/* 画像プレースホルダー */}
              <div>
                <div className="placeholder-image w-full h-64 md:h-80 rounded-2xl shadow-md text-sm">
                  {feature.imageLabel}
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">※イメージです</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
