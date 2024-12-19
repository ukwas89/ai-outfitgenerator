import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tutorial from "@/components/Tutorial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary">
      <main className="flex-grow">
        <Hero />
        <Features />
        <Tutorial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;