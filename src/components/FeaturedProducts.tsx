import { Star, ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

// Import product images
import avocadoImage from "@/assets/products/avocado.jpg";
import strawberryImage from "@/assets/products/strawberry.jpg";
import milkImage from "@/assets/products/milk.jpg";
import MuttonImage from "@/assets/products/Mutton.jpg";
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
import CoolCakes from "@/assets/products/CoolCakes.webp";
import Cakes from "@/assets/products/Cakes.webp";
import Waterbottles from "@/assets/products/Waterbottles.jpg";
import Thumpsup from "@/assets/products/Thumpsup.jpg";
import Sprite from "@/assets/products/Sprite.jpg";
import Sprite740 from "@/assets/products/Sprite740.jpg";
import PulpyOrange from "@/assets/products/PulpyOrange.jpg";
import Cocacola from "@/assets/products/Cocacola.jpg";
import SodaJpg from "@/assets/products/Soda.jpg";
import SodaWebp from "@/assets/products/Soda.webp";
import powerup from "@/assets/products/powerup.jpg";
import campa from "@/assets/products/campa.jpg";
import Paste from "@/assets/products/Paste.jpg";
import Brush from "@/assets/products/Brush.jpg";
import Soaps from "@/assets/products/Soaps.jpg";
import BadamMilk from "@/assets/products/BadamMilk.jpg";
import Curd from "@/assets/products/Curd.jpg";
import Icecream from "@/assets/products/Icecream.jpg";
import ChickenBiryani from "@/assets/products/ChickenBiryani.webp";
import ChickenManchurian from "@/assets/products/ChickenManchurian.jpg";
import VegManchurian from "@/assets/products/VegManchurian.webp";
import MuttonBiryani from "@/assets/products/MuttonBiryani.webp";
import EggFriedRice from "@/assets/products/EggFriedRice.webp";
import ChickenFriedRice from "@/assets/products/ChickenFriedRice.webp";
import ChickenNoodles from "@/assets/products/ChickenNoodles.jpg";
import Panbahar from "@/assets/products/Panbahar.jpg";
import Vimal from "@/assets/products/Vimal.jpg";
import RMD from "@/assets/products/RMD.jpg";
import siganture from "@/assets/products/signature.jpg";
import Rajinigandha from "@/assets/products/Rajinigandha.jpg";
import Navaratan from "@/assets/products/Navaratan.jpg";
import Maaza from "@/assets/products/Maaza.jpg";

// Create a mapping of product names to their images
const productImages: { [key: string]: string } = {
  avocado: avocadoImage,
  milk: milkImage,
  mutton: MuttonImage,
  banana: bananaImage,
  eggs: eggsImage,
  spinach: spinachImage,
  chicken: chickenImage,
  sourdough: baguetteImage,    // Match 'sourdough baguette'
  chocolate: croissantImage,   // Match 'chocolate croissants'
  cinnamon: cinnamonRollsImage, // Match 'cinnamon rolls'
  cigarettes: cigarettesImage,
  artisanal: breadImage,       // Match 'artisanal whole wheat bread'
  blueberry: muffinImage,      // Match 'blueberry muffins'
  american: cigarettesImage,   // Match 'american spirit'
  coolcakes: CoolCakes,
  "cool cakes": CoolCakes,
  bread: breadImage,
  cakes: Cakes,
  "water bottle": Waterbottles,
  "thumps up": Thumpsup,
  sprite: Sprite,
  "sprite 740": Sprite740,
  "pulpy orange": PulpyOrange,
  "coca cola": Cocacola,
  soda: SodaWebp || SodaJpg,
  "power up": powerup,
  campa: campa,
  paste: Paste,
  brush: Brush,
  soaps: Soaps,
  "badam milk": BadamMilk,
  curd: Curd,
  "ice cream": Icecream,
  "chicken biryani": ChickenBiryani,
  "chicken manchurian": ChickenManchurian,
  "veg manchurian": VegManchurian,
  "mutton biryani": MuttonBiryani,
  "egg fried rice": EggFriedRice,
  "chicken fried rice": ChickenFriedRice,
  "chicken noodles": ChickenNoodles,
  "pan bahar": Panbahar,
  vimal: Vimal,
  rmd: RMD,
  signature: siganture,
  siganture: siganture,
  "rajini gandha": Rajinigandha,
  navaratan: Navaratan,
  maaza: Maaza
};

// Function to get the correct image for a product
const getProductImage = (productName: string) => {
  const name = productName.toLowerCase();

  // Prioritize more specific keys first by matching longer keys before shorter ones
  const keysBySpecificity = Object.keys(productImages).sort((a, b) => b.length - a.length);
  const key = keysBySpecificity.find(k => name.includes(k));
  return key ? productImages[key] : productImages['bread'];
};

const featuredProducts = [
  {
    id: "1",
    name: "Organic Avocados",
    price: 329,
    originalPrice: 580,
    image: getProductImage("Organic Avocados"),
    rating: 4.8,
    reviews: 156,
    discount: "30% OFF",
    unit: "per bag (3 pcs)",
    isNew: true,
    isFavorite: false
  },
  {
    id: "3",
    name: "Organic Milk",
    price: 89,
    originalPrice: 100,
    image: getProductImage("Organic Milk"),
    rating: 4.7,
    reviews: 89,
    discount: "20% OFF",
    unit: "1 liter",
    isNew: false,
    isFavorite: false
  },
  {
    id: "4",
    name: "Grass-fed Mutton Steak",
    price: 999,
    originalPrice: 1299,
    image: getProductImage("Grass-fed Mutton Steak"),
    rating: 4.9,
    reviews: 124,
    discount: "19% OFF",
    unit: "per kg",
    isNew: true,
    isFavorite: false
  },
  {
    id: "5",
    name: "Organic Bananas",
    price: 79,
    originalPrice: 99,
    image: getProductImage("Organic Bananas"),
    rating: 4.6,
    reviews: 312,
    discount: "20% OFF",
    unit: "per dozen",
    isNew: false,
    isFavorite: false
  },
  {
    id: "6",
    name: "Free-range Eggs",
    price: 7.4,
    originalPrice: null,
    image: getProductImage("Free-range Eggs"),
    rating: 4.8,
    reviews: 245,
    discount: "18% OFF",
    unit: "per",
    isNew: false,
    isFavorite: false
  },
  {
    id: "7",
    name: "Organic Spinach",
    price: 59,
    originalPrice: 69,
    image: getProductImage("Organic Spinach"),
    rating: 4.5,
    reviews: 78,
    discount: "20% OFF",
    unit: "200g bag",
    isNew: false,
    isFavorite: false
  },
  {
    id: "8",
    name: "Grass-fed Chicken",
    price: 259,
    originalPrice: null,
    image: getProductImage("Grass-fed Chicken"),
    rating: 4.9,
    reviews: 45,
    discount: null,
    unit: "per kg",
    isNew: false,
    isFavorite: false
  },
  {
    id: "9",
    name: "Sourdough Baguette",
    price: 119,
    originalPrice: 173,
    image: getProductImage("Sourdough Baguette"),
    rating: 4.7,
    reviews: 92,
    discount: "11% OFF",
    unit: "each",
    isNew: false,
    isFavorite: false
  },
  {
    id: "10",
    name: "Chocolate Croissants",
    price: 149,
    originalPrice: 199,
    image: getProductImage("Chocolate Croissants"),
    rating: 4.9,
    reviews: 187,
    discount: "14% OFF",
    unit: "pack of 4",
    isNew: false,
    isFavorite: false
  },
  {
    id: "11",
    name: "Cinnamon Rolls",
    price: 989,
    originalPrice: null,
    image: getProductImage("Cinnamon Rolls"),
    rating: 4.8,
    reviews: 143,
    discount: null,
    unit: "pack of 6",
    isNew: false,
    isFavorite: false
  },
  {
    id: "12",
    name: "Cigarettes",
    price: 199,
    originalPrice: 259,
    image: getProductImage("Cigarettes"),
    rating: 4.5,
    reviews: 215,
    discount: "7% OFF",
    unit: "pack of 10",
    isNew: false,
    isFavorite: false,
    ageRestricted: true
  },
  {
    id: "13",
    name: "American Spirit Organic",
    price: 14.79,
    originalPrice: null,
    image: getProductImage("American Spirit Organic"),
    rating: 4.6,
    reviews: 178,
    discount: null,
    unit: "per",
    isNew: false,
    isFavorite: false,
    ageRestricted: true
  },
  {
    id: "14",
    name: "Artisanal Whole Wheat Bread",
    price: 414,
    originalPrice: 497,
    image: getProductImage("Artisanal Whole Wheat Bread"),
    rating: 4.8,
    reviews: 134,
    discount: "17% OFF",
    unit: "loaf",
    isNew: false,
    isFavorite: false
  },
  {
    id: "15",
    name: "Blueberry Muffins",
    price: 331,
    originalPrice: 373,
    image: getProductImage("Blueberry Muffins"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "pack of 4",
    isNew: false,
    isFavorite: false
  },
  {
    id: "16",
    name: "Cool Cakes",
    price: 499,
    originalPrice: 699,
    image: getProductImage("Cool Cakes"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per kg",
    isNew: false,
    isFavorite: false
  },
  {
    id: "17",
    name: "Cakes",
    price: 249,
    originalPrice: 399,
    image: getProductImage("Cakes"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per kg",
    isNew: false,
    isFavorite: false
  },
  {
    id: "19",
    name: "Chicken Biryani",
    price: 129,
    originalPrice: 149,
    image: getProductImage("Chicken Biryani"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "20",
    name: "Chicken Manchurian",
    price: 189,
    originalPrice: 249,
    image: getProductImage("Chicken Manchurian"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "21",
    name: "Veg Manchurian",
    price: 99,
    originalPrice: 129,
    image: getProductImage("Veg Manchurian"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "22",
    name: "Mutton Biryani",
    price: 199,
    originalPrice: 249,
    image: getProductImage("Mutton Biryani"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "23",
    name: "Egg Fried Rice",
    price: 109,
    originalPrice: 149,
    image: getProductImage("Egg Fried Rice"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "24",
    name: "Chicken Fried Rice",
    price: 129,
    originalPrice: 179,
    image: getProductImage("Chicken Fried Rice"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "25",
    name: "Chicken Noodles",
    price: 129,
    originalPrice: 179,
    image: getProductImage("Chicken Noodles"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "26",
    name: "Pan bahar",
    price: 4.99,
    originalPrice: 6.99,
    image: getProductImage("Pan bahar"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single exclusive - (either baba or ratna)",
    isNew: false,
    isFavorite: false
  },
  {
    id: "27",
    name: "Vimal",
    price: 4.99,
    originalPrice: 6.99,
    image: getProductImage("Vimal"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single exclusive - (either baba or ratna)",
    isNew: false,
    isFavorite: false
  },
  {
    id: "28",
    name: "RMD",
    price: 29.99,
    originalPrice: 39.99,
    image: getProductImage("RMD"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single exclusive - (either baba, ratna or pouches)",
    isNew: false,
    isFavorite: false
  },
  {
    id: "29",
    name: "siganture",
    price: 4.99,
    originalPrice: 6.99,
    image: getProductImage("siganture"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single exclusive - (either baba, ratna)",
    isNew: false,
    isFavorite: false
  },
  {
    id: "30",
    name: "Rajini gandha",
    price: 4.99,
    originalPrice: 6.99,
    image: getProductImage("Rajini gandha"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single exclusive - (either baba, ratna or pouches)",
    isNew: false,
    isFavorite: false
  },  
  {
    id: "31",
    name: "Navaratan",
    price: 9.99,
    originalPrice: 14.99,
    image: getProductImage("Navaratan"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single exclusive - (either baba, ratna or pouches)",
    isNew: false,
    isFavorite: false
  },
  {
    id: "32",
    name: "Water bottle",
    price: 19.99,
    originalPrice: 25.99,
    image: getProductImage("Water bottle"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per litre",
    isNew: false,
    isFavorite: false
  },
  {
    id: "33",
    name: "Thumps up",
    price: 19.99,
    originalPrice: 25.99,
    image: getProductImage("Thumps up"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 250ml",
    isNew: false,
    isFavorite: false
  },
  {
    id: "34",
    name: "Sprite",
    price: 19.99,
    originalPrice: 25.99,
    image: getProductImage("Sprite"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 250ml",
    isNew: false,
    isFavorite: false
  },
  {
    id: "35",
    name: "Thumps up",
    price: 49.99,
    originalPrice: 65.99,
    image: getProductImage("Thumps up"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 740ml",
    isNew: false,
    isFavorite: false
  },
  {
    id: "36",
    name: "Sprite",
    price: 49.99,
    originalPrice: 65.99,
    image: getProductImage("Sprite 740"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 740ml",
    isNew: false,
    isFavorite: false
  },
  {
    id: "37",
    name: "Pulpy Orange",
    price: 99.99,
    originalPrice: 129.99,
    image: getProductImage("Pulpy Orange"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per liter",
    isNew: false,
    isFavorite: false
  },
  {
    id: "38",
    name: "Maaza",
    price: 89.99,
    originalPrice: 109.99,
    image: getProductImage("Maaza"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per liter",
    isNew: false,
    isFavorite: false
  },
  {
    id: "39",
    name: "Coca cola",
    price: 89.99,
    originalPrice: 109.99,
    image: getProductImage("Coca cola"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per liter",
    isNew: false,
    isFavorite: false
  },
  {
    id: "40",
    name: "Soda",
    price: 29.99,
    originalPrice: 45.99,
    image: getProductImage("Soda"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 740ml",
    isNew: false,
    isFavorite: false
  },
  {
    id: "41",
    name: "power up",
    price: 9.99,
    originalPrice: 14.99,
    image: getProductImage("power up"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 250ml",
    isNew: false,
    isFavorite: false
  },  
  {
    id: "41",
    name: "campa",
    price: 9.99,
    originalPrice: 14.99,
    image: getProductImage("campa"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per 250ml",
    isNew: false,
    isFavorite: false
  },
  {
    id: "42",
    name: "Paste",
    price: 24.99,
    originalPrice: 34.99,
    image: getProductImage("Paste"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per single",
    isNew: false,
    isFavorite: false
  },
  {
    id: "43",
    name: "Brush",
    price: 19.99,
    originalPrice: 29.99,
    image: getProductImage("Brush"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per",
    isNew: false,
    isFavorite: false
  },
  {
    id: "46",
    name: "Soaps",
    price: 49.99,
    originalPrice: 65.99,
    image: getProductImage("Soaps"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per",
    isNew: false,
    isFavorite: false
  },
  {
    id: "47",
    name: "Badam Milk",
    price: 49.99,
    originalPrice: 65.99,
    image: getProductImage("Badam Milk"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per",
    isNew: false,
    isFavorite: false
  },
  {
    id: "48",
    name: "Curd",
    price: 49.99,
    originalPrice: 55.99,
    image: getProductImage("Curd"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per half kg",
    isNew: false,
    isFavorite: false
  },
  {
    id: "49",
    name: "Ice cream",
    price: 99.99,
    originalPrice: 125.99,
    image: getProductImage("Ice cream"),
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "per half kg",
    isNew: false,
    isFavorite: false
  },
];

// Export the products array so it can be imported by other components
export { featuredProducts };

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: getProductImage(product.name),
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      action: (
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-fresh-green-600 hover:bg-fresh-green-50"
          onClick={() => {
            // View cart action would go here
          }}
        >
          View Cart
        </Button>
      ),
    });
  };

  return (
    <section id="featured-products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-fresh-green-700 bg-fresh-green-100 rounded-full mb-4">
            Fresh Picks
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-fresh-green-600">Featured</span> Products
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fresh-green-400 to-deep-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked fresh products with the best quality and great prices for your healthy lifestyle
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-fresh-green-200"
            >
              {/* Product Labels */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {product.isNew && (
                  <span className="bg-fresh-green-100 text-fresh-green-800 text-xs font-bold px-3 py-1 rounded-full border border-fresh-green-200">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="bg-vibrant-orange-100 text-vibrant-orange-800 text-xs font-bold px-3 py-1 rounded-full border border-vibrant-orange-200">
                    {product.discount}
                  </span>
                )}
              </div>
              
              {/* Wishlist Button */}
              <button 
                className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                  product.isFavorite 
                    ? 'text-red-500 bg-white/90 shadow-md' 
                    : 'text-gray-300 hover:text-gray-500 bg-white/80 backdrop-blur-sm hover:bg-white/90'
                } transition-colors`}
                onClick={() => {}}
              >
                <Heart 
                  className={`w-5 h-5 ${product.isFavorite ? 'fill-current' : ''}`} 
                />
              </button>

              {/* Product Image */}
              <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{product.unit}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-fresh-green-600">
                      ₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
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

                {/* Add to Cart Button */}
                <Button 
                  className="w-full group-hover:bg-fresh-green-600 group-hover:text-white transition-all duration-300"
                  variant="outline"
                  size="lg"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-6 text-base font-medium rounded-full border-2 border-fresh-green-500 text-fresh-green-600 hover:bg-fresh-green-50 hover:border-fresh-green-600 transition-all group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;