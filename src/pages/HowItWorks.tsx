import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold mb-8">How It Works</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="outfit-card">
              <h3 className="text-xl font-semibold mb-4">1. Define Your Style</h3>
              <p>
                Select your preferred fashion style from our curated list of options. Whether you're into
                casual streetwear, business professional, or bohemian chic, our AI understands your
                aesthetic preferences.
              </p>
            </div>

            <div className="outfit-card">
              <h3 className="text-xl font-semibold mb-4">2. Specify the Occasion</h3>
              <p>
                Tell us where you're heading - a business meeting, casual brunch, wedding, or date night.
                Our fashion AI will generate outfits perfectly suited for your event.
              </p>
            </div>

            <div className="outfit-card">
              <h3 className="text-xl font-semibold mb-4">3. Personalize</h3>
              <p>
                Customize your results by selecting your age group and gender preference. This helps our
                AI create more relevant and personalized outfit suggestions.
              </p>
            </div>

            <div className="outfit-card">
              <h3 className="text-xl font-semibold mb-4">4. Generate Outfits</h3>
              <p>
                Click the generate button and watch as our advanced AI creates multiple outfit combinations
                using machine learning and fashion expertise.
              </p>
            </div>

            <div className="outfit-card">
              <h3 className="text-xl font-semibold mb-4">5. Explore Options</h3>
              <p>
                Browse through multiple outfit suggestions, complete with detailed descriptions and
                matching visuals to help you visualize the complete look.
              </p>
            </div>

            <div className="outfit-card">
              <h3 className="text-xl font-semibold mb-4">6. Save & Share</h3>
              <p>
                Found the perfect outfit? Save your favorite combinations and share them with friends.
                Build your personal style collection for future reference.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;