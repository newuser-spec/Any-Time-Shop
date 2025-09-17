// src/data/products.ts
import vegetablesImage from "@/assets/vegetables-category.jpg";
import fruitsImage from "@/assets/fruits-category.jpg";
import dairyImage from "@/assets/dairy-category.jpg";
import meatImage from "@/assets/meat-category.jpg";

export const featuredProducts = [
  {
    id: "1",
    name: "Organic Avocados",
    price: 4.99,
    originalPrice: 6.99,
    image: vegetablesImage,
    rating: 4.8,
    reviews: 156,
    discount: "30% OFF",
    unit: "per bag (3 pcs)",
    isNew: true,
    isFavorite: false
  },
  // ... (copy the rest of the products array from FeaturedProducts.tsx)
  {
    id: "15",
    name: "Blueberry Muffins",
    price: 3.99,
    originalPrice: 4.49,
    image: dairyImage,
    rating: 4.7,
    reviews: 201,
    discount: "11% OFF",
    unit: "pack of 4",
    isNew: false,
    isFavorite: false
  }
];
