const Tutorial = () => {
  return (
    <section id="tutorial" className="prose prose-gray max-w-none mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">How to Use AI Outfit Generator</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="outfit-card">
          <h3 className="text-xl font-semibold mb-4">1. Define Your Style</h3>
          <p>
            Select your preferred fashion style from our curated list of options. Whether you're into casual streetwear, business professional, or bohemian chic, our AI understands your aesthetic preferences and personal fashion sense to create the perfect outfit combinations.
          </p>
        </div>
        <div className="outfit-card">
          <h3 className="text-xl font-semibold mb-4">2. Specify the Occasion</h3>
          <p>
            Tell us where you're heading - a business meeting, casual brunch, wedding, or date night. Our fashion AI will generate outfits perfectly suited for your event, ensuring you make the right impression while staying true to your personal style.
          </p>
        </div>
        <div className="outfit-card">
          <h3 className="text-xl font-semibold mb-4">3. Personalize</h3>
          <p>
            Customize your results by selecting your age group and gender preference. This helps our AI create more relevant and personalized outfit suggestions that match your lifestyle, body type, and comfort level with different styles.
          </p>
        </div>
        <div className="outfit-card">
          <h3 className="text-xl font-semibold mb-4">4. Generate Outfits</h3>
          <p>
            Click the generate button and watch as our advanced AI creates multiple outfit combinations using machine learning and fashion expertise. Each suggestion comes with detailed descriptions and matching visuals to help you visualize the complete look.
          </p>
        </div>
        <div className="outfit-card">
          <h3 className="text-xl font-semibold mb-4">5. Explore Options</h3>
          <p>
            Browse through multiple outfit suggestions, complete with real-world fashion images. Our AI ensures diversity in style while maintaining your preferences, considering factors like color coordination, seasonal appropriateness, and current fashion trends.
          </p>
        </div>
        <div className="outfit-card">
          <h3 className="text-xl font-semibold mb-4">6. Save & Share</h3>
          <p>
            Found the perfect outfit? Save your favorite combinations and share them with friends. Build your personal style collection for future reference, creating a digital wardrobe assistant that understands and evolves with your fashion preferences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;