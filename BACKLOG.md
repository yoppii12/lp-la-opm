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

---

## 完了済み

- [x] Next.js プロジェクト初期構築（Hero・About・PainPoints・Features・System・UseCases・Flow・FAQ・CTA・Footer）
- [x] セキュリティヘッダー設定（`next.config.ts`）
- [x] SEO基盤（JSON-LD・OGP・robots・sitemap）
- [x] GitHub リポジトリ作成・初回プッシュ
