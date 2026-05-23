import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PainPointsSection from "@/components/PainPointsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SystemSection from "@/components/SystemSection";
import UseCaseSection from "@/components/UseCaseSection";
import FlowSection from "@/components/FlowSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { SITE, LINKS } from "@/lib/constants";

// ============================================================
// JSON-LD 構造化データ
// ============================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 組織情報
    {
      "@type": "Organization",
      "@id": `${SITE.baseUrl}/#organization`,
      name: SITE.organization.name,
      url: SITE.baseUrl,
      email: SITE.organization.email,
      contactPoint: {
        "@type": "ContactPoint",
        email: LINKS.email,
        contactType: "customer support",
        availableLanguage: "Japanese",
      },
    },
    // ランディングページ
    {
      "@type": "WebPage",
      "@id": `${SITE.baseUrl}/#webpage`,
      url: SITE.baseUrl,
      name: `${SITE.name} | キャッチコピーをここに`,
      description: SITE.description,
      isPartOf: { "@id": `${SITE.baseUrl}/#website` },
      publisher: { "@id": `${SITE.baseUrl}/#organization` },
      inLanguage: "ja",
    },
    // ウェブサイト
    {
      "@type": "WebSite",
      "@id": `${SITE.baseUrl}/#website`,
      url: SITE.baseUrl,
      name: SITE.name,
      publisher: { "@id": `${SITE.baseUrl}/#organization` },
      inLanguage: "ja",
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <PainPointsSection />
        <FeaturesSection />
        <SystemSection />
        <UseCaseSection />
        <FlowSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
