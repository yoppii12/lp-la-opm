import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: `${SITE.name} | キャッチコピーをここに`,
  description: SITE.description,
  keywords: ["キーワード1", "キーワード2", "キーワード3"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE.name} | キャッチコピーをここに`,
    description: SITE.description,
    type: "website",
    locale: "ja_JP",
    siteName: SITE.name,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | キャッチコピーをここに`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900">
        {/* スキップナビゲーション（キーボード・スクリーンリーダー向け） */}
        <a
          href="#main"
          className="
            absolute left-4 top-4 z-[100]
            -translate-y-20 focus:translate-y-0
            px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-bold rounded
            transition-transform duration-150
            focus:outline-none focus:ring-2 focus:ring-white
          "
        >
          メインコンテンツへスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
