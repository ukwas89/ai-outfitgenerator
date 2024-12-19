import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when using the AI Outfit Generator, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Style preferences</li>
            <li>Occasion selections</li>
            <li>Age and gender preferences</li>
            <li>Usage data and interactions with our service</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Generate personalized outfit recommendations</li>
            <li>Improve our AI algorithms and service quality</li>
            <li>Enhance user experience and interface</li>
            <li>Analyze trends and user behavior</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. Our security practices include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
            <li>Continuous monitoring of our systems</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;