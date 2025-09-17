import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      // Here you would typically send this to your backend
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  const handleSocialClick = (platform: string) => {
    const urls: { [key: string]: string } = {
      facebook: "https://facebook.com/AnyTimeShop",
      twitter: "https://twitter.com/AnyTimeShop",
      instagram: "https://instagram.com/AnyTimeShop"
    };
    window.open(urls[platform], "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-fresh-green text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
  <span className="text-fresh-green font-bold text-xl leading-none">24</span>
</div>
              <span className="text-xl font-bold">AnyTimeShop</span>
            </div>
            <p className="text-green-100">
              Your trusted partner for fresh, organic groceries delivered right to your doorstep.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20"
                onClick={() => handleSocialClick('facebook')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20"
                onClick={() => handleSocialClick('twitter')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20"
                onClick={() => handleSocialClick('instagram')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['Shop All', 'Fresh Produce', 'Dairy & Eggs', 'Meat & Seafood', 'Special Offers'].map((item) => (
                <div 
                  key={item}
                  className="text-green-100 hover:text-white transition-colors cursor-pointer"
                  onClick={() => handleNavigation(`/category/${item.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <div className="space-y-2">
              {['Help Center', 'Track Your Order', 'Returns & Refunds', 'Delivery Info', 'Contact Us'].map((item) => (
                <div 
                  key={item}
                  className="text-green-100 hover:text-white transition-colors cursor-pointer"
                  onClick={() => handleNavigation(`/${item.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-green-100">1-800-FRESH-99</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-green-100">help@AnyTimeShop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-green-100">New York, NY</span>
              </div>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <p className="text-green-100 text-sm">Subscribe for deals & updates</p>
              <div className="flex gap-2">
                <Input 
                  type="email"
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-green-100">
            &copy; 2025 Online Grocery Store
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;