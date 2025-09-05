import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredDeals } from "@/data/studentDeals";
import DealCard from "./DealCard";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, featuredDeals.length - itemsPerSlide);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [itemsPerSlide]);

  const maxIndex = Math.max(0, featuredDeals.length - itemsPerSlide);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  if (featuredDeals.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Featured Deals</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-lg border border-border hover:bg-card-hover transition-colors"
            disabled={featuredDeals.length <= itemsPerSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-lg border border-border hover:bg-card-hover transition-colors"
            disabled={featuredDeals.length <= itemsPerSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
            width: `${(featuredDeals.length / itemsPerSlide) * 100}%`
          }}
        >
          {featuredDeals.map((deal) => (
            <div 
              key={deal.id} 
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / featuredDeals.length}%` }}
            >
              <DealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedCarousel;