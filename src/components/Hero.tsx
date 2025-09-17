import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Truck, Shield, Leaf, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-grocery.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fresh-green-50 to-deep-blue-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmOGY5ZmEiLz4KICA8cGF0aCBkPSJNMzAgMTVjLTguMjggMC0xNSA2LjcyLTE1IDE1aDljMC0zLjMxIDIuNjktNiA2LTZ2LTl6IiBmaWxsPSIjZTBlMGUwIiBvcGFjaXR5PSIwLjEiLz4KICA8cGF0aCBkPSJNNDUgMzBjMC04LjI4LTYuNzItMTUtMTUtMTV2OWMzLjMxIDAgNiAyLjY5IDYgNmgtOXoiIGZpbGw9IiNlMGUwZTAiIG9wYWNpdHk9IjAuMSIvPgogIDxwYXRoIGQ9Ik0zMCA0NWM4LjI4IDAgMTUtNi43MiAxNS0xNWgtOWMwIDMuMzEtMi42OSA2LTYgNnY5eiIgZmlsbD0iI2UwZTBlMCIgb3BhY2l0eT0iMC4xIi8+CiAgPHBhdGggZD0iTTE1IDMwYzAtOC4yOCA2LjcyLTE1IDE1LTE1djljLTMuMzEgMC02IDIuNjktNiA2aC05eiIgZmlsbD0iI2UwZTBlMCIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-fresh-green-100 text-fresh-green-700 text-sm font-medium px-4 py-1.5 rounded-full border border-fresh-green-200">
                <Sparkles className="w-4 h-4" />
                <span>Fresh & Organic</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Fresh Groceries
                <span className="block bg-primary-gradient bg-clip-text text-transparent">
                  Delivered to Your Door
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Get farm-fresh, organic groceries delivered to your doorstep. 
                Quality you can taste, convenience you'll love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gap-2 group bg-fresh-green-600 hover:bg-fresh-green-700 text-white px-8 py-6 text-base font-medium rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                onClick={scrollToProducts}
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2 border-2 border-gray-300 hover:border-fresh-green-300 text-gray-700 hover:bg-fresh-green-50 px-8 py-6 text-base font-medium rounded-full transition-all"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-deep-blue-500" />
                <span>100% Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-fresh-green-500" />
                <span>Farm Fresh</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group">
              <img 
                src={heroImage} 
                alt="Fresh Groceries" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-vibrant-orange-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <div className="text-xs font-semibold">Special Offer</div>
                <div className="font-bold">30% OFF</div>
              </div>
            </div>
            
            {/* Floating feature cards */}
            <div className="hidden lg:block absolute -left-8 -bottom-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-fresh-green-100 p-2 rounded-lg text-fresh-green-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Free Delivery</div>
                  <div className="text-xs text-gray-500">On orders above ₹100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.67,583,72c69,16.86,168.3,26.12,236.5,12.41,118.4-24.3,200.6-112.08,300.5-112.08,42.5,0,85,20,115.5,24.2V120H0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;