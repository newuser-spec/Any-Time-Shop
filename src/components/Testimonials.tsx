import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  extendedContent?: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Chef",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    rating: 5,
    content: "The quality of produce is outstanding!",
    extendedContent: "I've been ordering weekly for my family and we can taste the difference. The delivery is always on time and the customer service is exceptional. The fruits and vegetables stay fresh much longer than what I used to get from my local store.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    content: "As someone who's very particular about ingredients, I'm thoroughly impressed with their organic selection.",
    extendedContent: "The fruits and vegetables are always fresh and full of flavor. I've been using their service for a few months now and I'm hooked!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Health Coach",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    content: "I recommend this service to all my clients.",
    extendedContent: "The convenience of having fresh, organic groceries delivered is a game-changer for maintaining a healthy lifestyle. My clients love it!",
    date: "2 weeks ago"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Father of Two",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    content: "The best grocery delivery service I've used.",
    extendedContent: "The quality is consistent, prices are fair, and my kids love the fresh fruits we get every week! It's a great way to get healthy food into our household.",
    date: "3 weeks ago"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Yoga Instructor",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    content: "I'm so happy I found this service.",
    extendedContent: "The organic selection is amazing and the delivery is super reliable. It's made my weekly meal prep so much easier! I can focus on my yoga practice and not worry about grocery shopping.",
    date: "1 month ago"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Retiree",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    content: "At my age, going to the store is challenging.",
    extendedContent: "This service has been a blessing. The quality is excellent and the delivery person is always so kind and helpful. I can get the groceries I need without having to leave my house.",
    date: "1 month ago"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const itemsPerPage = typeof window !== 'undefined' ? (window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, totalPages]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setActiveIndex(0);
      setExpandedTestimonial(null);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (activeIndex * itemsPerPage + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  const toggleExpand = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-200'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fresh-green-400 to-vibrant-orange-400"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-fresh-green-100 opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-vibrant-orange-100 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-4 py-1.5 text-sm font-medium text-vibrant-orange-700 bg-vibrant-orange-100 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our <span className="text-fresh-green-600">Customers</span> Say
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-fresh-green-400 to-vibrant-orange-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </motion.p>
        </div>

        <div 
          className="relative mb-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full flex flex-col relative overflow-hidden group"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-fresh-green-50 transform translate-x-8 -translate-y-8 rotate-45 transition-all duration-300 group-hover:bg-fresh-green-100"></div>
                  
                  <Quote className="w-8 h-8 text-fresh-green-100 mb-6 relative z-10" />
                  
                  <div className="flex-grow relative z-10">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                    
                    <AnimatePresence>
                      {expandedTestimonial === testimonial.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mb-4 leading-relaxed">{testimonial.extendedContent}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="text-fresh-green-600 hover:text-fresh-green-700 text-sm font-medium flex items-center mb-6 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      {expandedTestimonial === testimonial.id ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          <span>Learn more</span>
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{testimonial.rating}.0</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center pt-4 border-t border-gray-100 mt-6">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-fresh-green-400 border-2 border-white flex items-center justify-center">
                        <Quote className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setExpandedTestimonial(null);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-fresh-green-400 to-vibrant-orange-400 w-8' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
