import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Privacy = () => {
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
          
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including when you create an account,
              use our services, or communicate with us. This may include:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Style preferences and outfit choices</li>
              <li>Usage data and interaction with our services</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Ensure security and prevent fraud</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
              <li>Other parties with your consent</li>
            </ul>

            <h2>4. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of certain data sharing</li>
            </ul>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@aioutfitgenerator.com
              <br />
              Address: 123 Fashion Street, Style City, ST 12345
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;