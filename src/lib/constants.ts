// ============================================================
// サイト基本情報
// 本番デプロイ前に SITE の値を実際のものに更新してください
// ============================================================
export const SITE = {
  baseUrl: "https://example.com",          // 本番URL（末尾スラッシュなし）
  name: "サービス名",                        // サイト名・サービス名
  description: "サービスの説明文をここに記述します。SEOを意識した120〜160文字程度の説明文を入れてください。",
  organization: {
    name: "会社名をここに記入",
    email: "info@example.com",
  },
} as const;

// ============================================================
// CTAリンク
// ============================================================
export const LINKS = {
  contact: "https://safie.jp/whitepaper/mix-ai-app-number-plate/",  // お問い合わせ
  download: "https://safie.jp/contact/number-plate/",               // 資料ダウンロード
  email: "info@example.com",
} as const;
