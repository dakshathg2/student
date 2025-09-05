import { ExternalLink, ShoppingBag, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { StudentDeal } from "@/data/studentDeals";

interface DealCardProps {
  deal: StudentDeal;
  showFullDetails?: boolean;
}

const DealCard = ({ deal, showFullDetails = false }: DealCardProps) => {
  const getCategoryIcon = (category: string) => {
    const iconClass = "h-5 w-5";
    switch (category) {
      case "Aggregators": return <Tag className={iconClass} />;
      case "Tech": return <ShoppingBag className={iconClass} />;
      case "Entertainment": return <ShoppingBag className={iconClass} />;
      case "Retail": return <ShoppingBag className={iconClass} />;
      case "Travel": return <ShoppingBag className={iconClass} />;
      case "Food": return <ShoppingBag className={iconClass} />;
      default: return <ShoppingBag className={iconClass} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Aggregators": return "bg-primary/10 text-primary";
      case "Tech": return "bg-blue-100 text-blue-700";
      case "Entertainment": return "bg-purple-100 text-purple-700";
      case "Retail": return "bg-green-100 text-green-700";
      case "Travel": return "bg-orange-100 text-orange-700";
      case "Food": return "bg-red-100 text-red-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (showFullDetails) {
    return (
      <div className="deal-card p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              {getCategoryIcon(deal.category)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{deal.name}</h1>
              <p className="text-muted-foreground">{deal.website}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(deal.category)}`}>
            {deal.category}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-muted-foreground">{deal.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Discount</h3>
              <div className="discount-badge inline-block">
                {deal.discount}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Verification</h3>
              <p className="text-muted-foreground">{deal.verification}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">How to Use</h3>
            <ol className="space-y-2">
              {deal.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-4 border-t border-border">
            <a
              href={`https://${deal.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-success text-success-foreground px-6 py-3 rounded-lg font-medium hover:bg-success/90 transition-colors"
            >
              <span>Claim Offer</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="deal-card">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              {getCategoryIcon(deal.category)}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{deal.name}</h3>
              <p className="text-sm text-muted-foreground">{deal.website}</p>
            </div>
          </div>
          {deal.featured && (
            <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {deal.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(deal.category)}`}>
            {deal.category}
          </span>
          <span className="text-success font-medium text-sm">
            {deal.discount}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to={`/deal/${deal.id}`}
            className="flex-1 bg-primary text-primary-foreground text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            View Details
          </Link>
          <a
            href={`https://${deal.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-success text-success-foreground p-2 rounded-lg hover:bg-success/90 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealCard;