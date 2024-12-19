import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using AI Outfit Generator, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations. If you do not agree with any of these terms, you 
            are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily use AI Outfit Generator for personal, non-commercial 
            purposes only. This is the grant of a license, not a transfer of title, and under this 
            license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software contained on the site</li>
            <li>Remove any copyright or other proprietary notations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Disclaimer</h2>
          <p className="mb-4">
            The outfit suggestions provided by our AI are recommendations only. We make no guarantees 
            regarding the suitability or availability of suggested items. All materials on AI Outfit 
            Generator's website are provided "as is".
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Limitations</h2>
          <p className="mb-4">
            In no event shall AI Outfit Generator or its suppliers be liable for any damages arising 
            out of the use or inability to use our services, even if we have been notified of the 
            possibility of such damages.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;