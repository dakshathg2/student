import { Link } from "react-router-dom";
import { 
  Users, 
  Laptop, 
  PlayCircle, 
  ShoppingBag, 
  Plane, 
  UtensilsCrossed,
  ArrowRight
} from "lucide-react";
import { categories, getDealsByCategory } from "@/data/studentDeals";

const CategoryGrid = () => {
  const getCategoryIcon = (category: string) => {
    const iconClass = "h-8 w-8";
    switch (category) {
      case "Aggregators": return <Users className={iconClass} />;
      case "Tech": return <Laptop className={iconClass} />;
      case "Entertainment": return <PlayCircle className={iconClass} />;
      case "Retail": return <ShoppingBag className={iconClass} />;
      case "Travel": return <Plane className={iconClass} />;
      case "Food": return <UtensilsCrossed className={iconClass} />;
      default: return <ShoppingBag className={iconClass} />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Aggregators": return "from-primary to-primary-dark";
      case "Tech": return "from-blue-500 to-blue-600";
      case "Entertainment": return "from-purple-500 to-purple-600";
      case "Retail": return "from-green-500 to-green-600";
      case "Travel": return "from-orange-500 to-orange-600";
      case "Food": return "from-red-500 to-red-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "Aggregators": return "Platforms that collect student deals from multiple brands";
      case "Tech": return "Discounts on laptops, software, gadgets, and tech accessories";
      case "Entertainment": return "Streaming services, music platforms, and digital content";
      case "Retail": return "Clothing, accessories, and general merchandise discounts";
      case "Travel": return "Airlines, hotels, car rentals, and transportation deals";
      case "Food": return "Food delivery, meal kits, and restaurant discounts";
      default: return "Explore student discounts in this category";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const dealsCount = getDealsByCategory(category).length;
        return (
          <Link
            key={category}
            to={`/category/${category.toLowerCase()}`}
            className="category-card group"
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryGradient(category)} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {getCategoryIcon(category)}
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">{category}</h3>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </div>
            
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {getCategoryDescription(category)}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-primary">
                {dealsCount} deals available
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                Explore
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryGrid;