import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import DealCard from "@/components/DealCard";
import { getDealsByCategory, categories, searchDeals } from "@/data/studentDeals";
import { useState, useEffect } from "react";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";
  const validCategory = categories.find(cat => cat.toLowerCase() === category?.toLowerCase());
  
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const results = searchDeals(searchQuery);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (!validCategory) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Category Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The category you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryDeals = getDealsByCategory(validCategory);
  const displayDeals = isSearching ? searchResults : categoryDeals;

  const getCategoryDescription = (cat: string) => {
    switch (cat) {
      case "Aggregators": 
        return "Platforms that aggregate student deals from multiple brands, making it easy to find and verify discounts in one place.";
      case "Tech": 
        return "Save on laptops, software, gadgets, and tech accessories from major brands like Apple, Microsoft, and Adobe.";
      case "Entertainment": 
        return "Discounted streaming services, music platforms, and digital content to keep you entertained while studying.";
      case "Retail": 
        return "Fashion, accessories, and general merchandise from popular clothing brands and department stores.";
      case "Travel": 
        return "Student discounts on flights, hotels, car rentals, and transportation to help you travel on a budget.";
      case "Food": 
        return "Food delivery services, meal kits, and restaurant discounts to keep you fed without breaking the bank.";
      default: 
        return "Explore student discounts in this category.";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Category Header */}
      <section className="bg-primary-light py-16 px-4">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {categoryName} Student Discounts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {getCategoryDescription(validCategory)}
            </p>
            
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>{isSearching ? searchResults.length : categoryDeals.length} deals available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {isSearching && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Search Results in {categoryName}
              </h2>
              <p className="text-muted-foreground">
                {searchResults.length} results for "{searchQuery}"
              </p>
            </div>
          )}

          {displayDeals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
              {displayDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isSearching ? "No search results" : "No deals found"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {isSearching 
                  ? `No deals found for "${searchQuery}" in ${categoryName}.`
                  : `We're working on adding more deals to the ${categoryName} category.`
                }
              </p>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                <span>Browse All Categories</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;