import BalanceSplitDemo from "@/components/landing/BalanceSplitDemo";
import CallToAction from "@/components/landing/CallToAction";
import ExpenseMockup from "@/components/landing/ExpenseMockup";
import FAQs from "@/components/landing/FAQs";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import MobilePreview from "@/components/landing/MobilePreview";
import Navbar from "@/components/landing/Navbar";
import PricingPlans from "@/components/landing/PricingPlans";
import Testimonials from "@/components/landing/Testimonials";
import UseCases from "@/components/landing/UseCases";
import WhyZentrix from "@/components/landing/WhyZentrix";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <UseCases />
      <ExpenseMockup />
      <BalanceSplitDemo />
      <WhyZentrix />
      <MobilePreview />
      <Testimonials />
      <PricingPlans />
      <FAQs />
      <CallToAction />
      <Footer />
    </div>
  );
}
