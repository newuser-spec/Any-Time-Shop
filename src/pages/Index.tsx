import { useEffect } from "react";

// Import components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page reload
          if (history.pushState) {
            history.pushState(null, '', targetId);
          } else {
            window.location.hash = targetId;
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Categories Section */}
        <section id="categories" className="py-12 bg-white">
          <Categories />
        </section>
        
        {/* Featured Products Section */}
        <section id="featured-products" className="py-12 bg-gray-50">
          <FeaturedProducts />
        </section>
        
        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-12 bg-white">
          <WhyChooseUs />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 bg-gray-50">
          <Testimonials />
        </section>
        
        {/* Newsletter Section */}
        <section id="newsletter" className="py-12 bg-white">
          <Newsletter />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
