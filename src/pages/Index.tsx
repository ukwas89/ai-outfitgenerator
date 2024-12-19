import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import GeneratorForm from "@/components/GeneratorForm";
import OutfitResults from "@/components/OutfitResults";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Tutorial from "@/components/Tutorial";
import Features from "@/components/Features";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [outfits, setOutfits] = useState<string[]>([]);
  const [style, setStyle] = useState("");
  const [occasion, setOccasion] = useState("");
  const [age, setAge] = useState("adult");
  const [gender, setGender] = useState("unisex");
  const [progress, setProgress] = useState(0);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [usedImages, setUsedImages] = useState<string[]>([]);
  const [shouldRefreshImages, setShouldRefreshImages] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const generateOutfit = async () => {
    if (!style || !occasion) {
      toast({
        title: "Please fill in all fields",
        description: "Both style and occasion are required to generate an outfit.",
        variant: "destructive",
      });
      return;
    }

    if (!isCaptchaValid) {
      toast({
        title: "CAPTCHA verification required",
        description: "Please enter the correct CAPTCHA code.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setShouldRefreshImages(false);
    setUsedImages([]); // Reset used images when generating new outfits
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockOutfits = [
        `For a ${occasion} in ${style} style, try: A tailored blazer in navy blue, paired with high-waisted cream trousers, and leather loafers.`,
        `Another ${style} option for ${occasion}: A silk blouse in blush pink, matched with a pleated midi skirt and pointed toe heels.`,
        `${style} alternative for ${occasion}: A cashmere sweater in camel, dark wash jeans, and suede ankle boots.`,
        `Perfect for ${occasion} in ${style}: A structured dress in emerald green, accessorized with gold jewelry and classic pumps.`
      ];
      
      setOutfits(mockOutfits);
      setShouldRefreshImages(true);
      
      toast({
        title: "Outfits generated!",
        description: "Here are some stylish suggestions for you.",
      });
    } catch (error) {
      toast({
        title: "Error generating outfits",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setProgress(100);
      setIsCaptchaValid(false);
    }
  };

  const handleImageSelected = (image: string) => {
    setUsedImages(prev => [...prev, image]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <Hero />

          <Card className="p-6">
            <GeneratorForm
              style={style}
              setStyle={setStyle}
              occasion={occasion}
              setOccasion={setOccasion}
              age={age}
              setAge={setAge}
              gender={gender}
              setGender={setGender}
              loading={loading}
              progress={progress}
              isCaptchaValid={isCaptchaValid}
              setIsCaptchaValid={setIsCaptchaValid}
              onGenerate={generateOutfit}
            />
          </Card>

          {outfits.length > 0 && (
            <OutfitResults
              outfits={outfits}
              age={age}
              gender={gender}
              usedImages={usedImages}
              onImageSelected={handleImageSelected}
              shouldRefreshImages={shouldRefreshImages}
            />
          )}

          <Tutorial />
          <Features />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;