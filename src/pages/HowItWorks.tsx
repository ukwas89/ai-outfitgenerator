import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">How It Works</h1>
        
        <div className="prose prose-gray max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Define Your Style</h2>
            <p className="mb-4">
              Select your preferred fashion style from our curated list of options. Whether you're into 
              casual streetwear, business professional, or bohemian chic, our AI understands your 
              aesthetic preferences and helps create outfits that match your style.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Specify the Occasion</h2>
            <p className="mb-4">
              Tell us where you're heading - whether it's a business meeting, casual brunch, wedding, 
              or date night. Our fashion AI will generate outfits perfectly suited for your event, 
              ensuring you're appropriately dressed for any occasion.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Personalize</h2>
            <p className="mb-4">
              Customize your results by selecting your age group and gender preference. This helps our 
              AI create more relevant and personalized outfit suggestions that align with your personal 
              style and comfort level.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Get Recommendations</h2>
            <p className="mb-4">
              Our advanced AI analyzes thousands of fashion combinations to create personalized outfit 
              suggestions that match your style, occasion, and preferences. Each recommendation is 
              carefully curated to ensure you look and feel your best.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;