const painPoints = [
  {
    id: "01",
    title: "課題タイトル1（30〜40字で記述）",
    description: "具体的な課題の説明文。現場担当者が感じているリアルな悩みを記述します。",
  },
  {
    id: "02",
    title: "課題タイトル2（コスト・費用面の課題）",
    description: "初期費用や運用コストに関する課題の説明文をここに記述します。",
  },
  {
    id: "03",
    title: "課題タイトル3（精度・品質面の課題）",
    description: "精度や正確性に関する不安・課題の説明文をここに記述します。",
  },
  {
    id: "04",
    title: "課題タイトル4（作業負担の課題）",
    description: "手作業や人的ミスに関する課題の説明文をここに記述します。",
  },
];

export default function PainPointsSection() {
  return (
    <section id="problems" className="py-20 bg-[var(--color-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 課題グリッド 左 */}
          <div>
            <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">Problems</p>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-8">
              このような<br />お困りごとはありませんか？
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {painPoints.map((point) => (
                <div
                  key={point.id}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-[var(--color-accent)] text-xs font-bold mb-2">{point.id}</div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 画像 右 */}
          <div className="flex flex-col items-center">
            <div className="placeholder-image w-full h-72 md:h-96 rounded-2xl shadow text-sm">
              課題を示す担当者イラスト・写真
            </div>
            <p className="text-xs text-gray-400 mt-2">※イメージです</p>
          </div>
        </div>
      </div>
    </section>
  );
}
