import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { OrderFloat } from "@/components/OrderFloat";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProductCatalog />
      <ServicesSection />
      <Testimonials />
      <Footer />
      <OrderFloat />
    </main>
  );
}
