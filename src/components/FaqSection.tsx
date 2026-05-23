"use client";

import { LINKS } from "@/lib/constants";

import { useState } from "react";

const faqs = [
  {
    question: "1台で入場・退場両方を認識できますか？",
    answer:
      "1台で双方向の認識は技術的に可能ですが、精度を担保するため、入場用・退場用それぞれ1台ずつの設置を推奨しています。設置環境によって最適な構成をご提案します。",
  },
  {
    question: "1台で何レーン対応できますか？",
    answer:
      "1台につき1レーンの対応を推奨しています。複数レーンへの対応は画角の設定によって異なりますので、現地調査の際にご相談ください。",
  },
  {
    question: "既存のネットワーク環境を使用できますか？",
    answer:
      "有線LAN・Wi-Fiなど既存のネットワーク環境をそのままご利用いただけます。LTEルーターは必須ではありません。",
  },
  {
    question: "夜間でも正確に認識できますか？",
    answer:
      "IR投光器（赤外線照明）の併用により、夜間環境でも安定した認識が可能です。設置環境に応じてIR投光器の追加をご提案します。",
  },
  {
    question: "複数拠点を一元管理できますか？",
    answer:
      "現在は1拠点ごとに1アカウントの構成となっています。複数拠点の一括管理については、カスタマイズ対応が可能ですのでご相談ください。",
  },
  {
    question: "既存システムとの連携は可能ですか？",
    answer:
      "APIを通じた既存システムとの連携はカスタマイズ対応が可能です。まずは連携したいシステムの詳細をお知らせください。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
            よくあるご質問
          </h2>
        </div>

        {/* アコーディオン */}
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white">
              <button
                id={`faq-btn-${index}`}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] font-bold text-sm mt-0.5 flex-shrink-0">Q</span>
                  <span className="text-sm md:text-base font-medium text-gray-800">{faq.question}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                hidden={openIndex !== index}
                className="px-6 pb-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold text-sm mt-0.5 flex-shrink-0">A</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQセクション下CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">その他のご質問は、お気軽にお問い合わせください。</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={LINKS.contact} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              お問い合わせ
            </a>
            <a
              href={LINKS.download} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              資料ダウンロード
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
