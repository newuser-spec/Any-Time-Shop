import { Card, CardContent } from "@/components/ui/card";
import vegetablesImage from "@/assets/vegetables-category.jpg";
import fruitsImage from "@/assets/fruits-category.jpg";
import dairyImage from "@/assets/dairy-category.jpg";
import meatImage from "@/assets/meat-category.jpg";
import bakeryImage from "@/assets/bakery.avif";
import beveragesImage from "@/assets/Beverages.webp";
import snacksImage from "@/assets/snacks.jpg";
import householdImage from "@/assets/Household.webp";


const categories = [
  {
    id: 1,
    name: "Fresh Vegetables",
    image: vegetablesImage,
    count: "120+ items"
  },
  {
    id: 2,
    name: "Fruits",
    image: fruitsImage,
    count: "85+ items"
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    image: dairyImage,
    count: "65+ items"
  },
  {
    id: 4,
    name: "Meat & Seafood",
    image: meatImage,
    count: "45+ items"
  },
  {
    id: 5,
    name: "Bakery Items",
    image: bakeryImage, 
    count: "30+ items"
  },
  {
    id: 6,
    name: "Beverages",
    image: beveragesImage,
    count: "95+ items"
  },
  {
    id: 7,
    name: "Snacks",
    image: snacksImage,
    count: "75+ items"
  },
  {
    id: 8,
    name: "Household",
    image: householdImage,
    count: "150+ items"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our wide selection of fresh and quality products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-fresh-green transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;