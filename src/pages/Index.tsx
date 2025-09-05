import { useState, useEffect } from "react";
import { Search, Star, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import DealCard from "@/components/DealCard";
import { studentDeals, searchDeals } from "@/data/studentDeals";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(studentDeals);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const results = searchDeals(searchQuery);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults(studentDeals);
    }
  }, [searchQuery]);

  const stats = [
    { icon: Users, label: "Student Platforms", value: "50+" },
    { icon: TrendingUp, label: "Categories", value: "6" },
    { icon: Star, label: "Featured Deals", value: "8" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 shadow-hero">
            Unlock Exclusive Student Discounts
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Verify and Save! Access exclusive deals from 50+ popular platforms with your student status.
          </p>
          
          {/* Hero Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <input
                type="text"
                placeholder="Search for discounts by brand, category, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 text-lg bg-white border-0 rounded-2xl shadow-hero focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results or Main Content */}
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
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No deals found</h3>
                  <p className="text-muted-foreground">
                    Try searching for different keywords or browse our categories below.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Featured Deals Carousel */}
              <div className="mb-16">
                <FeaturedCarousel />
              </div>

              {/* Categories Section */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Browse by Category
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover student discounts organized by category. From tech gadgets to food delivery, 
                    find the best deals for your lifestyle.
                  </p>
                </div>
                <CategoryGrid />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-bold text-xl text-foreground mb-4">StudentDiscountHub</h3>
              <p className="text-muted-foreground mb-4">
                Your one-stop destination for exclusive student discounts and deals. 
                Save money on everything from tech to travel with verified student pricing.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 StudentDiscountHub. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/category/tech" className="hover:text-primary transition-colors">Tech</a></li>
                <li><a href="/category/entertainment" className="hover:text-primary transition-colors">Entertainment</a></li>
                <li><a href="/category/retail" className="hover:text-primary transition-colors">Retail</a></li>
                <li><a href="/category/travel" className="hover:text-primary transition-colors">Travel</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
