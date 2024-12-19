import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Terms = () => {
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
          
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using AI Outfit Generator, you agree to be bound by these Terms of Service
              and all applicable laws and regulations.
            </p>

            <h2>2. Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to use our service for
              personal, non-commercial purposes, subject to these Terms.
            </p>

            <h2>3. User Obligations</h2>
            <ul>
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws</li>
              <li>Not misuse our services</li>
            </ul>

            <h2>4. Service Modifications</h2>
            <p>
              We reserve the right to modify or discontinue our service at any time, with or without notice.
              We shall not be liable to you or any third party for any modification, suspension, or
              discontinuance of the service.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our service are owned by AI Outfit Generator
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              We shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use our service.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
              in which we operate, without regard to its conflict of law provisions.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us at:
              <br />
              Email: terms@aioutfitgenerator.com
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

export default Terms;