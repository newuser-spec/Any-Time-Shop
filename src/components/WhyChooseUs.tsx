import { Truck, Shield, Leaf, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-fresh-green-600" />,
    title: "Fast & Free Delivery",
    description: "Free delivery on all orders over $50. Same-day delivery available in selected areas.",
  },
  {
    icon: <Shield className="w-8 h-8 text-fresh-green-600" />,
    title: "Quality Guarantee",
    description: "We source only the freshest products. Not satisfied? Get a full refund.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-fresh-green-600" />,
    title: "100% Organic",
    description: "All our products are certified organic and pesticide-free for your health.",
  },
  {
    icon: <Clock className="w-8 h-8 text-fresh-green-600" />,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you.",
  },
];

const WhyChooseUs = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const targetCount = 10000;

  useEffect(() => {
    const duration = 3000; // Animation duration in ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = (t: number) => t * (2 - t);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(targetCount * progress);
      
      if (currentCount <= targetCount) {
        setCustomerCount(currentCount);
      } else {
        setCustomerCount(targetCount);
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-deep-blue-700 bg-deep-blue-100 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Provide <span className="text-fresh-green-600">The Best</span> For You
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fresh-green-400 to-deep-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best quality products and service to our customers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-fresh-green-200"
            >
              <div className="w-16 h-16 rounded-xl bg-fresh-green-50 flex items-center justify-center mb-6 mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-fresh-green-600 to-deep-blue-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                  <span className="animate-pulse">🍎</span>
                  <span className="ml-2">100%</span>
                </div>
                <p className="text-fresh-green-100 font-medium">Organic Products</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                  <span className="animate-bounce">⭐</span>
                  <span className="ml-2">4.9/5</span>
                </div>
                <p className="text-fresh-green-100 font-medium">Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                  <Users className="w-8 h-8 mr-2" />
                  <span>{customerCount.toLocaleString()}+</span>
                </div>
                <p className="text-fresh-green-100 font-medium">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
