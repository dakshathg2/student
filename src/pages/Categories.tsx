import { useState } from "react";
import Navigation from "@/components/Navigation";
import CategoryGrid from "@/components/CategoryGrid";
import DealCard from "@/components/DealCard";
import { searchDeals } from "@/data/studentDeals";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearching(true);
      const results = searchDeals(query);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={handleSearch} searchQuery={searchQuery} />
      
      {/* Categories Header */}
      <section className="bg-primary-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Browse by Category
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore student discounts organized by category. From technology and entertainment 
            to retail and travel, find the best deals for your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Categories or Search Results */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {isSearching ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-foreground">
                  Search Results
                </h2>
                <span className="text-muted-foreground">
                  {searchResults.length} results for "{searchQuery}"
                </span>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
                  {searchResults.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold text-foreground mb-2">No deals found</h3>
                  <p className="text-muted-foreground mb-8">
                    Try searching for different keywords or browse our categories below.
                  </p>
                  <div className="max-w-6xl mx-auto">
                    <CategoryGrid />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <CategoryGrid />
          )}
        </div>
      </section>
    </div>
  );
};

export default Categories;