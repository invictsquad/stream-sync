import MarqueeStrip from "@/components/MarqueeStrip";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top Marquee Strip */}
      <MarqueeStrip />

      {/* Header */}
      <Header />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Section 2: Features */}
      <FeaturesSection />

      {/* Section 3: About */}
      <AboutSection />

      {/* Section 4: Testimonials */}
      <TestimonialsSection />

      {/* Section 5: CTA */}
      <CTASection />

      {/* Section 6: Contact */}
      <ContactSection />

      {/* Bottom Marquee Strip */}
      <MarqueeStrip />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
