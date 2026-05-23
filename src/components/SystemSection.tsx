export default function SystemSection() {
  return (
    <section id="system" className="py-20 bg-[var(--color-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">System</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
            システム構成例
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            シンプル構成で、あらゆる現場にフィット
          </p>
        </div>

        {/* システム構成図 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-6">
          {/* 構成図プレースホルダー */}
          <div className="placeholder-image w-full h-64 md:h-96 rounded-xl text-sm mb-6">
            システム構成図（カメラ → クラウド → 管理システム の流れを示すブロック図）
          </div>

          {/* テキスト説明 */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
            設置はカメラ・電源のみのシンプル構成です。カメラ側のPC不要で導入できるため、
            現場の負担を最小限に抑えながら、すぐに運用を開始できます。
          </p>
        </div>

        {/* 補足注記 */}
        <div className="text-center space-y-1">
          <p className="text-xs text-gray-400">※一般的なシステム機器構成になります。</p>
          <p className="text-xs text-gray-400">※お客様の環境によってカスタマイズ対応も可能です。まずはご相談ください。</p>
        </div>
      </div>
    </section>
  );
}
