import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import DealCard from "@/components/DealCard";
import { studentDeals, searchDeals, getDealsByCategory } from "@/data/studentDeals";
import { useState, useEffect } from "react";

const DealPage = () => {
  const { dealId } = useParams<{ dealId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

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

  const deal = studentDeals.find(d => d.id === dealId);

  if (!deal) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Deal Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The deal you're looking for doesn't exist or has been removed.
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

  // Get related deals from the same category
  const relatedDeals = getDealsByCategory(deal.category as any)
    .filter(d => d.id !== deal.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Deal Header */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Deals</span>
          </Link>
        </div>
      </section>

      {/* Deal Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {isSearching && searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Search Results for "{searchQuery}"
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
                {searchResults.map((searchDeal) => (
                  <DealCard key={searchDeal.id} deal={searchDeal} />
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <DealCard deal={deal} showFullDetails={true} />
              
              {/* Student Verification Tips */}
              <div className="mt-12 p-6 bg-primary-light rounded-lg border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  💡 Student Verification Tips
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Make sure you have access to your school email (.edu domain works best)</li>
                  <li>• Have your student ID ready for upload if required</li>
                  <li>• Some platforms may ask for enrollment verification documents</li>
                  <li>• Verification typically takes 1-3 business days</li>
                  <li>• Keep your student status updated annually</li>
                </ul>
              </div>

              {/* Related Deals */}
              {relatedDeals.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-foreground mb-8">
                    More {deal.category} Deals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedDeals.map((relatedDeal) => (
                      <DealCard key={relatedDeal.id} deal={relatedDeal} />
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="mt-16 text-center p-8 bg-card-gradient rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Saving?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Click the button below to visit {deal.name} and claim your student discount.
                </p>
                <a
                  href={`https://${deal.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-success text-success-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-success/90 transition-colors shadow-brand"
                >
                  <span>Visit {deal.name}</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DealPage;