import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { featuredProducts } from "@/components/FeaturedProducts";

// Import product images
import avocadoImage from "@/assets/products/avocado.jpg";
import strawberryImage from "@/assets/products/strawberry.jpg";
import milkImage from "@/assets/products/milk.jpg";
import beefImage from "@/assets/products/beef.jpg";
import bananaImage from "@/assets/products/banana.jpg";
import eggsImage from "@/assets/products/eggs.jpg";
import spinachImage from "@/assets/products/spinach.jpg";
import chickenImage from "@/assets/products/chicken.jpg";
import baguetteImage from "@/assets/products/baguette.jpg";
import croissantImage from "@/assets/products/croissant.jpeg";
import cinnamonRollsImage from "@/assets/products/cinnamon-rolls.jpg";
import cigarettesImage from "@/assets/products/cigarettes.webp";
import breadImage from "@/assets/products/bread.jpg";
import muffinImage from "@/assets/products/muffin.jpg";

// Create a mapping of product names to their images
const productImages: { [key: string]: string } = {
  'avocado': avocadoImage,
  'strawberry': strawberryImage,  // Match 'strawberry' products
  'milk': milkImage,
  'beef': beefImage,
  'banana': bananaImage,
  'eggs': eggsImage,
  'spinach': spinachImage,
  'chicken': chickenImage,
  'sourdough': baguetteImage,    // Match 'sourdough baguette'
  'chocolate': croissantImage,   // Match 'chocolate croissants'
  'cinnamon': cinnamonRollsImage, // Match 'cinnamon rolls'
  'cigarettes': cigarettesImage,
  'artisanal': breadImage,       // Match 'artisanal whole wheat bread'
  'blueberry': muffinImage,      // Match 'blueberry muffins'
  'american': cigarettesImage,   // Match 'american spirit'
};

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(featuredProducts);

  // Function to get the correct image for a product
  const getProductImage = (productName: string) => {
    const name = productName.toLowerCase();
    
    // Check for exact matches first
    if (name.includes('strawberry')) {
      console.log('Loading strawberry image:', strawberryImage);
      return strawberryImage;  // Directly return the imported image
    }
    if (name.includes('sourdough')) return productImages['sourdough'];
    if (name.includes('chocolate')) return productImages['chocolate'];
    if (name.includes('cinnamon')) return productImages['cinnamon'];
    if (name.includes('artisanal')) return productImages['artisanal'];
    if (name.includes('blueberry')) return productImages['blueberry'];
    if (name.includes('american')) return productImages['american'];
    
    // Check for partial matches
    const key = Object.keys(productImages).find(k => name.includes(k));
    const result = key ? productImages[key] : productImages['bread'];
    console.log(`Image for ${productName}:`, result);
    return result;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      const filtered = featuredProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(featuredProducts);
    }
  }, [location.search]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: getProductImage(product.name),
      quantity: 1,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h2>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <Button 
              className="mt-4" 
              onClick={() => {
                setSearchQuery('');
                setFilteredProducts(featuredProducts);
                navigate('/');
              }}
            >
              Back to Home
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
                  <img
                    src={getProductImage(product.name)}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-fresh-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">{product.unit}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-fresh-green-600">
                        ₹{product.price.toLocaleString('en-IN')}
                      </div>
                      {product.originalPrice && (
                        <div className="text-xs text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-fresh-green-600 hover:bg-fresh-green-700"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
