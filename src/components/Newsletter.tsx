import { useState } from "react";
import { Check, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fresh-green-400 to-vibrant-orange-400"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-fresh-green-50 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-vibrant-orange-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side - Illustration */}
              <div className="bg-gradient-to-br from-fresh-green-50 to-fresh-green-100 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-fresh-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h3>
                  <p className="text-gray-600 mb-2">Subscribe to our newsletter</p>
                  <p className="text-sm text-gray-500">Get the latest updates and offers</p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 md:p-12">
                {isSubscribed ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 bg-fresh-green-100 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-fresh-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">You've been successfully subscribed to our newsletter.</p>
                    <p className="text-sm text-gray-500">Check your inbox for the welcome email.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe Now</h3>
                    <p className="text-gray-600 mb-6">Get the latest news and exclusive offers</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fresh-green-500 focus:border-transparent transition-all"
                            placeholder="your@email.com"
                          />
                          {error && (
                            <p className="mt-1 text-sm text-red-600">{error}</p>
                          )}
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
                          isLoading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-fresh-green-500 to-fresh-green-600 hover:from-fresh-green-600 hover:to-fresh-green-700'
                        }`}
                      >
                        {isLoading ? (
                          'Subscribing...'
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Subscribe
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;