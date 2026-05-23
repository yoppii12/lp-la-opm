const useCases = [
  {
    step: "STEP 1",
    title: "入場時",
    description:
      "AIカメラが車両を自動検知。入場時刻を自動記録し、管理システムへリアルタイムで連携します。",
    imageLabel: "入場シーン・カメラ検知イメージ",
    direction: "→",
  },
  {
    step: "STEP 2",
    title: "待機・荷待ち",
    description:
      "待機時間をリアルタイムで可視化。荷待ち状況を一元管理し、業務改善の根拠データとして活用できます。",
    imageLabel: "待機場の管理画面・タイムライン表示",
    direction: "→",
  },
  {
    step: "STEP 3",
    title: "作業中",
    description:
      "作業時間をAIが自動計測。手入力不要で正確な滞在時間データを記録・蓄積します。",
    imageLabel: "作業中の時刻記録・管理画面",
    direction: "→",
  },
  {
    step: "STEP 4",
    title: "退場時",
    description:
      "退場時もカメラが自動認識。入退場の全データが揃い、レポート作成・分析がすぐに行えます。",
    imageLabel: "退場シーン・データ集計レポート",
    direction: null,
  },
];

export default function UseCaseSection() {
  return (
    <section id="usecase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <div className="text-center mb-4">
          <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">Use Case</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">利用シーン</h2>
        </div>

        {/* 背景コンテキスト */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 max-w-3xl mx-auto mb-14 text-center">
          <p className="text-[var(--color-primary)] text-sm md:text-base font-medium leading-relaxed">
            入退場の時間をAIカメラで自動計測。<br />
            規制対応・業務改善・コンプライアンス強化にご活用いただけます。
          </p>
        </div>

        {/* ステップフロー */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col md:flex-row items-stretch gap-4">
              <div className="flex-1 bg-[var(--color-section)] rounded-2xl overflow-hidden shadow-sm">
                {/* 画像プレースホルダー */}
                <div className="placeholder-image w-full h-40 text-xs">
                  {useCase.imageLabel}
                </div>
                {/* テキスト */}
                <div className="p-4">
                  <div className="text-[var(--color-accent)] text-xs font-bold mb-1">{useCase.step}</div>
                  <h3 className="text-base font-black text-[var(--color-primary)] mb-2">{useCase.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{useCase.description}</p>
                </div>
              </div>

              {/* 矢印（最後のステップ以外） */}
              {useCase.direction && (
                <div className="hidden md:flex items-center justify-center text-gray-300 text-2xl font-bold flex-shrink-0">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
