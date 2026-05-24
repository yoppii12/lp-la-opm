# Backlog

参考デザイン: `order-point-management/lp/samples/lp-sample-safie.png`

---

## 未着手

### テキストコンテンツ差し替え

現状すべてのセクションがプレースホルダーテキスト。実際のサービス内容に差し替える。

- [ ] `src/lib/constants.ts` — サービス名・本番URL・会社名・メールアドレス・CTAリンク
- [ ] `HeroSection` — サブキャッチ・メインキャッチ・リード文・サービスカテゴリラベル
- [ ] `AboutSection` — サービス概要文（150字）・バッジラベル
- [ ] `PainPointsSection` — 課題タイトル×4・課題説明文×4
- [ ] `FeaturesSection` — 特長①〜⑤のタイトル・説明文・精度バッジの数値
- [ ] `SystemSection` — システム構成の説明文
- [ ] `UseCaseSection` — ユースケースのタイトル・説明文
- [ ] `FlowSection` — 導入ステップのテキスト
- [ ] `FaqSection` — FAQ の質問・回答

### 画像差し替え

現状すべての画像エリアがプレースホルダー。実素材が揃い次第差し替える。

- [ ] Hero背景 — 施設・現場写真（物流・倉庫など）
- [ ] About — サービス概要図・インフォグラフィック
- [ ] PainPoints — 担当者イラスト・写真
- [ ] Features各項 — 設置イメージ・コスト比較グラフ・精度グラフ・管理画面スクショ・連携構成図
- [ ] System — 機器構成図
- [ ] UseCases — 現場の実写写真

### SEOメタデータ設定

- [ ] `src/app/layout.tsx` の `metadata`（title・description・OGP）を実際の内容に更新
- [ ] `src/app/opengraph-image.tsx` のOG画像コンテンツ更新
- [ ] `src/lib/constants.ts` の `SITE.baseUrl` を本番URLに変更
- [ ] `src/app/robots.ts` / `src/app/sitemap.ts` の本番URL反映確認

### `.placeholder-image` クラスの削除

画像を実素材に差し替えた後、`src/app/globals.css` の `.placeholder-image` クラスは不要になる。
各コンポーネントで `placeholder-image` を使用している箇所も合わせて削除する。

- [ ] `src/app/globals.css` から `.placeholder-image` スタイルを削除
- [ ] 各コンポーネントの `className="placeholder-image ..."` を実際の `<Image>` タグに差し替え

**依存:** 画像差し替えタスクの完了後に実施

---

### 静的エクスポートへの移行（将来案）

現在は Netlify Next.js Runtime で運用しているが、純粋CDN配信に切り替えることで配信速度向上・コスト削減が見込める。

- [ ] `src/app/opengraph-image.tsx` の edge runtime を廃止し、静的PNGファイルに差し替え
- [ ] `next.config.ts` に `output: 'export'` を追加
- [ ] セキュリティヘッダーを `next.config.ts` の `headers()` から `netlify.toml` の `[[headers]]` に移行
- [ ] `netlify.toml` の `publish` を `.next` から `out` に変更

---

## 完了済み

- [x] Next.js プロジェクト初期構築（Hero・About・PainPoints・Features・System・UseCases・Flow・FAQ・CTA・Footer）
- [x] セキュリティヘッダー設定（`next.config.ts`）
- [x] SEO基盤（JSON-LD・OGP・robots・sitemap）
- [x] GitHub リポジトリ作成・初回プッシュ
