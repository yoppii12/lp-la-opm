import Link from "next/link";

const footerLinks = [
  {
    heading: "サービス",
    links: [
      { label: "サービスとは", href: "#about" },
      { label: "特長", href: "#features" },
      { label: "システム構成", href: "#system" },
      { label: "利用シーン", href: "#usecase" },
    ],
  },
  {
    heading: "導入検討",
    links: [
      { label: "導入の流れ", href: "#flow" },
      { label: "よくあるご質問", href: "#faq" },
      { label: "資料ダウンロード", href: "#contact" },
      { label: "無償デモ申込", href: "#contact" },
    ],
  },
  {
    heading: "会社情報",
    links: [
      { label: "会社概要", href: "#" },
      { label: "プライバシーポリシー", href: "#" },
      { label: "お問い合わせ", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 上部 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* ロゴ・説明 */}
          <div className="col-span-2 md:col-span-1">
            <div className="placeholder-image w-28 h-8 rounded text-xs mb-4">LOGO</div>
            <p className="text-gray-400 text-xs leading-relaxed">
              サービスの簡単な説明文をここに記述します。
              会社のブランドメッセージやサービスのコンセプトを2〜3文で。
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-white font-bold text-sm mb-4">{group.heading}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-xs hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 下部 */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">利用規約</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">特定商取引法表記</Link>
          </div>
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} 会社名. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
