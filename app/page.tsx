import { BenefitsBar } from "./components/BenefitsBar";
import { BrandStorySection } from "./components/BrandStorySection";
import { CategoriesSection } from "./components/CategoriesSection";
import { FaqSection } from "./components/FaqSection";
import { FeaturedProductsSection } from "./components/FeaturedProductsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { KitsSection } from "./components/KitsSection";
import { PromoBanner } from "./components/PromoBanner";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { UrgencyBanner } from "./components/UrgencyBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BenefitsBar />
      <CategoriesSection />
      <FeaturedProductsSection />
      <PromoBanner />
      <KitsSection />
      <BrandStorySection />
      <TestimonialsSection />
      <UrgencyBanner />
      <FaqSection />
      <Footer />
    </main>
  );
}
